import { TailSpin } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  formatDate,
  hideLoading,
  openModal,
  showLoading,
} from "../Utils/Helpers";
import config from "../Config/Config";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import { toast } from "react-toastify";
import CaseStageModal from "../Componenets/CaseStageModal";
import * as caseStagesActions from "../Services/Actions/CaseStagesActions";

export const CaseStages = (props) => {
  const navigate = useNavigate();

  //State VAriables
  const [caseStages, setCaseStages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(5);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [search, setSearch] = useState("");
  const [model, setModel] = useState(null);
  const [paginationData, setPaginationData] = useState({
    docs: [],
    hasNextPage: false,
    hasPrevPage: false,
    limit: 0,
    offset: 0,
    page: 0,
    pagingCounter: 0,
    totalDocs: 0,
    totalPages: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllCaseStages(currentPage, searchedTerm);
    } else {
      navigate("/login");
    }
  }, [searchedTerm]);

  const handlePageClick = (data) => {
    let current = data.selected + 1;
    setCurrentPage(current);
    getAllCaseStages(current, searchedTerm);
  };

  const getAllCaseStages = async (current, search) => {
    setLoading(true);
    caseStagesActions.getAll({
            limit: sizePerPage,
            page: current,
            search: search,
          })
      .then(res => {
        console.log("CASE STAGES DATA = ", res)
        setCaseStages(res.list);
        setPages(
          parseInt(res.count % sizePerPage) == 0
            ? parseInt(res.count / sizePerPage)
            : parseInt(res.count / sizePerPage + 1)
        );
      })
      .catch(err => {
        console.log(err);
        toast('Failed to load')
      })
    setLoading(false);
  };

  const openFormModal = async () => {
    openModal("addCaseStagesModal");
  };

  const handleNew = () => {
    setModel({});
    openFormModal();
  };

  const getModels = async (pageNumber = 1) => {
    showLoading();
    getAllCaseStages(currentPage, searchedTerm);
    hideLoading();
  };

  const searchData = (e) => {
    setSearchedTerm(e.target.value);
  };

  const handleEdit = (model) => {
    showLoading();
    caseStagesActions
      .view(model._id)
      .then((res) => {
        hideLoading();
        setModel(res[0]);
        openFormModal();
      })
      .catch((err) => {
        toast("Failed to load");
        hideLoading();
      });
  };

  const formModelClosed = (thingsChanged) => {
    if (thingsChanged) {
      getModels();
    }
  };

  return (
    <>
      {loading ? (
        <div className="custm-loader">
          <TailSpin color="#000" height={200} width={200} />
        </div>
      ) : null}
      <CaseStageModal formModel={model} onClose={formModelClosed} />
      <section className="admin-wrapper">
        <div className="admin-content-wrapper">
          <div className="admin-title-header mt-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Case Stages</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="admin-short-nav-buttons">
                  <div className="table-btn-group">
                    {/* <Link to="/addCaseStages"> */}
                    <button
                      className="btn black-fill"
                      type="button"
                      onClick={handleNew}
                    >
                      Add Case Stage
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-filter-navbar bg-grey">
            <div className="row align-items-center">
              <div className="col-lg-1">
                <h6 className="mb-0">Filters</h6>
              </div>
              <div className="col-lg">
                <div className="filter-input-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Case Stages"
                    onChange={searchData}
                  />
                  <img src="/assets/img/search-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="admin-white-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="common-table-wrapper mt-0">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Group name</th>
                              <th>Added </th>
                              <th> &nbsp; </th>
                            </tr>
                          </thead>
                          <tbody>
                            {caseStages.map((group, i) => {
                              return (
                                <tr key={i}>
                                  <td>
                                    <h5>{group.name}</h5>
                                  </td>
                                  <td>
                                    <h6>
                                      {moment(group.createdAt).format("LLL")}
                                    </h6>
                                  </td>

                                  <td>
                                    <div className="action-btn-group">
                                      {/* <Link
                                          to={`/editCaseStage/${group._id}`}
                                        > */}
                                      {/* <button onClick={() => handleEdit(group)} className="btn" type="button">
                                            {" "}
                                            <img
                                              src="/assets/img/edit-pencil-icon.png"
                                              alt=""
                                            />{" "}
                                          </button> */}
                                      <button
                                        onClick={() => handleEdit(group)}
                                        className="btn"
                                        type="button"
                                      >
                                        <img
                                          src="/assets/img/edit-pencil-icon.png"
                                          alt=""
                                        />{" "}
                                      </button>
                                      {/* </Link> */}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        {caseStages.length > 0 ? (
                          <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pages}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={
                              "pagination justify-content-center"
                            }
                            forcePage={currentPage - 1}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                          />
                        ) : (
                          <div className="text-center">No Data</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

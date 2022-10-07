
import { TailSpin } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  formatDate,
  hideLoading,
  openModal,
  showLoading,
  formatUnderscoredTxt
} from "../Utils/Helpers";
// import { formatUnderscoredTxt } from "./../Utils/Helpers";

import config from "../Config/Config";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import { toast } from "react-toastify";
import CaseStageModal from "../Componenets/CaseStageModal";
import * as caseStagesActions from "../Services/Actions/CaseStagesActions";

const ManageRole = (props) => {
  const navigate = useNavigate();

  //State VAriables
  // const [caseStages, setCaseStages] = useState([]);
  const [roles, setRoles] = useState([]);
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

  console.log('Roles == ', roles)

  useEffect(() => {
    if (localStorage.getItem("token")) {
        getAllRoles(currentPage, searchedTerm);
    } else {
      navigate("/login");
    }
  }, [searchedTerm]);

  const handlePageClick = (data) => {
    let current = data.selected + 1;
    setCurrentPage(current);
    getAllRoles(current, searchedTerm);
  };

  const getAllRoles = async (current, search) => {
    setLoading(true);
    try {
      const result = await axios({
        method: "POST",
        url: `${config.BACKEND_URL}/firm/roles`,
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        data: {
          limit: sizePerPage,
          page: current,
          search: search,
        },
      });
      setRoles(result.data.data.list);
      setPages(
        parseInt(result.data.data.count % sizePerPage) == 0
          ? parseInt(result.data.data.count / sizePerPage)
          : parseInt(result.data.data.count / sizePerPage + 1)
      );
    } catch (error) {
      console.log(error);
    }

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
    getAllRoles(currentPage, searchedTerm);
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
      <section className="admin-wrapper">
        <div className="admin-content-wrapper">
          <div className="admin-title-header mt-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Roles</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="admin-short-nav-buttons">
                  <div className="table-btn-group">
                    <Link to="/addRole">
                    <button
                      className="btn black-fill"
                      type="button"
                      onClick={handleNew}
                    >
                      Add Role
                    </button>
                    </Link>
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
                    placeholder="Search Role"
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
                              <th>Role Names</th>
                              <th>Modules </th>
                              <th> &nbsp; </th>
                            </tr>
                          </thead>
                          <tbody>
                            {roles.map((group, i) => {
                              return (
                                <tr key={i}>
                                  <td>
                                    <h5>{group.name}</h5>
                                  </td>
                                  <td>
                                    <h6>{group.modules.map((module) => {
                                      return formatUnderscoredTxt(module)
                                    }).join(", ")}</h6>
                                  </td>

                                  <td>
                                    <div className="action-btn-group">
                                      <Link to={`/editRole/${group._id}`}>
                                        <button
                                          className="btn"
                                          type="button"
                                        >
                                          {" "}
                                          <img
                                            src="/assets/img/edit-pencil-icon.png"
                                            alt=""
                                          />{" "}
                                        </button>
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        {roles.length > 0 ? (
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

export default ManageRole;

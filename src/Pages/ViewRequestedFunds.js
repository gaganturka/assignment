import { React, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import * as requestFundActions from "../Services/Actions/RequestFundActions";
import {
  formatDate,
  hideLoading,
  openModal,
  showLoading,
} from "../Utils/Helpers";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ViewRequestedFunds = () => {
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

  const [searchedTerm, setSearchedTerm] = useState("");
  const [search, setSearch] = useState("");
  const [model, setModel] = useState(null);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getModels();
  }, [searchedTerm]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePageClick = (data) => {
    let current = data.selected + 1;
    getModels(current);
  };

  const getModels = async (pageNumber = 1) => {
    showLoading();
    requestFundActions
      .get({
        search: searchedTerm,
        page: pageNumber,
      })
      .then((res) => {
        setPaginationData(res);
        hideLoading();
      })
      .catch((err) => {
        toast("Failed to load");
        hideLoading();
      });
  };

  const searchData = (e) => {
    setSearchedTerm(e.target.value);
  };

  return (
    <>
      <section className="admin-wrapper">
        <div className="admin-content-wrapper">
          <div className="admin-title-header mt-0">
            <div className="row">
              <div className="col-lg-9">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Requested Funds</h3>
                    <ul className="archive-ul">
                      <li className="active">
                        <a href={undefined}>All</a>
                      </li>
                      <li>
                        <a href={undefined}>Unsent</a>
                      </li>
                      <li>
                        <a href={undefined}>Sent</a>
                      </li>
                      <li>
                        <a href={undefined}>Paid</a>
                      </li>
                      <li>
                        <a href={undefined}>Partial</a>
                      </li>
                      <li>
                        <a href={undefined}>Overdue</a>
                      </li>
                      <li>
                        <a href={undefined}>Forwarded</a>
                      </li>
                      <li>
                        <a href={undefined}>Draft</a>
                      </li>
                      <li>
                        <a href={undefined}>Batches</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="admin-short-nav-buttons">
                  <div className="table-btn-group">
                    <Link to={"/add-request-fund"}>
                      <button className="btn black-fill" type="button">
                        Add New fund
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-3">
                <div className="filter-input-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Funds"
                    onChange={searchData}
                  />
                  <img src="/assets/img/search-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="admin-white-box mt-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="common-table-wrapper mt-0">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Deposit Into</th>
                          <th>Message</th>
                          <th> &nbsp; </th>
                          {/* <th> &nbsp; </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {paginationData?.docs.map((model, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                <h5>{model.amount}</h5>
                              </td>
                              <td>
                                <h6>{model.dueDate}</h6>
                              </td>
                              <td>
                                <h6>{model.depositInto}</h6>
                              </td>
                              <td>
                                <h6>{model.message}</h6>
                              </td>

                              <td>
                                <div className="action-btn-group">
                                  <Link to={`/edit-request-fund/${model._id}`}>
                                    <button className="btn" type="button">
                                      <img
                                        src="/assets/img/edit-pencil-icon.png"
                                        alt=""
                                      />
                                    </button>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {paginationData.docs.length > 0 ? (
                  <div className="react-paginate-wrapper">
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      pageCount={paginationData?.totalPages}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination justify-content-center"}
                      forcePage={paginationData?.page - 1}
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
                  </div>
                ) : (
                  <div className="text-center">No Data</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewRequestedFunds;

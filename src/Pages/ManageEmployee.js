import { TailSpin } from "react-loader-spinner";
import ReactPaginate from "react-paginate";

import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import employeeActions from "../Services/Actions/EmployeeActions";

const ManageEmployee = () => {
  const navigate = useNavigate();

  //State VAriables
  const [employees, setEmployess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(5);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [search, setSearch] = useState("");
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
      getAllEmployees(currentPage, searchedTerm);
    } else {
      navigate("/login");
    }
  }, [searchedTerm]);

  const handlePageClick = (data) => {
    let current = data.selected + 1;
    setCurrentPage(current);
    getAllEmployees(current, searchedTerm);
  };

  const getAllEmployees = (current, search) => {
    setLoading(true);
    employeeActions
      .get({
        limit: sizePerPage,
        page: current,
        search: search,
      })
      .then((res) => {
        setEmployess(res.list);
        setPages(
          parseInt(res.count % sizePerPage) == 0
            ? parseInt(res.count / sizePerPage)
            : parseInt(res.count / sizePerPage + 1)
        );
        setLoading(false);
      })
      .catch((error) => {
        toast("Failed to load");
        setLoading(false);
      });
  };

  const searchData = (e) => {
    setSearchedTerm(e.target.value);
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
              <div className="col-lg-9">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Employee managment</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="admin-short-nav-buttons">
                  <div className="table-btn-group">
                    <Link to="/add-employee">
                      <button className="btn black-fill" type="button">
                        Add Employee
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
                    placeholder="Search Employee"
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
                          <th>Name</th>
                          <th>Email Id</th>
                          <th> &nbsp; </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((employee, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                <h5>
                                  {employee.userId.firstName +
                                    " " +
                                    employee.userId.lastName}
                                </h5>
                              </td>
                              <td>
                                <h6>{employee.userId.email}</h6>
                              </td>
                              <td>
                                <div className="action-btn-group">
                                  {/* <button className="btn" type="button">
                                    <img
                                      src="/assets/img/eye-icon-black.png"
                                      alt=""
                                    />
                                  </button> */}
                                  <Link to={`/edit-employee/${employee._id}`}>
                                    <button className="btn" type="button">
                                      <img
                                        src="/assets/img/edit-pencil-icon.png"
                                        alt=""
                                      />
                                    </button>
                                  </Link>
                                  <button className="btn" type="button">
                                    <img
                                      src="/assets/img/delete-icon.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {employees.length > 0 ? (
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-center"}
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
      </section>
    </>
  );
};

export default ManageEmployee;

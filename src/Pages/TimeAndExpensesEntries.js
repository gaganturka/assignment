import { React, useEffect, useContext, useState } from "react";
import { Link, useNavigate, useSearchParams, Outlet } from "react-router-dom";
import * as timeExpenseActions from "../Services/Actions/TimeExpenseActions";
import { AuthContext } from "../Context/AuthContext"
import ReactPaginate from "react-paginate";



export const TimeAndExpensesEntries = () => {


    // const { updateEntry, setUpdateEntery } = useContext(AuthContext)
    let [allEnteries, setAllEnteries] = useState([])
    const [description, setDescription] = useState('')
    const [startingDate, setStartingDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [re, setRe] = useState('')
    const [modelFields, setModelFields] = useState('')

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


    const navigate = useNavigate()
    useEffect(() => {
        if (modelFields == 'timeEntry' || modelFields === '') {
            console.log("fetch time Entry" );
            fetchData();
        } else {
            console.log("fetch expense Entry");
            fetchExpenseData();
        }
    }, [re, modelFields]); // Or [] if effect doesn't need props or state

    const fetchData = async (pageNumber = 1) => {
        let data = await timeExpenseActions.viewAllEntries({ description, startingDate, endDate, page: pageNumber, })
        // setAllEnteries(data)
        console.log('time Data',data.docs);

        setPaginationData(data)
    }

    const fetchExpenseData = async (pageNumber = 1) => {
        let data = await timeExpenseActions.getAllExpenseEntries({  description, startingDate, endDate,page: pageNumber })
console.log('expense Data',data.docs);
        setPaginationData(data)
    }



    const update = ((value) => {
        // setUpdateEntery(value)
        navigate(`${value._id}/edit`)
    })

    const updateExpense =((value)=> {
        navigate(`${value._id}/editexpense`)
    })

    const descriptionUpdate = (e) => {
        setDescription(e.target.value)
    }

    const handelStartingDate = (e) => {
        setStartingDate(e.target.value)
    }

    const handelEndDate = (e) => {
        setendDate(e.target.value)
    }
    const handelFilter = () => {
        if (modelFields == 'timeEntry' || modelFields === '') {
        fetchData();
        } else{
            fetchExpenseData()
        }
    }

    const handelClear = (e) => {
        setDescription('')
        setStartingDate('')
        setendDate('')
        setRe(paginationData)

    }

    const handlePageClick = (data) => {
        let current = data.selected + 1;
        fetchData(current);
    };

    const handelChange = (e) => {
        setModelFields(e)
    }

    // console.log('filter', description, startingDate, endDate);



    return (
        <>
            {
                // console.log('value in return', description, startingDate, endDate)
            }
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">

                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Time & Expense Management</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/time-expenses/times/create`}>
                                            <button
                                                className="btn black-fill"
                                                type="button">
                                                Add Time
                                            </button>
                                        </Link>
                                        <Link to={`/time-expenses/expenses/create`}>
                                            <button
                                                className="btn black-fill"
                                                type="button">
                                                Add Expense
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-filter-navbar bg-grey">
                        <div className="row align-items-center">
                            <div className="col-lg">


                            </div>

                            <div className="col-lg">
                                <label htmlFor="" >Time/Expense</label>
                                <select name="rateType"  id="rateType" type="text" className="form-control"
                                    placeholder="select"
                                    // value={modelFields.rateType}
                                    onChange={(e) => handelChange(e.target.value)}
                                >
                                    <option value="timeEntry">TimeEntry</option>
                                    <option value="ExpenseEntry" >ExpenseEntry</option>

                                </select>
                            </div>

                            <div className="col-lg">
                                <div className="filter-input-box" >
                                    <input type="text" width="10px" className="form-control" placeholder="Search by team" value={description} onChange={descriptionUpdate} />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-input-box d-flex align-items-center">
                                    <label className="me-2" htmlFor="">Date range</label>
                                    <input type="date" className="form-control" value={startingDate} onChange={handelStartingDate} placeholder="DD -MM -YYYY" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-input-box d-flex align-items-center">
                                    <label className="me-2" htmlFor="">To</label>
                                    <input type="date" className="form-control" value={endDate} onChange={handelEndDate} placeholder="DD -MM -YYYY" />
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="filter-buttons-wrp">
                                    <ul>
                                        <li className="">
                                            <button className="btn" type="button" onClick={handelFilter} >Apply Filter</button>
                                        </li>
                                        <li className="">
                                            <button className="btn" onClick={handelClear} type="button">Clear Filter</button>
                                        </li>
                                    </ul>
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
                                                            <th>Date</th>
                                                            <th>Activity</th>
                                                            <th>Description</th>

                                                            {modelFields == 'timeEntry' || modelFields === '' ?
                                                                <>
                                                                    <th>Duration</th>
                                                                    <th>Rate</th>
                                                                </>
                                                                :
                                                                <>
                                                                    <th>quantity</th>
                                                                    <th>cost</th>
                                                                </>
                                                            }

                                                            <th>Total</th>

                                                            <th>&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {paginationData?.docs.map(item =>
                                                            <tr>
                                                                <td>
                                                                    <h6>{item.date}</h6>
                                                                </td>
                                                                <td>
                                                                    <h6>{item.firmActivityTypeId}</h6>
                                                                </td>
                                                                <td>
                                                                    <h6>{item.description}
                                                                    </h6>
                                                                </td>
                                                                {modelFields == 'timeEntry' || modelFields === '' ?
                                                                    <>
                                                                        <td>
                                                                            <h6>{item.duration} </h6>
                                                                        </td>
                                                                        <td>
                                                                            {item.rate}
                                                                        </td>
                                                                    </> 
                                                                    :
                                                                    <>
                                                                        <td>
                                                                            <h6>{item.quantity} </h6>
                                                                        </td>
                                                                        <td>
                                                                            {item.cost}
                                                                        </td>
                                                                    </>
                                                                }
                                                                <td>
                                                                    <h6>{item.amount}</h6>
                                                                </td>

                                                                <td>
                                                                    <div className="action-btn-group">
                                                                        {/* <a href="add-time-entry.html"> */}
                                                                        { modelFields == 'timeEntry' || modelFields === '' ?
                                                                        <button onClick={() => update(item)} className="btn black-fill" type="button">Edit
                                                                        </button>
                                                                        :
                                                                        <button onClick={() => updateExpense(item)} className="btn black-fill" type="button">Edit
                                                                        </button>

}
                                                                        {/* </a> */}
                                                                        {/* <button className="btn black-fill" type="button"><img
                                                                            src="/assets/img/eye-icon-black.png" alt="" />
                                                                        </button> */}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {paginationData.docs.length > 0 ?
                                            <div className="react-paginate-wrapper"><ReactPaginate
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                breakLabel={"..."}
                                                pageCount={paginationData?.totalPages}
                                                marginPagesDisplayed={1}
                                                pageRangeDisplayed={3}
                                                onPageChange={handlePageClick}
                                                containerClassName={
                                                    "pagination justify-content-center"
                                                }
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
                                            /></div>
                                            : <div className="text-center">No Data</div>}

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

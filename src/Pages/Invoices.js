import ReactPaginate from "react-paginate";
import React, {useEffect, useMemo, useState} from "react";

import * as contactActions from '../Services/Actions/ContactActions';
import {
    concatStrings,
    formatAmount,
    formatDate,
    handleRequestError,
    hideLoading,
    openModal,
    showLoading
} from "../Utils/Helpers";
import {toast} from "react-toastify";
import * as commonActions from "../Services/Actions/CommonActions";
import * as invoiceActions from "../Services/Actions/InvoiceActions";
import {Link, useNavigate} from "react-router-dom";

export const Invoices = () => {

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
    const [invoiceStatus, setInvoiceStatus] = useState("");

    const [statues, setStatuses] = useState([]);

    const [stats, setStats] = useState({});

    const [search, setSearch] = useState("");

    const handlePageClick = (data) => {
        let current = data.selected + 1;
        getModels(current);
    };


    const loadInvoicesStatuses = () => {
        commonActions.invoiceStatuses().then((res) => {
            let statusData = [];
            for (let statusKey in res) {
                statusData.push({
                    value: statusKey,
                    label: res[statusKey]
                });
            }
            setStatuses(statusData);
            statusData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadStats = () => {
        invoiceActions.stats().then((res) => {
            setStats(res);
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    useEffect(() => {
        getModels();
    }, [searchedTerm, invoiceStatus]);

    useEffect(() => {
        loadInvoicesStatuses();
        loadStats();
    }, [])

    const getModels = async (pageNumber = 1) => {
        showLoading();
        invoiceActions.get({
            search: searchedTerm,
            status: invoiceStatus,
            page: pageNumber,
            with: ['firmCaseId']
        }).then(res => {
            setPaginationData(res);
            hideLoading();
        }).catch(err => {
            toast('Failed to load');
            hideLoading();
        });
    };

    const searchData = (e) => {
        setSearchedTerm(e.target.value);
    };

    const handleDelete = (model) => {
        if (window.confirm("Are you sure you want to delete?") === true) {
            showLoading();
            invoiceActions.deleteRecord(model._id).then(res => {
                toast('Invoice has been deleted');
                getModels(1);
            }).catch(err => {
                handleRequestError(err);
                hideLoading();
            });
        }
    }

    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Invoices</h3>
                                        <ul className="archive-ul">
                                            <li className={`${invoiceStatus === '' ? 'active' : ''}`}>
                                                <a
                                                    onClick={(e) => setInvoiceStatus('')}
                                                    href={undefined}>All</a></li>
                                            {statues?.map((status, i) => {
                                                return (
                                                    <li key={i} className={`${invoiceStatus === status.value ? 'active' : ''}`}>
                                                        <a
                                                            onClick={(e) => setInvoiceStatus(status.value)}
                                                            href={undefined}>{status.label}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to="/invoices/new">
                                            <button className="btn black-fill" type="button">Create Invoice</button>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-3">
                            <div className="filter-input-box">
                                <input onChange={searchData} type="text" className="form-control"
                                       placeholder="Search Invoice"/>
                                <img src="/assets/img/search-icon.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-overview-wrp">
                        <div className="io-head">
                            <h3>Invoice Overview</h3>
                        </div>
                        <div className="invoice-ov-content">
                            <ul>
                                <li>
                                    <div className="io-dot black">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>{formatAmount(stats?.unsent, 0)}</h6>
                                        <p>Unsent</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot grey">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>{formatAmount(stats?.draft, 0)}</h6>
                                        <p>Draft</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot blue">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>{formatAmount(stats?.sent, 0)}</h6>
                                        <p>Sent</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot yellow">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>{formatAmount(stats?.partialPaid, 0)}</h6>
                                        <p>Partial</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot red">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>{formatAmount(stats?.overdue, 0)}</h6>
                                        <p>Overdue</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot green">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>{formatAmount(stats?.paid, 0)}</h6>
                                        <p>Paid</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="admin-white-box mt-4">

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
                                                            <th>&nbsp;</th>
                                                            <th>Number</th>
                                                            <th>Contact</th>
                                                            <th>Case</th>
                                                            <th>Total</th>
                                                            <th>Paid</th>
                                                            <th>Due</th>
                                                            <th>Status</th>
                                                            <th>Updated On</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {paginationData?.docs.map((model, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        <Link to={`/invoices/${model._id}/view`}
                                                                              className="btn view-btn-tb">View</Link>
                                                                    </td>
                                                                    <td>{model?.invoiceNumber}</td>
                                                                    <td>{model?.receiptName}</td>
                                                                    <td>{model?.firmCaseId?.caseName}</td>
                                                                    <td>{formatAmount(model?.payableAmount)}</td>
                                                                    <td>{formatAmount(model?.paidAmount)}</td>
                                                                    <td>{formatAmount((model?.payableAmount - model?.paidAmount))}</td>
                                                                    <td>{model?.status}</td>
                                                                    <td>{formatDate(model.updatedAt)}</td>
                                                                    <td>
                                                                        <div className="action-btn-group">
                                                                            <Link to={`/clients/${model._id}/edit`}>
                                                                                <button className="btn" type="button">
                                                                                    <img
                                                                                        src="/assets/img/dollar-icon.png"
                                                                                        alt=""
                                                                                    />{" "}
                                                                                </button>
                                                                            </Link>
                                                                            <button onClick={() => handleDelete(model)}
                                                                                    className="btn" type="button">
                                                                                <img
                                                                                    src="/assets/img/delete-icon.png"
                                                                                    alt=""
                                                                                />{" "}
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {paginationData.docs.length > 0 ?
                                                <div className="react-paginate-wrapper">
                                                    <ReactPaginate
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


                </div>
            </section>
        </>
    );
};


import ReactPaginate from "react-paginate";
import React, {useEffect, useMemo, useState} from "react";

import * as contactGroupActions from '../Services/Actions/ContactGroupActions';

import {formatDate, hideLoading, openModal, showLoading} from "../Utils/Helpers";
import {toast} from "react-toastify";
import {ContactGroupFormModal} from "../Componenets/ContactGroupFormModal";

export const ContactGroups = (props) => {

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

    useEffect(() => {
        getModels();
    }, [searchedTerm]);

    const handlePageClick = (data) => {
        let current = data.selected + 1;
        getModels(current);
    };

    const getModels = async (pageNumber = 1) => {
        showLoading();
        contactGroupActions.get({
            search: searchedTerm,
            page: pageNumber
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

    const openFormModal = async () => {
        openModal("contactGroupFormModal");
    }

    const handleNew = () => {
        setModel({});
        openFormModal();
    }

    const handleEdit = (model) => {
        showLoading();
        contactGroupActions.view(model._id).then(res => {
            hideLoading();
            setModel(res);
            openFormModal();
        }).catch(err => {
            toast('Failed to load');
            hideLoading();
        });
    }

    const formModelClosed = (thingsChanged) => {
        if (thingsChanged) {
            getModels();
        }
    }

    return (
        <>
            <ContactGroupFormModal formModel={model} onClose={formModelClosed}/>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Contact Groups</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <button
                                            onClick={handleNew}
                                            className="btn black-fill"
                                            type="button">
                                            Add New
                                        </button>
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
                                        placeholder="Search"
                                        onChange={searchData}
                                    />
                                    <img src="/assets/img/search-icon.png" alt=""/>
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
                                                        <th>Name</th>
                                                        <th>Updated On</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {paginationData?.docs.map((model, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td>
                                                                    <h5>{model.name}</h5>
                                                                </td>
                                                                <td>
                                                                    <h6>{formatDate(model.createdAt)}</h6>
                                                                </td>
                                                                <td>
                                                                    <div className="action-btn-group">
                                                                        <button onClick={() => handleEdit(model)}
                                                                                className="btn" type="button">
                                                                            <img
                                                                                src="/assets/img/edit-pencil-icon.png"
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

    )

}

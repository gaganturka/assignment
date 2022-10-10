import ReactPaginate from "react-paginate";
import React, { useEffect, useMemo, useState } from "react";

import * as contactActions from '../Services/Actions/ContactActions';
import { concatStrings, formatDate, handleRequestError, hideLoading, openModal, showLoading } from "../Utils/Helpers";
import { toast } from "react-toastify";
import * as commonActions from "../Services/Actions/CommonActions";
import * as contactGroupActions from "../Services/Actions/ContactGroupActions";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

export const Clients = (props) => {

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
    const [contactType, setContactType] = useState("");
    const [contactGroupId, setContactGroupId] = useState("");

    const [search, setSearch] = useState("");
    const [model, setModel] = useState(null);

    const [contactTypes, setContactTypes] = useState([]);
    const [contactGroups, setContactGroups] = useState([]);

    const loadContactTypes = () => {
        commonActions.contactTypes().then((res) => {
            let contactTypesData = [];
            for (let contactType of res) {
                contactTypesData.push({
                    value: contactType,
                    label: contactType
                });
            }
            setContactTypes(contactTypesData);
            contactTypesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadContactGroups = () => {
        contactGroupActions.getAll().then((res) => {
            let contactGroupsData = [];
            for (let contactGroup of res.docs) {
                contactGroupsData.push({
                    value: contactGroup._id,
                    label: contactGroup.name
                });
            }
            setContactGroups(contactGroupsData);
            contactGroupsData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const handleContactTypeChange = async (event) => {
        setContactType(event?.value);
    }

    const handleContactGroupChange = async (event) => {
        setContactGroupId(event?.value);
    }

    const handlePageClick = (data) => {
        let current = data.selected + 1;
        getModels(current);
    };

    useEffect(() => {
        getModels();
    }, [searchedTerm, contactType, contactGroupId]);

    useEffect(() => {
        loadContactTypes();
        loadContactGroups();
    }, [])

    const getModels = async (pageNumber = 1) => {
        showLoading();
        contactActions.get({
            search: searchedTerm,
            contactType,
            contactGroupId,
            page: pageNumber,
            with: ['firmCompanyId', 'firmContactGroupId']
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

    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Clients</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/clients/new/`}>
                                            <button
                                                className="btn black-fill"
                                                type="button">
                                                Add New
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-filter-navbar bg-grey">
                        <div className="row align-items-center filters-area">
                            <div className="col-lg-1">
                                <h6 className="mb-0">Filters</h6>
                            </div>
                            <div className="col-lg">
                                <div className="filter-select-box">
                                    <div className="react-select">
                                        <Select
                                            isClearable={true}
                                            placeholder="Contact Type"
                                            onChange={handleContactTypeChange}
                                            options={contactTypes}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="filter-select-box">
                                    <div className="react-select">
                                        <Select
                                            isClearable={true}
                                            placeholder="Contact Group"
                                            onChange={handleContactGroupChange}
                                            options={contactGroups}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-input-box">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
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
                                                            <th>Full Name</th>
                                                            <th>Email</th>
                                                            <th>Group</th>
                                                            <th>Type</th>
                                                            <th>Company</th>
                                                            <th>Updated On</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {paginationData?.docs.map((model, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        <h5>{concatStrings(' ', model.firstName, model.middleName, model.lastName)}</h5>
                                                                    </td>
                                                                    <td>{model?.email}</td>
                                                                    <td>{model?.firmContactGroupId?.name}</td>
                                                                    <td>{model?.contactType}</td>
                                                                    <td>{model?.firmCompanyId?.name}</td>
                                                                    <td>{formatDate(model.createdAt)}</td>
                                                                    <td>
                                                                        <div className="action-btn-group">
                                                                            <Link to={`/clients/${model._id}/edit`}>
                                                                                <button className="btn" type="button">
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
            </section>
        </>

    )

}

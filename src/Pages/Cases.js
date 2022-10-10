import ReactPaginate from "react-paginate";
import React, {useEffect, useMemo, useRef, useState} from "react";

import * as caseActions from '../Services/Actions/CaseActions';

import {
    concatStrings,
    formatDate,
    handleRequestError,
    hideLoading,
    openModal,
    printWithDefault,
    showLoading
} from "../Utils/Helpers";
import {toast} from "react-toastify";
import * as commonActions from "../Services/Actions/CommonActions";
import * as contactGroupActions from "../Services/Actions/ContactGroupActions";
import Select from "react-select";
import {Link, useNavigate} from "react-router-dom";
import * as practiceAreasActions from "../Services/Actions/PracticeAreasActions";
import * as caseStagesActions from "../Services/Actions/CaseStagesActions";
import * as employeeActions from "../Services/Actions/EmployeeActions";

export const Cases = (props) => {

    const practiceAreaRef = useRef();
    const leadAttorneyRef = useRef();
    const caseStateRef = useRef();

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

    const [practiceAreas, setPracticeAreas] = useState([]);
    const [selectedPracticeArea, setSelectedPracticeArea] = useState(null);

    const [caseStages, setCaseStages] = useState([]);
    const [selectedCaseStage, setSelectedCaseStage] = useState(null);

    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const loadPracticeAreas = () => {
        practiceAreasActions.getAll().then((res) => {
            let practiceAreasData = [];
            for (let practiceArea of res.docs) {
                practiceAreasData.push({
                    value: practiceArea._id,
                    label: practiceArea.name
                });
            }
            setPracticeAreas(practiceAreasData);
            practiceAreasData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCaseStages = () => {
        caseStagesActions.getAll().then((res) => {
            let caseStagesData = [];
            for (let caseStage of res.list) {
                caseStagesData.push({
                    value: caseStage._id,
                    label: caseStage.name
                });
            }
            setCaseStages(caseStagesData);
            caseStagesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadEmployees = () => {
        employeeActions.getAll({
            with: ['userId']
        }).then((res) => {
            let employeesData = [];
            for (let employee of res.docs) {
                employeesData.push({
                    value: employee._id,
                    label: employee._id
                });
            }
            setEmployees(employeesData);
            employeesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    useEffect(() => {
        loadPracticeAreas();
        loadCaseStages();
        loadEmployees();
        getModels(1);
    }, []);

    const handlePageClick = (data) => {
        let current = data.selected + 1;
        getModels(current);
    };

    const handlePracticeAreaChange = async (event) => {
        setSelectedPracticeArea(event);
    }

    const handleCaseStageChange = async (event) => {
        setSelectedCaseStage(event);
    }

    const handleEmployeeChange = async (event) => {
        setSelectedEmployee(event);
    }

    const getModels = async (pageNumber = 1) => {
        showLoading();
        caseActions.get({
            search: searchedTerm,
            practiceArea: selectedPracticeArea?.value,
            caseStage: selectedCaseStage?.value,
            leadAttorney: selectedEmployee?.value,
            page: pageNumber,
            with: ['leadAttorneyId', 'firmCaseStageId']
        }).then(res => {
            setPaginationData(res);
            hideLoading();
        }).catch(err => {
            toast('Failed to load');
            hideLoading();
        });
    };

    const clearSearch = () => {
        /*practiceAreaRef.current.clearValue();
        caseStateRef.current.clearValue();
        leadAttorneyRef.current.clearValue();*/
        setSelectedEmployee(null);
        setSelectedCaseStage(null);
        setSelectedPracticeArea(null);
        setSearchedTerm(null);
        getModels(1);
    }

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
                                        <h3>Cases</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/cases/create/`}>
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
                            <div className="col-lg">
                                <div className="filter-select-box">
                                    <div className="react-select">
                                        <Select
                                            ref={practiceAreaRef}
                                            isClearable={true}
                                            placeholder="Practice Area"
                                            defaultValue={selectedPracticeArea}
                                            onChange={handlePracticeAreaChange}
                                            options={practiceAreas}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-select-box">
                                    <div className="react-select">
                                        <Select
                                            ref={leadAttorneyRef}
                                            isClearable={true}
                                            placeholder="Lead Attorney"
                                            defaultValue={selectedEmployee}
                                            onChange={handleEmployeeChange}
                                            options={employees}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-select-box">
                                    <div className="react-select">
                                        <Select
                                            ref={caseStateRef}
                                            isClearable={true}
                                            placeholder="Case State"
                                            defaultValue={selectedCaseStage}
                                            onChange={handleCaseStageChange}
                                            options={caseStages}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-switch-box">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show
                                            only my cases</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-buttons-wrp">
                                    <ul>
                                        <li className="">
                                            <button onClick={(e) => getModels(1)} className="btn" type="button">Apply
                                                Filter
                                            </button>
                                        </li>
                                        <li className="">
                                            <button onClick={clearSearch} className="btn" type="button">Clear Filter
                                            </button>
                                        </li>
                                    </ul>
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
                                    <img src="./img/search-icon.png" alt=""/>
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
                                                        <th>Case</th>
                                                        <th>Number</th>
                                                        <th>Case Stage</th>
                                                        <th>Firm Member</th>
                                                        <th>Next Event</th>
                                                        <th>Next Task</th>
                                                        <th>Status Update</th>
                                                        <th>Court</th>
                                                        <th>Updated On</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {paginationData?.docs.map((model, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td><h5>{model?.caseName}</h5></td>
                                                                <td>{printWithDefault(model?.caseNumber)}</td>
                                                                <td>
                                                                    {printWithDefault(model?.firmCaseStageId?.name)}
                                                                    <img src="./img/edit-pencil-icon.png"
                                                                         className="img img-fluid" alt=""/>
                                                                </td>
                                                                <td>
                                                                    <h6>{model?.leadAttorneyId?.firmEmployeeTypeId}</h6>
                                                                    <p>( Lead Attorney )</p>
                                                                </td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>{printWithDefault(model?.court)}</td>
                                                                <td>{formatDate(model.createdAt)}</td>
                                                                <td>
                                                                    <div className="action-btn-group">
                                                                        <Link to={`/cases/${model._id}/case-details`}>
                                                                            <button className="btn" type="button">
                                                                                <img
                                                                                    src="/assets/img/eye-icon-black.png"
                                                                                    alt=""
                                                                                />{" "}
                                                                            </button>
                                                                        </Link>
                                                                        <Link to={`/cases/${model._id}/edit`}>
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

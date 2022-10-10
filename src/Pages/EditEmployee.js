import { TailSpin } from "react-loader-spinner";
import React, { useEffect, useState } from 'react'
import { CustomSelect } from "../Componenets/CustomSelect";
import {Link, useNavigate, useParams} from "react-router-dom";
import employeeActions from "../Services/Actions/EmployeeActions"
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";



export const EditEmployee = (props) => {
     //Params
    const { employeeId } = useParams();

    const history = useNavigate();

    //State VAriables
    const [ratePerHour, setRatePerHour] = useState(0);
    const [status, setStatus] = useState({label: 'Active', value: 'Active'});
    const [selectedOption, setSelectedOption] = useState('');
    const [loading, setLoading] = useState(false);
    

    console.log('SELECTED OPTIONS = ', selectedOption)

    const options = [{label: 'Active', value: 'Active'}, {label: 'Disable', value: 'Disable'}]

    useEffect(() => {
        getEmployeeById();
    }, [])

    const getEmployeeById = () => {
        employeeActions.view(employeeId)
            .then((res) => {
                setRatePerHour(res.ratePerHour)
                const status = res.status.charAt(0).toUpperCase() + res.status.slice(1);;
                setSelectedOption({label: status, value: status})
            })
            .catch((err) => {
                toast("Failed to load");
                console.log(err);
            })
    }

    const handleSelectedOptions = (event) => {
        setSelectedOption(event);
    }

    const submit = () => {
        setLoading(true);
        employeeActions.update(employeeId, { ratePerHour: ratePerHour, status: selectedOption.value })
            .then((res) => {
                toast("Employee Edited!");
                setLoading(false);
                history("/manageEmployee");
            })
            .catch((err) => {
                toast('Failed to load');
                setLoading(false);
            })
    }
  return(
    <>
    <ToastContainer />
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
                    <h3>Edit Employee</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="basic-info-wrp">
                <div className="admin-white-box p-0">
                  <div className="basic-info-header">
                    <h5>Edit Employee</h5>
                  </div>

                  <div className="form-feilds-container">

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Rate Per Hour</h3>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Rate Per Hour"
                              name="ratePerHour"
                              value={ratePerHour}
                              onChange={(e) => setRatePerHour(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-3">
                        <h3>Status</h3>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                        <Select
                            value={selectedOption}
                            onChange={handleSelectedOptions}
                            isMulti={false}
                            isClearable={true}
                            options={options}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-fields-row mb-5">
                    <div className="row">
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3">
                        <button className="btn btn-grey-common" type="submit" onClick={submit}>
                          Edit Employee
                        </button>
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
   )

 }
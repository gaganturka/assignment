import { TailSpin } from "react-loader-spinner";
import { React, useEffect, useState } from "react";
import { Link, resolvePath, useNavigate, useParams } from "react-router-dom";
import config from "../Config/Config";
import { formatUnderscoredTxt } from "./../Utils/Helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Joi from "joi-browser";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import * as roleActions from "../Services/Actions/RoleActions";
const animatedComponents = makeAnimated();

const AddRole = () => {
  const history = useNavigate();

  //State VAriable
  const [roleName, setRoleName] = useState("");
  const [selectedOption, setSelectedOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  //Params
  const { roleId } = useParams();

  useEffect(() => {
    getOptions();
    if (roleId !== undefined) {
      getRoleById(roleId);
    }
  }, []);

  const getOptions = async () => {
    roleActions
      .getOptions()
      .then((res) => {
        let finalOptions = [];
        let moduleNames = res;
        if (moduleNames.length > 0) {
            for (let module of moduleNames) {
              finalOptions.push({
                  value: module,
                  label: formatUnderscoredTxt(module)
              });
            }
        }
        setOptions(finalOptions);
      })
      .catch((err) => {
        toast("Failed to load");
        console.log(err);
      });
  };

  const getRoleById = async (roleId) => {
    setLoading(true);
    roleActions
      .view(roleId)
      .then((res) => {
        setRoleName(res.name);
        let finalOptionsEdit = [];
        let moduleNames = res.modules;
        if (moduleNames.length > 0) {
          for (let module of moduleNames) {
            finalOptionsEdit.push({
              value: module,
              label: formatUnderscoredTxt(module),
            });
          }
        }
        setSelectedOption(finalOptionsEdit);
      })
      .catch((err) => {
        toast("Failed to load");
        console.log(err);
      });
    setLoading(false);
  };

  const handleSelectedOptions = (event) => {
    setSelectedOption(event);
  };

  const submit = async () => {
    if(roleName === '') {
      toast("Role Name can't be empty")
      return
    }
    if(selectedOption.length <= 0) {
      toast("Modules can't be empty")
      return
    }
    if(!roleId) {
            setLoading(true);
            const updatedSelectedValue = selectedOption.map((opt) => {
              return opt.value;
            });
            roleActions
              .create({ role: roleName, modules: updatedSelectedValue })
              .then((res) => {
                toast("Role Added!");
                setLoading(false);
                history("/manageRole");
              })
              .catch((err) => {
                toast('Failed to load');
                setLoading(false);
              });
            setLoading(false);
    } else {
        setLoading(true);
        const updatedSelectedValue = selectedOption.map((opt) => {
            return opt.value;
        });
        roleActions.update(roleId, { role: roleName, modules: updatedSelectedValue })
            .then(res => {
                toast("Role Edited!");
                setLoading(false);
                history("/manageRole");
            })
            .catch((err) => {
                toast('Failed to load');
                setLoading(false);
              });
    }
    
  };


  return (
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
                    <h3>{roleId ? "Edit Role" : "Add Role"}</h3>
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
                    <h5>{roleId ? "Edit Role" : "Add Role"}</h5>
                  </div>

                  <div className="form-feilds-container">
                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Role name"
                              name="role-namee"
                              value={roleName}
                              onChange={(e) => setRoleName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="role-access-box">
                    <h4>Modules</h4>
                    <div className="col-lg">
                      <div className="filter-select-box col-sm">
                        <div className="react-select">
                          <Select
                            value={selectedOption}
                            onChange={handleSelectedOptions}
                            isMulti={true}
                            isClearable={true}
                            options={options}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-fields-row mb-5">
                    <div className="row">
                      <div className="col-lg-3">
                        <button
                          className="btn btn-grey-common"
                          type="submit"
                          onClick={submit}
                        >
                          {roleId ? "Edit" : "Add Role"}
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
  );
};

export default AddRole;































import { TailSpin } from "react-loader-spinner";
import React, { useState } from "react";
import config from "../Config/Config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const AddContactGroup = (props) => {
    const navigate = useNavigate();

    //State VAriables
    const [groupName, setGroupName] = useState("");
    const [loading, setLoading] = useState(false);

    const addGroup = async () => {
        setLoading(true);
        try {
            const result = await axios({
                method: "post",
                url: `${config.BACKEND_URL}/firm/addContactGroup`,
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                  },
                data: {
                    groupName
                },
            });
            if (result.data.statusCode === 200) {
                toast(result.data.message);
                navigate("/listContactGroup");
            }else {
                toast(result.data.message);
            } 
        } catch (error) {
            console.log(error)
            toast(error.message);
        }
        setLoading(false);
    }

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
              <div className="col-lg-6">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Add Contact Group</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="admin-short-nav-buttons">
                  <div className="table-btn-group">
                    <a href="my-cases.html">
                      <button className="btn " type="button">
                        Back
                      </button>
                    </a>
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
                    <h5>Add Contact Group</h5>
                  </div>

                  <div className="form-feilds-container">
                    <div className="form-fields-row"></div>
                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Name</h3>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Name"
                              value={groupName}
                              onChange={(e) => setGroupName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields-row mb-5">
                    <div className="row">
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3">
                        <button className="btn btn-grey-common" type="submit" onClick={addGroup}>
                          Save
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

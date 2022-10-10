import { TailSpin } from "react-loader-spinner";
import { React, useEffect, useState } from "react";
import * as caseActions from "../Services/Actions/CaseActions";
import { Link, resolvePath, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import * as requestFundActions from "../Services/Actions/RequestFundActions";
import * as bankAccountActions from "../Services/Actions/BankAccountActions";
import FieldError from "../Componenets/FieldError";

import {
  closeModal,
  formatDate,
  handleRequestError,
  formatToInputTypeDate,
  hideLoading,
  openModal,
  showLoading,
  validateJOIFormField,
  validateJOIProperty,
} from "../Utils/Helpers";
import * as Joi from "joi-browser";
import { CustomSelect } from "../Componenets/CustomSelect";

const AddRequestFund = () => {
  //State VAriables
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [deposit, setDeposit] = useState([]);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [modelFields, setModelFields] = useState({});
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const history = useNavigate();

  const { requestFundId } = useParams();

  useEffect(() => {
    getAllCases();
    getAllBank();
    if (requestFundId !== undefined) {
      getRequestFundId(requestFundId);
    }
  }, []);

  const getRequestFundId = async (requestFundId) => {
    setLoading(true);
    requestFundActions
      .view(requestFundId)
      .then((res) => {
        setAmount(res.amount);
        setMessage(res.message);
        setSelectedDeposit({
          label: res.depositInto.bank,
          value: res.depositInto,  
        });
        setSelectedCase(res.caseContactId._id);
        const updatedModelFields = {
          caseContactId: res.caseContactId._id,
          depositInto: res.depositInto._id,
          amount: res.amount,
          message: res.message,
          dueDate: res.dueDate
        };
        setModelFields(updatedModelFields);
      })
      .catch((err) => {
        toast("Failed to load");
        console.log(err);
      });
    setLoading(false);
  };

  const schema = {
    caseContactId: Joi.string().required(),
    amount: Joi.string().required(),
    message: Joi.string().required(),
    dueDate: Joi.string().required(),
    depositInto: Joi.string().required(),
  };

  const getAllBank = () => {
    bankAccountActions
      .get()
      .then((res) => {
        let bankData = [];
        for (let bank of res.docs) {
          bankData.push({
            label: bank.bank,
            value: bank._id,
          });
        }
        setDeposit(bankData);
        bankData = null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllCases = () => {
    caseActions
      .get()
      .then((res) => {
        let casesData = [];
        for (let casee of res.docs) {
          let caseName = `${casee.billingContactId.firstName}-${casee.caseName}`;
          casesData.push({
            label: caseName,
            value: casee._id,
          });
        }
        setCases(casesData);
        casesData = null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateJOIProperty(schema, event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    updateModelFieldValue(name, value);
    setErrors(errorData);
  };

  const handleCaseChange = (event) => {
    setSelectedCase(event);
    updateModelFieldValue("caseContactId", event);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    updateModelFieldValue("amount", event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    updateModelFieldValue("message", event.target.value);
  };

  const handleDepositChange = (event) => {
    setSelectedDeposit(event);
    updateModelFieldValue("depositInto", event.value);
  };

  const updateModelFieldValue = (name, value) => {
    modelFields[name] = value;
  };

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    let errors = validateJOIFormField(modelFields, schema);
    if (errors == null) {
      if (!requestFundId) {
        requestFundActions
          .create(modelFields)
          .then((res) => {
            toast("Fund Added!");
            setLoading(false);
            history("/view-requested-funds");
          })
          .catch((err) => {
            toast("Failed to load");
            setLoading(false);
          });
      } else {
        requestFundActions
          .update(requestFundId, modelFields)
          .then((res) => {
            toast("Fund Updated!!");
            setLoading(false);
            history("/viewRequestedFunds");
          })
          .catch((err) => {
            toast("Failed to load");
            setLoading(false);
          });
      }
    } else {
      setErrors(errors);
      setLoading(false);
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
                    <h3>Request Funds</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-white-box p-0 mt-4">
            <div className="basic-info-header">
              <h5>Request new funds</h5>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-feilds-container">
                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-4">
                        <h3>Case Contacts</h3>
                      </div>
                      <div className="col-lg-8">
                        <div className="form-group">
                          <CustomSelect
                            name="caseContactId"
                            value={selectedCase}
                            options={cases}
                            onChange={handleCaseChange}
                          />
                          <FieldError error={errors.caseContactId} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-4">
                        <h3>Amount</h3>
                      </div>
                      <div className="col-lg-8">
                        <div className="form-group">
                          <input
                            name={amount}
                            type="text"
                            className="form-control"
                            placeholder="$"
                            value={amount}
                            onChange={handleAmountChange}
                          />
                          <FieldError error={errors.amount} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-4">
                        <h3>Due date</h3>
                      </div>
                      <div className="col-lg-8">
                        <div className="form-group">
                          <input
                            type="date"
                            name="dueDate"
                            className="form-control"
                            placeholder="DD-MM-YYYY"
                            value={
                              formatToInputTypeDate(modelFields.dueDate) || ""
                            }
                            onChange={handleChange}
                          />
                          <FieldError error={errors.dueDate} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-4">
                        <h3>Deposit Into</h3>
                      </div>
                      <div className="col-lg-8">
                        <div className="form-group">
                          <Select
                            name="depositInto"
                            value={selectedDeposit}
                            options={deposit}
                            onChange={handleDepositChange}
                          />
                          <FieldError error={errors.depositInto} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-4">
                        <h3>Message</h3>
                      </div>
                      <div className="col-lg-8">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id=""
                            cols="30"
                            rows="3"
                            value={message}
                            placeholder="Type your message here"
                            onChange={handleMessageChange}
                          ></textarea>
                          <FieldError error={errors.message} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-8">
                        <div className="cancel-submit-btn-group pt-0">
                          <button
                            className="btn btn-grey-common me-3"
                            type="submit"
                            onClick={submit}
                          >
                            Send
                          </button>
                          <Link to={"/view-requested-funds"}>
                            <button
                              className="btn btn-grey-common"
                              type="button"
                            >
                              Cancel
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="preview-email-head">
                  <h4>Preview Email</h4>
                  <h6>Client will receive a request email</h6>
                  <a href={undefined}>What will my client see ?</a>
                </div>

                <div className="email-sample-demo">
                  <h2>Payment Request</h2>
                  <h5>Please deposit funds into your account</h5>

                  <div className="pt-4">
                    <h4>Payment Request</h4>
                    <h1>$ {amount}</h1>
                    <h4>Due date {modelFields.dueDate}</h4>
                  </div>

                  <div className="pt-4">
                    <button className="btn" type="button" onClick={submit}>
                      Pay
                    </button>
                  </div>
                  <p>
                    Thanks, <br />
                    Your Name
                  </p>
                  <h3 className="sample-text">Sample</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRequestFund;

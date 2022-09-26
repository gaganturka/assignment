import React, { useEffect, useState } from "react";
import {
  closeModal,
  handleRequestError,
  hideLoading,
  showLoading,
  validateJOIFormField,
  validateJOIProperty,
} from "../Utils/Helpers";

import * as Joi from "joi-browser";

import * as caseStagesActions from "../Services/Actions/CaseStagesActions";

import FieldError from "./FieldError";
import { toast } from "react-toastify";

const CaseStageModal = (props) => {
  const [modelFields, setModelFields] = useState({
    name: props.formModel?.name,
  });

  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().min(3).required(),
  };

  const updateModelFieldValue = (name, value) => {
    modelFields[name] = value;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    console.log('DISPLAYING ERROR-----', errorData)
    const errorMessage = validateJOIProperty(schema, event);
    console.log("ERROR MESSAGE : ", errorMessage)
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    updateModelFieldValue(name, value);
    setErrors(errorData);
  };

  const clearModelFields = () => {
    setModelFields({});
  };

  const submit = (event) => {
    event.preventDefault();
    let errors = validateJOIFormField(modelFields, schema);
    if (errors == null) {
      showLoading();
      let request = null;

      if (modelFields._id === undefined) {
        request = caseStagesActions.create(modelFields);
      } else {
        request = caseStagesActions.update(modelFields._id, modelFields);
      }
      request
        .then((res) => {
          toast("Case Stage has been saved");
          hideLoading();
          clearModelFields();
          closeThisModal(true);
        })
        .catch((error) => {
          handleRequestError(error);
          hideLoading();
        });
    } else {
      setErrors(errors);
      hideLoading();
    }
  };

  const closeThisModal = (thingsChanged = false) => {
    closeModal("addCaseStagesModal");
    props.onClose(thingsChanged);
  };

  useEffect(() => {
    if (props.formModel) {
      setModelFields(props.formModel);
    }
  });

  return (
    <>
      <div
        className="modal fade"
        id="addCaseStagesModal"
        tabIndex="-1"
        aria-labelledby="addCaseStagesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"
                  id="addCaseStagesModalLabel">{modelFields._id ? 'Update Case Stage' : 'Add New Case Stage'}</h5>
              <button
                onClick={(e) => closeThisModal()}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="formFields">
                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Name</label>
                      <input
                        value={modelFields.name || ""}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter Name"
                      />
                      <FieldError error={errors.name} />
                    </div>
                  </div>
                </div>

                <div className="formSubmitWrapper">
                  <button
                    type="button"
                    className="btn btn-grey-common w-100"
                    onClick={submit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStageModal;

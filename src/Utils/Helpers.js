import isArray from 'lodash/isArray';
import {toast} from "react-toastify";
import * as Joi from "joi-browser";
import moment from "moment";

export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export const validatePhoneNo = (phone) => {
    var re = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;
    return re.test(phone);
}

export const validatePassword = (password) => {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,}/;
    return re.test(password);
}

export const isSame = (str1, str2) => {
    return str1 === str2
}

export const _serverError = (res) => {
    const ex = (res && res.body) || (res && JSON.stringify(res.text)) || {};
    if (ex.validation) {
        const keys = ex.validation.keys; // failed validations keys
        const errMap = {};

        // error message is contained in "[]" but in order the keys are, so split it up
        ex.message.match(/[^[\]]+(?=])/g)
            .forEach((msg, idx) => {
                errMap[keys[idx]] = isArray(msg) ? msg.join('. ') : msg;
            });

        ex.message = 'Validation Error';
        ex.validation = errMap;
    }
    return ex;
};

export const objectToFormData = (obj, form, namespace) => {

    let fd = form || new FormData();
    let formKey;

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {

            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            // if the property is an object, but not a File,
            // use recursivity.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof Blob) && !(obj[property] instanceof File) && !(obj[property] instanceof Array)) {
                objectToFormData(obj[property], fd, property);

            } else if (obj[property] instanceof Array) {
                // if it's a array
                for (var i = 0; i < obj[property].length; i++) {
                    // formData.append('array_php_side[]', obj[property][i]);
                    fd.append(formKey + '[]', obj[property][i]);
                }

            } else {
                // if it's a string or a File object or blob
                fd.append(formKey, obj[property]);
            }

        }
    }
    return fd
}


export const intersperse = (arr, sep) => {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce((xs, x, i) => {
        return xs.concat([sep, ' ', x]);
    }, [arr[0]]);
}

let sortByKeys = (unordered) => {
    const ordered = {};
    Object.keys(unordered).sort().forEach((key) => {
        ordered[key] = unordered[key];
    });
    return ordered;
}

export const arrayContainsArray = (superset, subset) => {
    if (0 === subset.length) {
        return false;
    }
    return subset.every((value) => {
        return (superset.indexOf(value) >= 0);
    });
}

export const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
export const getParams = (url, decodeURI = true) => {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split(/=(.+)/);
        params[pair[0]] = decodeURI ? decodeURIComponent(pair[1]) : pair[1];
    }
    return params;
};


// export const  formatDateWithoutTime = (date) => {
//   if(!date) {
//     return date
//   }

//   return moment(date).format("LL")
// }

export const validPinCode = (pinCode) => {
    let regxExp = /^\d{6}$/;
    return regxExp.test(pinCode)
}
export const validPostiveHours = (hours) => {
    let regxExp = /^\d$/;
    return regxExp.test(hours)
}

export const validPostiveInteger = (no) => {
    let regxExp = /^\d{1,5}$/;
    return regxExp.test(no)
}

export const validPostiveMinutes = (minutes) => {
    let regxExp = /^\d{1,2}$/;
    return regxExp.test(minutes)
}

export const validGstRate = (pinCode) => {
    // let regxExp =/\b[\+-]?[0-9]*[\.]?[0-9]+([eE][\+-]?[0-9]+)?\b/gm;
    let regxExp = /^(\d*\.)?\d+$/gm;

    return regxExp.test(pinCode)
}
export const validlatitude = (latitude) => {
    let regxExp = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/gm;
    return regxExp.test(latitude)
}

export const validlongitude = (longitude) => {
    let regxExp = /^-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6}$/gm;
    return regxExp.test(longitude)
}

export const mobileCheck = () => {
    let check = false;
    if (/Mobi/.test(navigator.userAgent)) {
        check = true
    }
    ;
    return check
};

export const converToLocalString = (number) => {
    return new Number(number).toLocaleString("en")
}

export const chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

export const getRandomNumberWithinRange = (maxNumber, length) => {
    var arr = [];
    while (arr.length < length) {
        var r = Math.floor(Math.random() * maxNumber) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

export const splitToChunks = (array, parts) => {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

export const setLayoutName = (name) => {
    document.body.setAttribute('layout', name);
}

export const handleRequestError = (error) => {
    if (error.message) {
        toast(error.message);
    }
}

export const openModal = (modalId) => {
    var modal = document.getElementById(modalId);
    if (modal != null) {
        let baseZIndex = 9998;
        let totalModalOpenAlready = document.querySelectorAll(".modal.show").length;
        if (totalModalOpenAlready > 0) {
            baseZIndex = baseZIndex + totalModalOpenAlready;
        }
        modal.setAttribute("style", "z-index: " + baseZIndex + " !important;");
        modal.classList.add("show");
        modal.style.display = 'block';
        document.body.classList.add("modal-open");
    }
}

export const closeModal = (modalId) => {
    var modal = document.getElementById(modalId);
    if (modal != null) {
        modal.classList.remove("show");
        modal.style.display = 'none';
        if (document.querySelectorAll(".modal.show").length <= 0) {
            document.body.classList.remove("modal-open");
        }
    }
}

export const showLoading = () => {
    var mainLoader = document.getElementById("mainLoaderElement");
    if (mainLoader != null) {
        mainLoader.classList.remove("d-none");
    }
}

export const hideLoading = () => {
    var mainLoader = document.getElementById("mainLoaderElement");
    if (mainLoader != null) {
        mainLoader.classList.add("d-none");
    }
}

export const formatDate = (date) => {
    if (date !== '' && date !== undefined && date !== null) {
        return moment(date).format("LLL");
    }
    return '';
}

export const formatToInputTypeDate = (date) => {
    if (date !== '' && date !== undefined && date !== null) {
        return moment(date).format("YYYY-MM-DD");
    }
    return '';
}

export const validateJOIProperty = (schema, event) => {
    const {name, value} = event.target;
    const obj = {[name]: value};
    if (schema.hasOwnProperty(name)) {
        const subSchema = {[name]: schema[name]};
        const result = Joi.validate(obj, subSchema, {
            stripUnknown: true
        });
        const {error} = result;
        return error ? error.details[0].message : null;
    } else {
        return null;
    }
};

export const validateJOIFormField = (formFields, schema) => {
    const result = Joi.validate(
        formFields,
        schema,
        {
            abortEarly: false,
            stripUnknown: true
        }
    );
    const {error} = result;
    if (!error) {
        return null;
    } else {
        const errorData = {};
        for (let item of error.details) {
            const name = item.path[0];
            errorData[name] = item.message;
        }
        return errorData;
    }
};

export const concatStrings = (separator, ...strings) => {
    let finalString = '';
    for (let string of strings) {
        if (string !== null && string !== undefined) {
            string = string.toString().trim();
            finalString += string + separator;
        }
    }
    finalString = finalString.trim();
    return finalString;
}

export const extractNameValue = (target) => {
    const name = target.name;
    let value = target.value;
    switch (target.type) {
        case 'checkbox':
            if (!target.checked) {
                value = '';
            }
            break;
    }
    return {
        name,
        value,
    }
}

export const formatAmount = (amount) => {
    if (amount !== '' && amount !== undefined && amount !== null) {
        return '$' + amount;
    }
    return '';
}

export const printWithDefault = (value, defaultValue = '-') => {
    if (value !== '' && value !== undefined && value !== null) {
        return value;
    }
    return defaultValue;
}

export const formatUnderscoredTxt = (txt) => {
    txt = txt.replace("_", " ");
    let words = txt.split(' ');
    let CapitalizedWords = [];
    words.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length))
    })
    txt = CapitalizedWords.join(' ')
    return txt;
}

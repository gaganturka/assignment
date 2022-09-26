import * as http from '../../Utils/Http';

export const caseBillingMethods = () => {
    return http.get('/common/case-billing-methods')
}

export const officeTypes = () => {
    return http.get('/common/office-types')
}

export const courtTypes = () => {
    return http.get('/common/court-types')
}

export const contactTypes = () => {
    return http.get('/common/contact-types')
}

export const countries = () => {
    return http.get('/common/countries')
}

export const states = (countryCode) => {
    return http.get('/common/states', {
        countryCode
    })
}

export const cities = (countryCode, stateCode) => {
    return http.get('/common/cities', {
        countryCode,
        stateCode
    })
}

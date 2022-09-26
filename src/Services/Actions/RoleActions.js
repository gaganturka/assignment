import * as http from '../../Utils/Http';

export const get = (params = {}) => {
    return http.get('/firm/roles', params)
}

export const getRolesOptions = (params = {}) => {
    return http.get('/firm/get-roles-options', params)
}

export const getEmployeeTypes = (params = {}) => {
    return http.get('/firm/get-employee-types', params)
}

export const getOptions = (params = {}) => {
    return http.get('/firm/get-select-options', params)
}

export const view = (id) => {
    return http.get('/firm/get-role-by-id/' + id)
}

export const create = (values) => {
    return http.post('/firm/add-role', values)
}

export const update = (id, values) => {
    return http.patch('/firm/edit-role/' + id, values)
}
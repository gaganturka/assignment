import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/cases', params)
}

export const get = (params = {}) => {
    return http.get('/firm/cases', params)
}

export const view = (id, params = {}) => {
    return http.get('/firm/cases/' + id, params)
}

export const create = (values) => {
    return http.post('/firm/cases', values)
}

export const update = (id, values) => {
    return http.patch('/firm/cases/' + id, values)
}

export const caseEmployees = (id, params = {}) => {
    return http.get('/firm/cases/case-employees/' + id, params)
}

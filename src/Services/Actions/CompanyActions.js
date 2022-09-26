import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/companies', params)
}

export const get = (params = {}) => {
    return http.get('/firm/companies', params)
}

export const view = (id) => {
    return http.get('/firm/companies/' + id)
}

export const create = (values) => {
    return http.post('/firm/companies', values)
}

export const update = (id, values) => {
    return http.patch('/firm/companies/' + id, values)
}

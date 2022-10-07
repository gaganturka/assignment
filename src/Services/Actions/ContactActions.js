import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/contacts', params)
}

export const get = (params = {}) => {
    return http.get('/firm/contacts', params)
}

export const view = (id) => {
    return http.get('/firm/contacts/' + id)
}

export const create = (values) => {
    return http.post('/firm/contacts', values)
}

export const update = (id, values) => {
    return http.patch('/firm/contacts/' + id, values)
}

export const getCasesByContact = (id) => {
    return http.get('/firm/contacts/cases/' + id)
}

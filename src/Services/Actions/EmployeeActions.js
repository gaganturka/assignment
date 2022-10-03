import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/employees', params)
}

const get = (params = {}) => {
    return http.get('/firm/employees', params)
}

const view = (id) => {
    return http.get('/firm/employees/' + id)
}

const create = (values) => {
    return http.post('/firm/employees', values)
}

const update = (id, values) => {
    return http.patch('/firm/employees/' + id, values)
}

export default {get, view, create, update, getAll};

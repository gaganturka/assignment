import * as http from '../../Utils/Http';

export const get = (params = {}) => {
    return http.get('/firm/request-fund', params)
}

export const create = (values) => {
    return http.post('/firm/request-fund', values);
}

export const view = (id) => {
    return http.get('/firm/request-fund/' + id)
}

export const update = (id, values) => {
    return http.patch('/firm/request-fund/' + id, values)
}



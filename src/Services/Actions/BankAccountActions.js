import * as http from '../../Utils/Http';

export const get = (params = {}) => {
    return http.get('/firm/bank-account', params)
}

export const create = (values) => {
    return http.post('/firm/bank-account', values);
}

export const view = (id) => {
    return http.get('/firm/bank-account/' + id)
}

export const update = (id, values) => {
    return http.patch('/firm/bank-account/' + id, values)
}



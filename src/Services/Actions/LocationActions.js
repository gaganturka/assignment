import * as http from '../../Utils/Http';

export const get = (params = {}) => {
    return http.get('/firm/locations', params)
}

export const create = (values) => {
    return http.post('/firm/locations', values);
}

export const view = (id) => {
    return http.get('/firm/locations/' + id)
}

export const update = (id, values) => {
    return http.patch('/firm/locations/' + id, values)
}



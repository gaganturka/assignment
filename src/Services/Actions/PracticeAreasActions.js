import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/practice-areas', params)
}

export const get = (params = {}) => {
    return http.get('/firm/practice-areas', params)
}

export const view = (id) => {
    return http.get('/firm/practice-areas/' + id)
}

export const create = (values) => {
    return http.post('/firm/practice-areas', values)
}

export const update = (id, values) => {
    return http.patch('/firm/practice-areas/' + id, values)
}

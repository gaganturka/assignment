import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/activity-types', params)
}

export const get = (params = {}) => {
    return http.get('/firm/activity-types', params)
}

export const view = (id) => {
    return http.get('/firm/activity-types/' + id)
}

export const create = (values) => {
    return http.post('/firm/activity-types', values)
}

export const update = (id, values) => {
    return http.patch('/firm/activity-types/' + id, values)
}

export const deleteRecord = (id) => {
    return http.deleteRecord('/firm/activity-types/' + id)
}

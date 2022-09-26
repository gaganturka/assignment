import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/getCaseStages', params)
}

export const get = (params = {}) => {
    return http.get('/firm/getCaseStages', params)
}

export const view = (id) => {
    return http.get('/firm/getCaseStageId/' + id)
}

export const create = (values) => {
    return http.post('/firm/addCaseStages', values)
}

export const update = (id, values) => {
    return http.post('/firm/editCaseStage/' + id, values)
}

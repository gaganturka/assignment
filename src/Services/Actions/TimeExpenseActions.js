import * as http from '../../Utils/Http';

export const getAllTimeEntries = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/case-time-entries', params)
}

export const getTimeEntries = (params = {}) => {
    return http.get('/firm/case-time-entries', params)
}

export const viewTimeEntry = (id, params = {}) => {
    return http.get('/firm/case-time-entries/' + id, params)
}

export const createTimeEntry = (values) => {
    return http.post('firm/time-entry/', values)
}
export const updateEntery = (id, values) => {
    return http.patch('firm/time-entry/'+id, values)
}

export const getEntry = (id) => {
    return http.get('firm/time-entry/' + id)
}

export const updateTimeEntry = (id, values) => {
    return http.patch('/firm/case-time-entries/' + id, values)
}

export const getAllExpenseEntries = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/case-expense-entries', params)
}

export const getExpenseEntries = (params = {}) => {
    return http.get('/firm/case-expense-entries', params)
}

export const viewExpenseEntry = (id) => {
    return http.get('/firm/case-expense-entries/' + id)
}

export const createExpenseEntry = (values) => {
    return http.post('/firm/case-expense-entries', values)
}

export const updateExpenseEntry = (id, values) => {
    return http.patch('/firm/case-expense-entries/' + id, values)
}


export const viewAllEntries = (params = {}) => {
    return http.get('firm/time-entry/', params)
}


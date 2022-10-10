import * as http from '../../Utils/Http';

export const getAll = (params = {}) => {
    params['page'] = 1;
    params['limit'] = 1000;
    return http.get('/firm/invoices', params)
}

export const get = (params = {}) => {
    return http.get('/firm/invoices', params)
}

export const view = (id, params = {}) => {
    return http.get('/firm/invoices/' + id, params)
}

export const create = (values) => {
    return http.post('/firm/invoices', values)
}

export const update = (id, values) => {
    return http.patch('/firm/invoices/' + id, values)
}

export const deleteRecord = (id) => {
    return http.deleteRecord('/firm/invoices/' + id)
}

export const stats = () => {
    return http.get('/firm/invoices/info/stats')
}

export const nextInvoiceNumber = () => {
    return http.get('/firm/invoices/info/invoice-number')
}

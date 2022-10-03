import * as http from '../../Utils/Http';



// const get = (params = {}) => {
//     return http.get('/firm/employees', params)
// }

// const view = (id) => {
//     return http.get('/firm/employees/' + id)
// }

export const get = (params = {}) => {
    return http.get('/firm/location', params)
}

export const create = (values) => {
    return http.post('/firm/location', values);
}

// const update = (id, values) => {
//     return http.patch('/firm/employees/' + id, values)
// }

// export default {get, create};


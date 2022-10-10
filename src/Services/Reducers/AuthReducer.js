export const initialAuthState = {
    user: null,
    isLoggedIn: false
}

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {...state, user: action.payload, isLoggedIn: true}
        case 'REMOVE_USER':
            return {...state, user: null, isLoggedIn: false}
        default:
            return state
    }
}
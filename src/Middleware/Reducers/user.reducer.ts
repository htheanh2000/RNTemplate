interface TUser {
    accessToken: string
}
const INIT_USER = {
    accessToken: ''
}
export default function user(state : TUser = INIT_USER, action: any ){
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, ...action.payload };
        case 'LOGIN_FAILED':
            return { ...state, accessToken: null };
        default:
            return state
    }
}
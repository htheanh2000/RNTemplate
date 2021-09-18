import {ILogin} from '../Apis'

export const login = (payload: ILogin) => ({
    type: 'LOGIN',
    payload
});
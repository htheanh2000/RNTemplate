import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as Api from './Apis'

function* login(action: { type:string, payload: Api.ILogin }) {
    try {
        const user: Promise<Api.ILogin> = yield call(Api.login, action.payload);
        yield put({ type: "LOGIN_SUCCESS", payload: user });
    } catch (e) {
        console.log('e', e);
        yield put({ type: "LOGIN_FAILED", payload: e });
    }
}

function* actionWatcher() {
    yield takeLatest('LOGIN', login);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
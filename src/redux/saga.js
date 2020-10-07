// outsource dependencies
import { takeEvery, put, call, delay } from 'redux-saga/effects';

// local dependencies
import { INITIALIZE, updateMeta } from './actions';

export function* initializeSaga() {
    yield takeEvery(INITIALIZE, workerInitialize);
}

function* workerInitialize() {
    const data = yield call(getTodosFromStorage);

    if (data) {
        yield put(updateMeta({ todos: [...data] }));
    }

    yield delay(2 * 1000);
    yield put(updateMeta({ initialized: true }))
}

function getTodosFromStorage() {
    const data = localStorage.getItem('state');

    return JSON.parse(data);
}

export function setStoreToStorage(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

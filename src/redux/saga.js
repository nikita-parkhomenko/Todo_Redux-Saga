import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_TODOS, saveTodos } from './actions';

export function* watchLoadData() {
    yield takeEvery(FETCH_TODOS, workerLoadData);
}

function* workerLoadData() {
    const data = yield call(getTodosFromStorage);
    
    if (data) {
        yield put(saveTodos(data));
    }
}

function getTodosFromStorage() {
    const data = localStorage.getItem('state');

    return JSON.parse(data);
}

export function setStoreToStorage(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_TODOS, saveTodos } from './actions';

export function* watchLoadData() {
    yield takeEvery(FETCH_TODOS, workerLoadData);
}

function* workerLoadData() {
    const data = yield call(getTodos);

    yield put(saveTodos(data.slice(0, 5)));
}

function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
}

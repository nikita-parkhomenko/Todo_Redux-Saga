import { call, put, takeEvery, delay } from 'redux-saga/effects';

import { INITIALIZE, SAVE_META } from './actions';

export default function* initializeTodo() {
    yield takeEvery(INITIALIZE, workerInitializeTodo);
}

function* workerInitializeTodo({ id }) {
    yield console.log('init todo details')

    const todos = yield call(() => {
        const todos = localStorage.getItem('state');

        return JSON.parse(todos);
    });

    const todo = todos.find(todo => todo.id === +id);

    yield put({ type: SAVE_META, payload: { todo } });
    yield delay(1000);
    yield put({ type: SAVE_META, payload: { initialized: true } });
}

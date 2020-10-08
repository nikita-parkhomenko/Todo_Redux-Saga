import { call, put, takeEvery, delay } from 'redux-saga/effects';

import { INITIALIZE, SAVE_META, TOGGLE_COMPLETED } from './actions';

export default function* initializeTodo() {
    yield takeEvery(INITIALIZE, workerInitializeTodo);
    yield takeEvery(TOGGLE_COMPLETED, workerToggleCompleted);
}

function* workerInitializeTodo({ id }) {
    const todos = yield call(getStorage);
    const todo = todos.find(todo => todo.id === +id);

    yield put({ type: SAVE_META, payload: { todo } });
    yield delay(1000);
    yield put({ type: SAVE_META, payload: { initialized: true } });
}

function* workerToggleCompleted({ id }) {
    const todos = yield call(getStorage);

    const todosAfterUpdate = todos.map(
        todo => todo.id === +id ? {...todo, completed: !todo.completed} : todo
    );

    localStorage.setItem('state', JSON.stringify(todosAfterUpdate));
    yield put({ type: SAVE_META, payload: { todo: {...todosAfterUpdate.find(todo => todo.id === +id)}} });
}

function getStorage() {
    const todos = localStorage.getItem('state');
    return JSON.parse(todos);
}

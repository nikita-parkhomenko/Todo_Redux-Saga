import { call, put, takeEvery, delay, select } from 'redux-saga/effects';

import { INITIALIZE, SAVE_META, TOGGLE_COMPLETED } from './actions';

export default function* initializeTodo() {
    yield takeEvery(INITIALIZE, workerInitializeTodo);
    yield takeEvery(TOGGLE_COMPLETED, workerToggleCompleted);
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

function* workerToggleCompleted({ id }) {
    yield console.log('clicked', id)

    const todos = select(state => state.todosReducer.todos);

    console.log(todos)
}

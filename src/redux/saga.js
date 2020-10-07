// outsource dependencies
import { takeEvery, put, call, delay, select } from 'redux-saga/effects';

// local dependencies
import { INITIALIZE, ADD_TODO, REMOVE_TODO, UPDATE_STORAGE, updateMeta } from './actions';

export function* initializeSaga() {
    yield takeEvery(INITIALIZE, workerInitialize);
    yield takeEvery(ADD_TODO, workerAddTodo);
    yield takeEvery(REMOVE_TODO, workerRemoveTodo);
    yield takeEvery(UPDATE_STORAGE, workerUpdateStorage);
}

function* workerInitialize() {
    const data = yield call(getTodosFromStorage);

    if (data) {
        yield put(updateMeta({ todos: [...data] }));
    }

    yield delay(2 * 1000);
    yield put(updateMeta({ initialized: true }));
}

function getTodosFromStorage() {
    const state = localStorage.getItem('state');

    return JSON.parse(state);
}

function* workerAddTodo({ payload }) {
    const todos = yield select(state => state.todos);

    yield put(updateMeta({ todos: [payload, ...todos] }));

    yield put({ type: UPDATE_STORAGE });
}

function* workerRemoveTodo({ id }) {
    const todos = yield select(state => state.todos);

    yield put(updateMeta({ todos: todos.filter(todo => todo.id !== id) }));

    yield put({ type: UPDATE_STORAGE });
}

function* workerUpdateStorage() {
    const todos = yield select(state => state.todos);

    localStorage.setItem('state', JSON.stringify(todos));
}

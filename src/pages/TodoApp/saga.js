// outsource dependencies
import { takeEvery, put, call, delay, select } from 'redux-saga/effects';

// local dependencies
import { getStorage } from '../../api/api';
import TYPE from './actions';

export default function* () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.ADD, addTodoSaga);
    yield takeEvery(TYPE.REMOVE, removeTodoSaga);
    yield takeEvery(TYPE.UPDATE, updateStorageSaga);
}

function* initializeSaga() {
    try {
        yield put({ type: TYPE.META, payload: { disabled: true }});
        const data = yield call(getStorage);
        yield put({ type: TYPE.META, payload: {todos: data || []}});
        yield delay(2 * 1000);
        yield put({ type: TYPE.META, payload: { initialized: true, disabled: false }});
    } catch ({ message: errorMessage }) {
        yield put({ type: TYPE.META, payload: { errorMessage }})
    }
}

function* addTodoSaga({ payload }) {
    try {
        const todos = yield select(state => state.todosReducer.todos);
        yield delay(1000);
        yield put({ type: TYPE.META, payload: {todos: [payload, ...todos], disabled: false } })
        yield put({ type: TYPE.UPDATE });
    } catch ({ message: errorMessage }) {
        yield put( { type: TYPE.META, payload: { errorMessage }})
    }
}

function* removeTodoSaga({ payload: { id } }) {
    try {
        const todos = yield select(state => state.todosReducer.todos);
        yield put({ type: TYPE.META, payload: {todos: todos.filter(todo => todo.id !== id)} });
        yield put({ type: TYPE.UPDATE });
    } catch ({ message: errorMessage }) {
        yield put( { type: TYPE.META, payload: { errorMessage }})
    }
}

function* updateStorageSaga() {
    const todos = yield select(state => state.todosReducer.todos);
    localStorage.setItem('state', JSON.stringify(todos));
}

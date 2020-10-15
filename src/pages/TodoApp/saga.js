// outsource dependencies
import { takeEvery, put, call, delay, select } from 'redux-saga/effects';

// local dependencies
import { getStorage } from '../../api/api';
import TYPE, { updateMeta } from './actions';

export default function* () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.ADD, addTodoSaga);
    yield takeEvery(TYPE.REMOVE, removeTodoSaga);
    yield takeEvery(TYPE.UPDATE, updateStorageSaga);
}

function* initializeSaga() {
    const data = yield call(getStorage);

    yield put(updateMeta({ todos: (data || []) }));
    
    yield delay(2 * 1000);
    yield put(updateMeta({ initialized: true }));
}

function* addTodoSaga({ payload }) {
    const todos = yield select(state => state.todosReducer.todos);

    yield put(updateMeta({ todos: [payload, ...todos] }));

    yield put({ type: TYPE.UPDATE });
}

function* removeTodoSaga({ id }) {
    const todos = yield select(state => state.todosReducer.todos);

    yield put(updateMeta({ todos: todos.filter(todo => todo.id !== id) }));

    yield put({ type: TYPE.UPDATE });
}

function* updateStorageSaga() {
    const todos = yield select(state => state.todosReducer.todos);

    localStorage.setItem('state', JSON.stringify(todos));
}

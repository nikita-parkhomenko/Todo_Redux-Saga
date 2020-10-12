// outsource dependencies
import { takeEvery, put, call, delay, select } from 'redux-saga/effects';

// local dependencies
import { getStorage } from '../../api/api';
import { INITIALIZE_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_STORAGE, updateMeta } from './actions';

export default function* initializeTodos() {
    yield takeEvery(INITIALIZE_TODOS, workerInitialize);
    yield takeEvery(ADD_TODO, workerAddTodo);
    yield takeEvery(REMOVE_TODO, workerRemoveTodo);
    yield takeEvery(UPDATE_STORAGE, workerUpdateStorage);
}

function* workerInitialize() {
    const data = yield call(getStorage);

    yield put(updateMeta({ todos: (data || []) }));

    // yield delay(2 * 1000);
    yield put(updateMeta({ initialized: true }));
}

function* workerAddTodo({ payload }) {
    const todos = yield select(state => state.todosReducer.todos);

    yield put(updateMeta({ todos: [payload, ...todos] }));

    yield put({ type: UPDATE_STORAGE });
}

function* workerRemoveTodo({ id }) {
    const todos = yield select(state => state.todosReducer.todos);

    yield put(updateMeta({ todos: todos.filter(todo => todo.id !== id) }));

    yield put({ type: UPDATE_STORAGE, data: 'some data' });
}

function* workerUpdateStorage() {
    const todos = yield select(state => state.todosReducer.todos);

    localStorage.setItem('state', JSON.stringify(todos));
}

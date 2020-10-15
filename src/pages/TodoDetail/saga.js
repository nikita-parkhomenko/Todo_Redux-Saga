// outsource dependencies
import { call, put, takeEvery, delay } from 'redux-saga/effects';

// local dependencies
import TYPE from './actions';
import { getStorage, setStorage } from '../../api/api';

export default function* initializeTodo() {
    yield takeEvery(TYPE.UPDATE, updateTodoSaga);
    yield takeEvery(TYPE.INITIALIZE, initializeTodoSaga);
    yield takeEvery(TYPE.TOGGLE_COMPLETED, toggleCompletedSaga);
}

function* initializeTodoSaga({ payload: { id } }) {
    yield delay(1000);
    try {
        const todos = yield call(getStorage);
        const todo = todos.find(todo => todo.id === +id);
        yield put({ type: TYPE.META, payload: { todo } });
    } catch ({ message: errorMessage }) {
        yield put({ type: TYPE.META, payload: { errorMessage }});
    }
    yield put({ type: TYPE.META, payload: { initialized: true } });
}

function* toggleCompletedSaga({ payload: { id } }) {
    try {
        const todos = yield call(getStorage);
        const updatedTodos = todos.map(
            todo => todo.id === +id ? {...todo, completed: !todo.completed} : todo
        );
        yield call(setStorage, updatedTodos);
        yield put({ type: TYPE.META, payload: { todo: updatedTodos.find(todo => todo.id === +id)} });
    } catch ({ message: errorMessage }) {
        yield put({ type: TYPE.META, payload: { errorMessage, initialized: true }});
    }
}

function* updateTodoSaga({ payload: { todo, values } }) {
    yield put({ type: TYPE.META, payload: { disabled: true } });
    yield delay(1000);
    try {
        const todos = yield call(getStorage);
        const updatedTodo = { ...todo, ...values };
        const updatedTodos = todos.map((task) => task.id === todo.id ? updatedTodo : task);
        yield call(setStorage, updatedTodos);
        yield put({ type: TYPE.META, payload: { todo: updatedTodo, disabled: false } });
    } catch ({ message: errorMessage }) {
        yield put({ type: TYPE.META, payload: { errorMessage }});
    }
}

import { call, put, takeEvery, delay } from 'redux-saga/effects';

import { getStorage } from '../../api/api';
import { INITIALIZE, SAVE_META, TOGGLE_COMPLETED, UPDATE_TODO } from './actions';

export default function* initializeTodo() {
    yield takeEvery(INITIALIZE, initializeTodoSaga);
    yield takeEvery(TOGGLE_COMPLETED, toggleCompletedSaga);
    yield takeEvery(UPDATE_TODO, updateTodoSaga);
}

function* initializeTodoSaga({ payload: { id } }) {
    const todos = yield call(getStorage);
    const todo = todos.find(todo => todo.id === +id);

    yield put({ type: SAVE_META, payload: { todo } });
    yield delay(1000);
    yield put({ type: SAVE_META, payload: { initialized: true } });
}

function* toggleCompletedSaga({ payload: { id } }) {
    const todos = yield call(getStorage);

    const updatedTodos = todos.map(
        todo => todo.id === +id ? {...todo, completed: !todo.completed} : todo
    );

    localStorage.setItem('state', JSON.stringify(updatedTodos));
    yield put({ type: SAVE_META, payload: { todo: updatedTodos.find(todo => todo.id === +id)} });
}

function* updateTodoSaga({ payload: { todo, values } }) {
    const todos = yield call(getStorage);
    const updatedTodo = { ...todo, ...values };
    const updatedTodos = todos.map((task) => task.id === todo.id ? updatedTodo : task);

    localStorage.setItem('state', JSON.stringify(updatedTodos));

    yield put({ type: SAVE_META, payload: { todo: updatedTodo } });
}

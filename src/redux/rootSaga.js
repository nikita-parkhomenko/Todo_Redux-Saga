// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import initializeTodos from '../pages/TodoApp/saga';
import initializeTodo from '../pages/TodoDetail/saga';

export default function* rootSaga() {
    yield fork(initializeTodo);
    yield fork(initializeTodos);
  }

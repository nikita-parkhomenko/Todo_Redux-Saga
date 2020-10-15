// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import todosWatcher from '../pages/TodoApp/saga';
import todoWatcher from '../pages/TodoDetail/saga';

export default function* rootSaga() {
    yield fork(todoWatcher);
    yield fork(todosWatcher);
  }

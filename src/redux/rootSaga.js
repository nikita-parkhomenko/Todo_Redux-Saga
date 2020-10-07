// outsource dependencies
import { all } from 'redux-saga/effects';

// local dependencies
import initializeTodos from '../pages/TodoApp/saga';
import initializeTodo from '../pages/TodoDetail/saga';

export default function* rootSaga() {
    yield all([
        initializeTodo(),
        initializeTodos(),
    ])
  }

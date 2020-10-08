// outsource dependencies
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// local dependencies
import todoReducer from '../pages/TodoDetail/reducer'
import todosReducer from '../pages/TodoApp/reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    todosReducer,
    todoReducer,
})

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

sagaMiddleware.run(rootSaga);

export default store;

// outsource dependencies
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// local dependencies
import rootSaga from './rootSaga';
import todosReducer from '../pages/TodoApp/reducer';
import todoReducer from '../pages/TodoDetail/reducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    todosReducer,
    todoReducer,
    form: formReducer,
});

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

sagaMiddleware.run(rootSaga);

export default store;

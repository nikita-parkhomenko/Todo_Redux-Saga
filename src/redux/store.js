import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchLoadData } from './saga';

import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

sagaMiddleware.run(watchLoadData);

export default store;
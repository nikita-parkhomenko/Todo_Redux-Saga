// outsource dependencies
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

// local dependencies
import reducer from './reducer';
import { initializeSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

sagaMiddleware.run(initializeSaga);

export default store;
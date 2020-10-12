// outsource dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// local dependencies
import store from './redux/store';
import TodoApp from './pages/TodoApp/TodoApp';
import TodoDetail from './pages/TodoDetail/TodoDetail';
import { todosRoot, todoDetails } from './routes';

const App = () => (
  <Router>
    <Provider store={store}>
      <div className="container">
        <Switch>
          <Route path={todosRoot.path} exact component={TodoApp} />
          <Route path={todoDetails.path} exact component={TodoDetail} />
          <Redirect to={todosRoot.path} />
        </Switch>
      </div>
    </Provider>
  </Router>
);

export default App;

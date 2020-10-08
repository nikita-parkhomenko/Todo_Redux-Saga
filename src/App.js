// outsource dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// local dependencies
import store from './redux/store';
import TodoApp from './pages/TodoApp/TodoApp';
import TodoDetail from './pages/TodoDetail/TodoDetail';

const App = () => (
  <Router>
    <Provider store={store}>
      <div className="text-center">
        <Switch>
          <Route path='/todos' exact component={TodoApp} />
          <Route path='/todos/:id' component={TodoDetail} />
        </Switch>
      </div>
    </Provider>
  </Router>
);

export default App;

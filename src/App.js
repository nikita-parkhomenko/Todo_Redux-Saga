// outsource dependencies
import React from 'react';
import { Provider } from 'react-redux';

// local dependencies
import store from './redux/store';
import ToDoApp from './pages/TodoApp/TodoApp';

const App = () => (
  <Provider store={store}>
    <div className="text-center">
      <ToDoApp />
    </div>
  </Provider>
);

export default App;

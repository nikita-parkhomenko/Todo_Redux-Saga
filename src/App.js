import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import store from './redux/store';
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoApp />
      </div>
    </Provider>
  );
}

export default App;

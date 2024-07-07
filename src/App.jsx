import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameReducer from './reducers/gameReducer.js';
import GameBoard from './components/GameBoard.js;

const store = createStore(gameReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux SVG Game</h1>
        <GameBoard />
      </div>
    </Provider>
  );
};

export default App;

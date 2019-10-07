import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/create-store';
import App from './components/App/App';

store.subscribe(() => {
  console.log('Store update:', store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

  /*
redux:
  createStore -> store
    const store = createStore(reducer, applyMiddleware(thunk))
  applyMiddleware -> createStore param
  combineReducers -> main/root-reducer.js combinedReducers({...});
react-redux:
  Provider -> index
  connect -> component
*/
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { fetchQuestListAction} from './store/api-actions';
import thunk from 'redux-thunk';


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
  thunk)),
);
(store.dispatch)(fetchQuestListAction())

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

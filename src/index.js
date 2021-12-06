import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {Provider} from 'react-redux';
import { fetchQuestListAction} from './store/api-actions';
import { store } from './store/store';

(store.dispatch)(fetchQuestListAction())

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

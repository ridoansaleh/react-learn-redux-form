import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const renderApplication = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

renderApplication();

if (module.hot) {
  if (module.hot.accept('./App')) {
    renderApplication();
  }
}

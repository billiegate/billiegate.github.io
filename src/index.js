import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from "history";
import store from './redux/store';
import './index.css';
import './assets/css/index.output.css';
// import App from './App';
import Landing from './ui/pages/Landing'
import Faq from './ui/pages/Faq'
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" exact={true} component={Landing}></Route>
      <Route path="/faq" exact={true} component={Faq}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

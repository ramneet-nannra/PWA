import React , {Suspense , lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { retry} from './utils/commonFunctions';
import {BrowserRouter as Router} from 'react-router-dom';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import serviceWorker  from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// const App = lazy(() => retry(() => import('./App')));
import App from './App';

const main = ReactDOM.render(
  <Suspense fallback={<div />}>
     <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
//serviceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

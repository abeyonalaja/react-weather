import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Weather } />
    </Route>
  </Router>,
  document.getElementById('app')
);

import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Weather } />
      <Route path="about" component={ About } />
    </Route>
  </Router>,
  document.getElementById('app')
);

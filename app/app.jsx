import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/main';

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
    </Route>
  </Router>,
  document.getElementById('app')
);

import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Search from './components/Search';

export default (
  <Route component={App} >
    <Route path='/' component={Home} />
    <Route path='/search/:query' component={Search} />
  </Route>
);
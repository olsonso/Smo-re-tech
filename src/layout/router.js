import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Blog from '../blog';

const Router = () => (
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/blog' component={Blog}/>

</Switch>
)
export default Router;

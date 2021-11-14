import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header_Footer/Header';
import Footer from './components/Header_Footer/Footer';
import Home from './components/Home/index.js';
import SignIn from './components/SignIn';
import Dashboard from './components/Admin/Dashboard';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        <Route path='/sign_in' exact component={SignIn}></Route>
        <Route path='/' exact component={Home}></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Routes;

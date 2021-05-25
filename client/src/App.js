import React from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import './App.css';



const App = () => {
  
  return (
    <Grid container >
      <Grid item xs={12}>
        <Router>
        <NavigationBar />
          <Switch>
            <Route path='/' exact component={Home} />          
            <Route path='/products' component={Products} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </Router>
       </Grid>      
    </Grid>
  );
}

export default App;

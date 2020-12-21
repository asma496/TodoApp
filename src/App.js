import React from 'react'
import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import Register from './components/pages/Register';
import Home from './components/pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import Navbar from './components/Navbar';


const useStyles = makeStyles({});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
          <Router>
        <Navbar />
        
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
        </Switch>
        </Router>
      </div>
    
       
          
      )
  }
  
    
{/* 
            <Router>
            
<nav className='nav'>
    <ul>
    <Link className='link' to='/'>HOME</Link>
    <Link className='link' to='/products'>Products</Link>
    <Link className='link' to='/cart'>Cart</Link>
    <Link className='link' to='/login'>Login</Link>
    <Link className='link' to='/register'>Register</Link>

    </ul>
</nav>
<Switch>
    <Route path='/Register'><Register />  </Route>
    <Route path='/Login'> <Login /> </Route>
    <Route path='/Cart'><Cart /> </Route>
    <Route path='/Products'> <Products /> </Route>
    <Route path='/'> <Home /> </Route>

</Switch>
            </Router>
 */}


export default App
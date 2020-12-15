import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import Register from './components/pages/Register';
import Home from './components/pages/Home'



function App() {
    return (
        <div>

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
            
        </div>
    )
}

export default App
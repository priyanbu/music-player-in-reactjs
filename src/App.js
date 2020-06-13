import React, { Component } from 'react';
import './App.css'
import Home from '../src/pages/home';
import About from '../src/pages/about';
import User from '../src/pages/user';
import{BrowserRouter as Router , Route , NavLink, Redirect,Switch } from 'react-router-dom';
import Login from './pages/login';


class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () =>{
    this.setState(prevState => ({
      loggedIn:!prevState.loggedIn
    }));
    
  }
render(){
  return (
    <Router>
    <div className="App">
      <header>
        <img src="/logo.png" className="logo" alt=""/>
      <div className="navmenu">
         <ul>
           <li><NavLink  activestyle={{color:"#fff"}}to="/" exact>Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/user/Saahi/Suresh">User</NavLink></li>
           
          </ul>
          </div>
          <input type="button" className="btn" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle}/>
          </header>
      <div className="pages">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
  <Route path="/user/:firstname/:lastname" render={()=>(this.state.loggedIn ? <User/> : <Redirect to="./">{alert('pls login')}</Redirect>)}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
     
    </div>
    </Router>
  );
}
}

export default App;

import React, { Component } from 'react';
import {
  Switch, Route, Link, NavLink
} from 'react-router-dom';
import './App.css';

const Homepage = () => (<div>Homepage</div>)
const About = () => (<div>About</div>)
const SwitchDemo = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Homepage} />
  </Switch>
)
class App extends Component {

  render() {
    return (
      <div>
        <Link to="/">HOME</Link>
        <NavLink exact activeStyle={{color: 'red'}} to="/about">ABOUT</NavLink>
        <SwitchDemo/>
      </div>
    )
  }
}

export default App;

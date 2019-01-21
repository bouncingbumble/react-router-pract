import React, { Component } from 'react';
import {
  Switch, Route, Link, NavLink
} from 'react-router-dom';
import './App.css';

const Homepage = () => (<div>Homepage</div>)
const About = () => (<div>About</div>)
//match - how the path matches the current url
//location - where you are now
//history - go back/forth and change the url
const Name = ({match}) => (<div>Hello, {match.params.name}</div>)
const SwitchDemo = () => (
  <Switch>
    <Route exact path="/about" component={About} />
    <Route path="/:name" component={Name} />
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

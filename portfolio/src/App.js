import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import Git from './Git';
import mypic from './mypic.jpg';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/projects" exact component={Projects}/>
      <Route path='/git' component={Git} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div className='myname'>
    <img className='mypic' src={mypic} alt='my pic'/>
    <h1 >C murali Sree krishna</h1>
    <p>Pursuing graduate -2020 Gitam,Bengaluru</p>
  </div>
);

export default App;

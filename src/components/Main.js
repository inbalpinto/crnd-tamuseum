import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ProjectsContainer from './ProjectsContainer';
import About from './About';
import Publication from './Publication';

class Main extends Component {
  render() {
      return (
      <main>
          <Switch>
              <Route exact path='/' component={ProjectsContainer}/>
              <Route exact path='/projects' component={ProjectsContainer}/>
              <Redirect exact from='/projects/all' to='/projects'/>
              <Route path='/projects/*' component={ProjectsContainer}/>
              <Route path='/about' component={About}/>
              <Route path='/publication' component={Publication}/>
          </Switch>
      </main>
    );
  }
}

export default Main;

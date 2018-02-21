import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout';
import About from './components/About';
import Resume from './components/Resume';
import ProjectsIndexContainer from './containers/ProjectsIndexContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    // server.rb has
    // get "/projects/:id" do
    //   erb :home
    // end
  return(
    <Router history={browserHistory}>
      <Route path='/'  component={Layout}>
        <IndexRoute component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={ProjectsIndexContainer} />
        <Route path='/projects/:id' component={ProjectShowContainer} />

      </Route>
    </Router>
    )
  }
}
export default App;

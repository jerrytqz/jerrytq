import React, {Component} from 'react'; 
import {Route} from 'react-router-dom'; 

import Layout from './components/Layout/Layout'; 
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import PostSecondary from './containers/PostSecondary/PostSecondary'; 

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/personal-website" exact component={Home}/>
          <Route path="/personal-website/projects" component={Projects}/>
          <Route path="/personal-website/post-secondary" component={PostSecondary}/>
        </Layout>
      </div>
    );
  }
}

export default App;

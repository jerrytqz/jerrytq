import React, {Component} from 'react'; 
import {Route} from 'react-router-dom'; 

import Layout from './components/Layout/Layout'; 
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
        </Layout>
      </div>
    );
  }
}

export default App;

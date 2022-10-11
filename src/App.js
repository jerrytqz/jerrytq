import React, { Component } from 'react'; 
import { Routes, Route, ScrollRestoration } from 'react-router-dom'; 

import Layout from './components/Layout/Layout'; 
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';

import LoadingSpinner from './shared/UI/LoadingSpinner/LoadingSpinner';
import { ASSETS_BASE_DIR } from './shared/constants';

class App extends Component {
  state = {
    homeContent: null,
    projectsContent: null,
    fetchLoading: true
  }

  async componentDidMount() {
    Promise.all([
      fetch(`${ASSETS_BASE_DIR}/home/home.json`).then(content => content.json()),
      fetch(`${ASSETS_BASE_DIR}/projects/projects.json`).then(content => content.json())
    ]).then(([homeContent, projectsContent]) => {
      this.setState({
        homeContent: homeContent,
        projectsContent: projectsContent,
        fetchLoading: false
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (this.state.fetchLoading
      ? (
        <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
          <LoadingSpinner/>
        </div>
      )
      : (
        <div>
          <Layout>
            <Routes>
              <Route path="/" element={<Home content={this.state.homeContent}/>}/>
              <Route path="/projects" element={<Projects content={this.state.projectsContent}/>}/>
            </Routes>
          </Layout>
          <ScrollRestoration/>
        </div>
      )
    );
  }
}

export default App;

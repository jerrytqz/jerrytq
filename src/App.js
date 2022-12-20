import React, { Component } from 'react'; 
import { Routes, Route, ScrollRestoration } from 'react-router-dom'; 

import Layout from './Layout'; 
import Home from './containers/Home/Home';
import Project from './components/Project/Project';
import Contact from './containers/Contact/Contact';

import { ASSETS_BASE_DIR } from './shared/constants';
import LoadingSpinner from './shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import GeneralError from './shared/userInterfaces/errors/GeneralError/GeneralError';
import NotFoundError from './shared/userInterfaces/errors/NotFoundError/NotFoundError';
import ErrorBoundary from './shared/ErrorBoundary/ErrorBoundary';

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
        <>
          <Layout>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home content={this.state.homeContent}/>} errorElement={<GeneralError/>}/>
                <Route path="/projects/:slug" element={<Project/>} errorElement={<GeneralError/>}/>
                <Route path="/contact" element={<Contact/>} errorElement={<GeneralError/>}/>
                <Route path="*" element={<NotFoundError/>} errorElement={<GeneralError/>}/> 
              </Routes>
            </ErrorBoundary>
          </Layout>
          <ScrollRestoration/>
        </>
      )
    );
  }
}

export default App;

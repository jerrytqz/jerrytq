import React, { Component } from 'react'; 
import { Routes, Route, ScrollRestoration } from 'react-router-dom'; 
import { inject } from '@vercel/analytics';

import Layout from './Layout'; 
import Home from './containers/Home/Home';
import Project from './components/Project/Project';
import Contact from './containers/Contact/Contact';

import GeneralError from './shared/userInterfaces/errors/GeneralError/GeneralError';
import NotFoundError from './shared/userInterfaces/errors/NotFoundError/NotFoundError';
import ErrorBoundary from './shared/ErrorBoundary/ErrorBoundary';

// Analytics
inject();
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home/>} errorElement={<GeneralError/>}/>
              <Route path="/projects/:slug" element={<Project/>} errorElement={<GeneralError/>}/>
              <Route path="/contact" element={<Contact/>} errorElement={<GeneralError/>}/>
              <Route path="*" element={<NotFoundError containerStyle={{marginTop: '64px'}}/>} errorElement={<GeneralError/>}/> 
            </Routes>
          </ErrorBoundary>
        </Layout>
        <ScrollRestoration/>
      </>
    );
  }
}

export default App;

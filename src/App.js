import { inject } from '@vercel/analytics';
import React, { Component } from 'react';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';

import Layout from './Layout';
import Project from './components/Project/Project';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import ProjectCards from './containers/ProjectCards/ProjectCards';
import ErrorBoundary from './shared/ErrorBoundary/ErrorBoundary';
import GeneralError from './shared/userInterfaces/errors/GeneralError/GeneralError';
import NotFoundError from './shared/userInterfaces/errors/NotFoundError/NotFoundError';

inject();
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={<Home />}
                errorElement={<GeneralError />}
              />
              <Route
                path="/projects/:slug"
                element={<Project />}
                errorElement={<GeneralError />}
              />
              <Route
                path="/projects"
                element={<ProjectCards />}
                errorElement={<GeneralError />}
              />
              <Route
                path="/contact"
                element={<Contact />}
                errorElement={<GeneralError />}
              />
              <Route
                path="*"
                element={
                  <NotFoundError containerStyle={{ marginTop: '64px' }} />
                }
                errorElement={<GeneralError />}
              />
            </Routes>
          </ErrorBoundary>
        </Layout>
        <ScrollRestoration />
      </>
    );
  }
}

export default App;

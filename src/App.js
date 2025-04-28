import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';

import Layout from './Layout';
import Project from './components/Project/Project';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProjectCards from './pages/ProjectCards/ProjectCards';
import GeneralError from './shared/userInterfaces/errors/GeneralError/GeneralError';
import NotFoundError from './shared/userInterfaces/errors/NotFoundError/NotFoundError';

const App = () => {
  return (
    <>
      <Layout>
        <ErrorBoundary fallback={<GeneralError />}>
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
              element={<NotFoundError />}
              errorElement={<GeneralError />}
            />
          </Routes>
        </ErrorBoundary>
      </Layout>
      <Analytics debug={false} />
      <ScrollRestoration />
    </>
  );
};

export default App;

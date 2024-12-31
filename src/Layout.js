import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Sidebar from './components/navigation/Sidebar/Sidebar';
import Toolbar from './components/navigation/Toolbar/Toolbar';
import { ProjectNamesProvider } from './shared/context/ProjectNamesContext';

const Layout = (props) => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(false);
  }, [location]);

  return (
    <>
      <ProjectNamesProvider>
        <Toolbar onSidebarOpen={() => setShowSidebar(true)} />
        <Sidebar
          show={showSidebar}
          onSidebarClose={() => setShowSidebar(false)}
        />
      </ProjectNamesProvider>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import React, { useEffect, useState, useCallback } from 'react'; 
import { useLocation } from 'react-router-dom';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Sidebar from './components/Navigation/Sidebar/Sidebar';
import Footer from './components/Footer/Footer'; 

const Layout = (props) => {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        setShowSidebar(false);
    }, [location]);

    const openSidebarHandler = useCallback(() => {
        setShowSidebar(true);
    }, []);

    const closeSidebarHandler = useCallback(() => {
        setShowSidebar(false);
    }, []);

    return (
        <>
            <Toolbar onSidebarOpen={openSidebarHandler}/>
            <Sidebar show={showSidebar} onSidebarClose={closeSidebarHandler}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    );
};



export default Layout; 

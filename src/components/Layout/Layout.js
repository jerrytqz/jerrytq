import React from 'react'; 

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer'; 

const Layout = (props) => (
    <>
        <Toolbar/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </>
);

export default Layout; 

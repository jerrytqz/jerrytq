import React from 'react'; 

import Toolbar from '../Navigation/Toolbar/Toolbar'; 

const Layout = (props) => (
    <>
        <Toolbar/>
        <main>
            {props.children}
        </main>
    </>
);

export default Layout; 

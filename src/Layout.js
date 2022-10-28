import React, { Component } from 'react'; 

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Sidebar from './components/Navigation/Sidebar/Sidebar';
import Footer from './components/Footer/Footer'; 

class Layout extends Component {
    state = {
        showSidebar: false
    }

    openSidebarHandler = () => {
        this.setState({showSidebar: true});
    }

    closeSidebarHandler = () => {
        this.setState({showSidebar: false});
    }

    render() {
        return (
            <>
                <Toolbar onSidebarOpen={this.openSidebarHandler}/>
                <Sidebar show={this.state.showSidebar} onSidebarClose={this.closeSidebarHandler}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </>
        );
    }
}



export default Layout; 

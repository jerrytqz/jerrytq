import React, { Component } from 'react'; 

import GeneralError from './UI/Errors/GeneralError/GeneralError';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) return <GeneralError/>;
        return this.props.children; 
    }
}

export default ErrorBoundary;

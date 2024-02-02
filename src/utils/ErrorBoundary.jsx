import React, { Component } from 'react';
import NotFound from './../pages/404Page';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by error boundary:', error, errorInfo);
        this.clearLocalStorage();
        this.clearSessionStorage();
    }


    clearLocalStorage() {
        localStorage.clear();
    }

    clearSessionStorage() {
        sessionStorage.clear();
    }
    render() {
        if (this.state.hasError) {
            // Render the NotFound component when an error occurs
            return <NotFound />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
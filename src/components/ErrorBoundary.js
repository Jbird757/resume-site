import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or send it to an error tracking service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a custom error message or component
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    // Render the wrapped components
    return this.props.children;
  }
}

export default ErrorBoundary;

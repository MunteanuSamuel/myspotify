import React from 'react';

class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
        message: ''
    };

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            message: error.message
        })
    }

    render() {

        if (this.state.hasError) {
            console.log(this.state.message)
            return (
                <section>
                    <h1>Oups! Error occured...</h1>
                    <p>{ this.state.message }</p>
                </section>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
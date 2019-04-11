import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    handleOnClick = () => {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 2000);
    };

    render() {
        const label = this.state.isLoading ? 'Loading...' : this.props.label;

        return (
            <button
                className={'btn ' + this.props.type}
                onClick={this.handleOnClick}
            >
                {label}
            </button>
        );
    }
}

export default Button;

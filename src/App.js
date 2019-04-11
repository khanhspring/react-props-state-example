import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Button type="primary" label="Create" />
                <Button type="secondary" label="Update" />
            </div>
        );
    }
}

export default App;

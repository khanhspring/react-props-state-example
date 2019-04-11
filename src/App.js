import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Button type="primary" label="Primary" />
                <Button type="secondary" label="Secondary" />
                <Button type="danger" label="Danger" />
                <Button type="warning" label="Warning" />
                <Button type="colorful" label="Colorful" />
            </div>
        );
    }
}

export default App;

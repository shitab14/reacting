// src/App.js
import React from 'react';
import './styleglobal/App.css';
import EmailForm from './pages/EmailForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Email Sender</h3>
            </header>
            <EmailForm />
        </div>
    );
}

export default App;
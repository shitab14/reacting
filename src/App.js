// src/App.js
import React from 'react';
import './styleglobal/App.css';
import EmailForm from './pages/EmailForm';
import ApiComponent from './pages/ApiComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Reacting Hard or Hardly Reacting</h3>
            </header>
            <ApiComponent />
            <EmailForm />
        </div>
    );
}

export default App;
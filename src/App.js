import React from 'react';
import './App.css';
import DMView from './containers/DMView';
import PlayerView from './containers/PlayerView';

function App() {
    return (
    <React.Fragment>
        <DMView />
        <PlayerView />
    </React.Fragment>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DMView from './containers/DMView';
import PlayerView from './containers/PlayerView';
import './App.css';

function App() {
    return (
        <Router>
            <nav className="ui pointing menu">
                <Link className="item" to="/dm/">DMView</Link>
                <Link className="item" to="/player/">PlayerView</Link>
            </nav>
  
            <Route path="/" exact render={() => <PlayerView />} />
            <Route path="/dm/" render={() => <DMView />} />
            <Route path="/player/" render={() => <PlayerView />} />
      </Router>
  )
}

export default App;
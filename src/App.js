import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DMView from './containers/DMView';
import PlayerView from './containers/PlayerView';
import './App.css';

function App() {
    return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/dm/">DMView</Link>
              </li>
              <li>
                <Link to="/player/">PlayerView</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact render={() => <PlayerView />} />
          <Route path="/dm/" render={() => <DMView />} />
          <Route path="/player/" render={() => <PlayerView />} />
      </Router>
  )
}


export default App;
// const cards=[
//     {
//         title: "Bree",
//         content: "Bree was a village, of Men and hobbits, in Middle-earth, located east of the Shire and south of Fornost in Eriador. Bree was an ancient settlement of men in Eriador by the time of..",
//         img_url: "https://vignette.wikia.nocookie.net/lotr/images/1/1a/Bree.jpg/revision/latest?cb=20060220135923"
//     },
//     {
//         title: "Strider",
//         content: "Aragorn joined Frodo Baggins, Bilbo's adopted heir, and three of his friends at the Inn of the Prancing Pony in Bree. Though originally the hobbits were suspicious of Strider, they eventually trusted him and prepared to escape Bree and the Ringwraiths.",
//         img_url: "https://vignette.wikia.nocookie.net/lotr/images/5/5f/Strider_in_Prancing_Pony_-_FOTR.png/revision/latest?cb=20121003045004"
//     }
// ]


import React from "react";
import Card from "../components/Card";


class PlayerView extends React.Component {

    state = {
        cards: [],
        loading: true,
        characters: []
    };
 
     componentDidMount () {
        fetch("http://localhost:3000/api/v1/players")
        .then(response => response.json())
        .then(cards => this.setState({ cards, loading: false}));
     }

    render() {
        return (
            <div className="ui cards">
                {this.state.cards.map(card => <Card card={card} key={card.id}/>)}
            </div>
        )
    }
}

export default PlayerView
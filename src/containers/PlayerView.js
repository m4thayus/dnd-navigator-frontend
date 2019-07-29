import React from "react";
import Card from "../components/Card";
import { PLAYERS_URL } from "../routes";

class PlayerView extends React.Component {

    state = {
        cards: [],
        loading: true,
        characters: []
    };
 
    componentDidMount () {
        fetch(PLAYERS_URL)
            .then(response => response.json())
            .then(cards => {
                this.setState({
                    cards: cards
                })
            });
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
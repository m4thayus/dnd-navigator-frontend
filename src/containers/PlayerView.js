import React from "react";
import PlayerCard from "../components/PlayerCard";
import { CHARACTERS_URL } from "../routes";

class PlayerView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //character: props.character,
            cards: []
        }
    }

    componentDidMount () {
        fetch(CHARACTERS_URL + `/${this.props.character.id}`)
            .then(response => response.json())
            .then(character => {
                this.setState({
                    cards: character.cards
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui segment container centered">
                    <button className="ui fluid primary button">
                        Next Turn
                    </button>
                </div>
                <div className="ui segment items container centered">
                    {this.state.cards.map(card => <PlayerCard card={card} key={card.id}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default PlayerView
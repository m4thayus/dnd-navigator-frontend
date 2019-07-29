import React from "react";
import Card from "../components/Card";

class PlayerView extends React.Component {

    render() {
        return (
            <div className="ui cards">
                {this.state.cards.map(card => <Card card={card} />)}
            </div>
        )
    }
}

export default PlayerView
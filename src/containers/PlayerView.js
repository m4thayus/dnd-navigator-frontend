import React from "react";
import Card from "../components/Card";

class PlayerView extends React.Component {

    render() {
        return (
            this.props.cards.map(card => <Card card={card} />)
        )
    }
}

export default PlayerView
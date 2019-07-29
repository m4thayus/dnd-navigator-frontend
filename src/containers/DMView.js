import React from "react";
import Card from "../components/Card";

class DMView extends React.Component {
    render() {
        return (
            <div className="ui cards">
                {this.props.cards.map(card => <Card card={card} />)}
            </div>
        )
    }
}

export default DMView
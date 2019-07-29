import React from "react";
import Card from "../components/Card";
import { CARDS_URL } from "../routes";

class DMView extends React.Component {
    state = {
        cards: [],
        thisTurn: null,
        nextTurn: null
    };

    componentDidMount () {
        fetch(CARDS_URL)
            .then(response => response.json())
            .then(cards => {
                this.setState({
                    cards: cards,
                    thisTurn: cards[cards.length - 1]
                })
            })
            .catch(error => {
                const cards= [
                    {
                        title: "Bree",
                        content: "Bree was a village, of Men and hobbits, in Middle-earth, located east of the Shire and south of Fornost in Eriador. Bree was an ancient settlement of men in Eriador by the time of..",
                        img_url: "https://vignette.wikia.nocookie.net/lotr/images/1/1a/Bree.jpg/revision/latest?cb=20060220135923"
                    },
                    {
                        title: "Strider",
                        content: "Aragorn joined Frodo Baggins, Bilbo's adopted heir, and three of his friends at the Inn of the Prancing Pony in Bree. Though originally the hobbits were suspicious of Strider, they eventually trusted him and prepared to escape Bree and the Ringwraiths.",
                        img_url: "https://vignette.wikia.nocookie.net/lotr/images/5/5f/Strider_in_Prancing_Pony_-_FOTR.png/revision/latest?cb=20121003045004"
                    }
                ]
                this.setState({
                    cards: cards,
                    thisTurn: cards[cards.length - 1]
                })
            })
    }

    handleAddToQueue = card => {
        this.setState({ 
            nextTurn: card
        });
    }

    handleConfirm = card => {
        //do a post fetch
    }

    render() {
        return(
            <React.Fragment>
                <div className="ui cards">
                    {this.state.cards.map(card => <Card key={card.id} card={card} type={"list"} handleClick={this.handleAddToQueue}/>)}
                </div>
                <div class="ui divider"></div>
                <div className="ui cards">
                    <Card key="this-turn" card={this.state.thisTurn} type={"this-turn"} handleClick={null} />
                    <Card key="next-turn" card={this.state.nextTurn} list={"next-turn"} handleClick={this.state.handleConfirm} />
                </div>
            </React.Fragment>
        )
    }

 };

export default DMView;
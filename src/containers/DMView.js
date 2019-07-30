import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DMCard from "../components/DMCard";
import { CAMPAIGNS_URL, TURNS_URL } from "../routes";
import NewCardContainer from "./NewCardContainer";

class DMView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //campaign: props.campaign,
            cards: [],
            turns: [],
            characters: [],
            thisTurn: null,
            nextTurn: null

        }
    }

    componentDidMount () {
        fetch(CAMPAIGNS_URL + `/${this.props.campaign.id}`)
            .then(response => response.json())
            .then(campaign => {
                this.setState({
                    cards: campaign.cards,
                    turns: campaign.turns,
                    characters: campaign.characters
                }, () => {
                    fetch(TURNS_URL + `/${this.state.turns[this.state.turns.length - 1].id}`)
                        .then(response => response.json())
                        .then(turn => {
                            this.setState({
                                thisTurn: turn.card
                            })
                        })
                    })
            })
    }

    handleAddToQueue = card => {
        this.setState({ 
            nextTurn: card
        });
    }

    handleRemoveFromQueue = () => {
        this.setState({
            nextTurn: null
        })
    }

    handleConfirm = card => {
        let number = parseInt(this.state.thisTurn.number, 10) + 1
        this.state.characters.forEach(character => {
            this.postTurn(number, card, character)
        })
    }

    postTurn = (number, card, character) => {
        let turnData = {
            number: parseInt(number, 10),
            card_id: parseInt(card.id, 10),
            character_id: parseInt(character.id, 10)
        };
        
        let configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(turnData)
        };
        
        fetch(TURNS_URL, configObject)
            .then(response => response.json())
            .then(turn => {
                this.setState({
                    thisTurn: card,
                    nextTurn: null
                })
            })
            .catch(error => {
                window.alert(error.message);
            });
    }
 
    addCard = card => {
        this.setState({
            cards: [
                ...this.state.cards, 
                card
            ]
        })
    }

    render() {
        return(
            <React.Fragment>
                <Router >
                <Route path="/new-card/" render={() => <NewCardContainer campaign={this.props.campaign} addCard={this.addCard} />} />
                <div className="ui container segment centered">
                <Link className="ui primary fluid button" to="/new-card/">
                            Add New Card
                </Link>
                </div>
                <div className="ui two cards container">
                    <DMCard key="this-turn" card={this.state.thisTurn} type={"this-turn"} />
                    <DMCard 
                        key="next-turn" card={this.state.nextTurn} list={"next-turn"} 
                        handleClick={this.handleConfirm} handleClickAlt={this.handleRemoveFromQueue}
                    />
                </div>
                <div className="ui container">
                    <div className="ui four cards centered">
                        {this.state.cards.filter(card => card !== this.state.thisTurn)
                            .map(card => <DMCard key={card.id} card={card} type={"list"} handleClick={this.handleAddToQueue}/>)}
                    </div>
                </div>
                </Router>
            </React.Fragment>
        )
    }

 };

export default DMView;
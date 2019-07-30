import React from "react";
import NewCardForm from "../components/NewCardForm";
import { CARDS_URL } from "../routes";

class NewCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // campaign: props.campaign
            title: "",
            content: "",
            img_url: ""
        }
    }

    handleSubmit = event => {
        let cardData = {
            title: this.state.title,
            content: this.state.content,
            img_url: this.state.img_url,
            campaign_id: parseInt(this.props.campaign.id, 10)
        };
        
        let configObject = {
            method: "POST",
            headers: {
                "Title": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(cardData)
        };
        
        fetch(CARDS_URL, configObject)
            .then(response => response.json())
            .then(card => {
                this.props.addCard(card)
            })
            .catch(error => {
                window.alert(error.message);
            });
    } 

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return (
            <NewCardForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        )
    }
}

export default NewCardContainer
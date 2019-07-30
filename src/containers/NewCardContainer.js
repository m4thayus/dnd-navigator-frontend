import React from "react";
import NewCardForm from "../components/NewCardForm";

class NewCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // campaign: props.campaign
            cards: [],
            campaigns: [],
            newCard: null
        }
    }

    componentDidMount () {
        fetch()
            .then(response => response.json())
            .then(card => {
                this.setState({
                    cards: campaign.cards
                })

            })
    }

    handleSubmit = card => {
        this.setState({
            newCard: card
        });
    } 

    handleChange = () => {
        this.state.campaign(campaign => {
            this.postCard(title, content, img_url, campaign)
        })

    }

    postCard = (title, content, img_url, campaign) => {
        let cardData = {
            title: title,
            content: content,
            img_url: img_url,
            campaign_id: parseInt(campaign.id, 10)
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
                this.setState({ cards, loading: false})
            })
            .catch(error => {
                window.alert(error.message);
            });
    }

    render() {
        return (
            <NewCardForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        )
    }
}

export default NewCardContainer
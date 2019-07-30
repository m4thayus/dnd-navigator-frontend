import React from "react";
import DMCard from "../components/DMCard";
import { CAMPAIGNS_URL, TURNS_URL } from "../routes";

class DMView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //campaign: props.campaign,
            cards: [],
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
                    thisTurn: campaign.cards[campaign.cards.length - 1]
                })
            })
            // .catch(error => {
            //     const cards= [
            //         {
            //             id: 0,
            //             title: "Bree",
            //             type: "Locale",
            //             content: "Bree was a village, of Men and hobbits, in Middle-earth, located east of the Shire and south of Fornost in Eriador. Bree was an ancient settlement of men in Eriador by the time of..",
            //             img_url: "https://vignette.wikia.nocookie.net/lotr/images/1/1a/Bree.jpg/revision/latest?cb=20060220135923"
            //         },
            //         {
            //             id: 1,
            //             title: "Strider",
            //             type: "NPC",
            //             content: "Aragorn joined Frodo Baggins, Bilbo's adopted heir, and three of his friends at the Inn of the Prancing Pony in Bree. Though originally the hobbits were suspicious of Strider, they eventually trusted him and prepared to escape Bree and the Ringwraiths.",
            //             img_url: "https://vignette.wikia.nocookie.net/lotr/images/5/5f/Strider_in_Prancing_Pony_-_FOTR.png/revision/latest?cb=20121003045004"
            //         },
            //         {
            //             id: 2,
            //             title: "Gandalf",
            //             type: "NPC",
            //             content: "Gandalf was shorter in stature than the other two; but his long white hair, his sweeping silver beard, and his broad shoulders, made him look like some wise king of ancient legend. In his aged face under great snowy brows his eyes were set like coals that could suddenly burst into fire.",
            //             img_url: "https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754"
            //         }
            //     ]
            //     this.setState({
            //         cards: cards,
            //         thisTurn: cards[cards.length - 1]
            //     })
            // })
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
        console.log(card)
        //do a post fetch
        let formData = {
            //turn data
        };
        
        let configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
        
        fetch(TURNS_URL, configObject)
            .then(response => response.json())
            .then(object => {
               //do some stuff 
            })
            .catch(error => {
                window.alert(error.message);
            });
    }

    render() {
        return(
            <React.Fragment>
                <div className="ui cards two wide column container">
                    <DMCard key="this-turn" card={this.state.thisTurn} type={"this-turn"} />
                    <DMCard 
                        key="next-turn" card={this.state.nextTurn} list={"next-turn"} 
                        handleClick={this.handleConfirm} handleClickAlt={this.handleRemoveFromQueue}
                    />
                </div>
                <div className="ui segment container">
                    <div className="ui cards centered">
                        {this.state.cards.filter(card => card !== this.state.thisTurn)
                            .map(card => <DMCard key={card.id} card={card} type={"list"} handleClick={this.handleAddToQueue}/>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }

 };

export default DMView;
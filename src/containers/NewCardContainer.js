import React from "react";
import NewCardForm from "../components/NewCardForm";

class NewCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaign: props.campaign
        }
    }

    handleSubmit = event => {

    } 

    handleChange = () => {

    }

    render() {
        return (
            <NewCardForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        )
    }
}

export default NewCardContainer
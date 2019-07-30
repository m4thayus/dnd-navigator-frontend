import React from "react";
import SelectionContainer from "./SelectionContainer";
import LoginForm from "../components/LoginForm";
import { CAMPAIGNS_URL, CHARACTERS_URL } from "../routes";

class LoginContainer extends React.Component {
    state = {
        loggedIn: false,
        username: "",
        userType: "player",
        options: []
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.userType === "dm") {
            //should be DMS_URL/:id
            fetch(CAMPAIGNS_URL)
                .then(response => response.json())
                .then(campaigns => {
                    this.setState({
                        loggedIn: true,
                        options: campaigns
                });
            })
        } else {
            //should be PLAYERS_URL/:id
            fetch(CHARACTERS_URL)
                .then(response => response.json())
                .then(characters => {
                    this.setState({
                        loggedIn: true,
                        options: characters
                });
            })

        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    
    handleToggle = () => {
        let type = this.state.userType === "dm" ? "player" : "dm"
        this.setState({
            userType: type
        })
    }

    render() {
        return (
            this.state.loggedIn 
            ?
                <SelectionContainer options={this.state.options} user={this.state.userType} />
            :
                <div className="ui container">
                    <LoginForm userType={this.state.userType}
                        handleUsernameChange={this.handleUsernameChange}
                        handleToggle={this.handleToggle}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
        )
    }
}

export default LoginContainer
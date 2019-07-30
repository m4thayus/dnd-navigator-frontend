import React from "react";
import SelectionContainer from "./SelectionContainer";
import LoginForm from "../components/LoginForm";
import { DMS_URL, CAMPAIGNS_URL } from "../routes";

class LoginContainer extends React.Component {
    state = {
        loggedIn: false,
        username: "",
        userType: "player",
        options: []
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(CAMPAIGNS_URL)
            .then(response => response.json())
            .then(campaigns => {
                this.setState({
                    loggedIn: true,
                    options: campaigns
            });
        })
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
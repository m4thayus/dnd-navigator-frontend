import React from "react";
import SelectionContainer from "./SelectionContainer";
import LoginForm from "../components/LoginForm";
import { PLAYERS_URL, DMS_URL } from "../routes";

class LoginContainer extends React.Component {
    state = {
        loggedIn: false,
        username: "",
        userType: "player",
        players: [],
        dms: [],
        options: []
    }

    componentDidMount() {
        fetch(PLAYERS_URL)
            .then(response => response.json())
            .then(players => {
                this.setState({
                    players: players 
                })
            });
        fetch(DMS_URL)
            .then(response => response.json())
            .then(dms => {
                this.setState({
                    dms: dms 
                })
            });
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.userType === "dm" && this.state.dms.some(dm => dm.username === this.state.username) ) {
            let user = this.state.dms.find(dm => dm.username === this.state.username)
            fetch(DMS_URL + `/${user.id}`)
                .then(response => response.json())
                .then(campaigns => {
                    this.setState({
                        loggedIn: true,
                        options: campaigns
                });
            })
        } else if (this.state.players.some(player => player.username === this.state.username)){
            let user = this.state.players.find(player => player.username === this.state.username)
            fetch(PLAYERS_URL + `/${user.id}`)
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
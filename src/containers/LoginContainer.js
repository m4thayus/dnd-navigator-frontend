import React from "react";
import SelectionContainer from "./SelectionContainer";
import LoginForm from "../components/LoginForm";

class LoginContainer extends React.Component {
    state = {
        loggedIn: false,
        username: "",
        userType: "player",
        options: []
    }

    handleSubmit = event => {
        event.preventDefault()
        //fetch request for username
        let testOptions = this.state.userType === "dm" ? [{id: 0, name: "Test Campaign"}] : [{id: 0, name: "Test Character"}]
        this.setState({
            loggedIn: true,
            options: testOptions
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
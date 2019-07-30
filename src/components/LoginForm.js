import React from "react"

function LoginForm(props){

    let { userType, handleToggle, handleSubmit, handleUsernameChange} = props;

    return (
        <form className="ui form">
            <div className="ui segment">
                <div className="field">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username" 
                        placeholder="Username" 
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
            </div>
            <div className="ui segment">
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input 
                            type="checkbox" 
                            onChange={() => handleToggle()}
                            checked={userType === "dm"}
                        />
                        <label>I'm A Dungeon Master</label>
                    </div>
                </div>
            </div>
            <input 
                type="submit" 
                value="Login" 
                className="ui green submit button" 
                onClick={handleSubmit}
            />
        </form>
    )
}

export default LoginForm
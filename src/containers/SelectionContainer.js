import React from "react";
import DMView from "./DMView";
import Campaign from "../components/Campaign";
import PlayerView from "./PlayerView";
import Character from "../components/Character";

class SelectionContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // dm: props.user === "dm",
            // campaigns: props.options,
            //or
            // player: props.user === "player",
            // characters: props.options,
            currentSelection: null,
            turn: 0
        }
    }

    handleClick = selection => {
        this.setState({
            currentSelection: selection 
        })
    }

    incrementTurn = () => {
        this.setState({
            turn: this.state.turn + 1
        })
    }

    render() {
        return (
            !!this.state.currentSelection
            ?
                this.props.user === "dm" ? <DMView campaign={this.state.currentSelection} /> : <PlayerView key={this.state.turn} character={this.state.currentSelection} incrementTurn={this.incrementTurn}/>
            :
            <div className="ui segment items container centered">
                    {
                        this.props.options.map(option => {
                            return (
                                this.props.user === "dm" 
                                ? 
                                    <Campaign key={option.id} campaign={option} handleClick={this.handleClick} />
                                :
                                    <Character key={option.id} character={option} handleClick={this.handleClick} />
                            ) 
                        })
                    }
                </div>

        )
    }
}

export default SelectionContainer
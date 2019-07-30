import React from "react"

function Character(props){
    let { character, handleClick } = props;

    return (
        <div onClick={() => handleClick(character)}>
            {character.name}
        </div>
    )
}

export default Character
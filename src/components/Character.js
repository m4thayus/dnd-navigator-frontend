import React from "react"

function Character(props){
    let { character, handleClick } = props;

    return (
        <div onClick={() => handleClick(character)}>
            {character.name}
            <div className="image">
                <img className="ui rounded image" src={character.img_url} alt={character.title} />
            </div>
        </div>
    )
}

export default Character
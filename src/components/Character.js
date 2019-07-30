import React from "react"

function Character(props){
    let { character, handleClick } = props;

    return (
        <div className="item" onClick={() => handleClick(character)}>
            <div className="image">
                <img className="ui rounded image" src={character.img_url} alt={character.name} />
            </div>
            <div className="content">
                <div className="header">
                    {character.name} (Lvl. {character.level})
                </div>
                <div className="meta">
                    <span>{character.gender} + {character.race}</span>
                </div>
                <div className="description">
                    <p>Probably not copyright infringing at all...</p>
                </div>
            </div>
        </div>
    )
}

export default Character
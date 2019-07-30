import React from "react"

function Campaign(props){
    let { campaign, handleClick } = props;

    return (
        <div onClick={() => handleClick(campaign)}>
            {campaign.name}
        </div>
    )
}

export default Campaign
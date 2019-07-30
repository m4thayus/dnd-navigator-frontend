import React from "react"

function Campaign(props){
    let { campaign, handleClick } = props;

    return (
        <div className="item" onClick={() => handleClick(campaign)}>
            <div className="image">
                <img className="ui rounded image" src={campaign.img_url} alt={campaign.name} />
            </div>
            <div className="content">
                <div className="header">
                    {campaign.name}
                </div>
                <div className="meta">
                    <span>Levels: {campaign.levels}</span>
                </div>
                <div className="description">
                    <p>{campaign.setting}</p>
                    <p>Probably not copyright infringing at all...</p>
                </div>
            </div>
        </div>
    )
}

export default Campaign
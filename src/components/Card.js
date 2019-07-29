import React from "react"

const Card = props => {
    let { card, handleCardClick} = props;

    // let cardType; 

    // switch (card.card_class) {
    //     case "":
    //         cardType = <i className="icon type" />;
    //         break;
    //     default:
    //         cardType = <div />;
    // }

    return (
        <div className="ui card">
           <div className="content">
               <img className="right floated mini ui image" src={card.img_url} alt={card.title} />
               <div className="header">
                   {card.title}
               </div>
               <div className="meta">
                   Category Placeholder
               </div>
               <div className="description">
                   {card.content}
               </div>
           </div>
           <div className="ui bottom attached button" onClick={handleCardClick}>
               <i className="add icon"></i>
               Add to Queue
           </div>
       </div>
        );
      };
      
export default Card;

import React from "react"

// function Card(props){
//     return (
//         <div>
//             <h2>{props.card.title}</h2>
//             <img src={props.card.img_url} alt={props.card.title} />
//             <p>{props.card.content}</p>
//         </div>
//     )
// }

// export default Card

const Card = props => {
    let { card, handleCardClick} = props;

    let cardType; 

    switch (card.card_class) {
        case "":
            cardType = <i className="icon type" />;
            break;
        default:
            cardType = <div />;
    }

    return (
        <div className="ui card">
           <div class="content">
               <img class="right floated mini ui image" src={props.card.img_url} alt={props.card.title} />
               <div class="header">
                   {props.card.title}
               </div>
               <div class="meta">
                   Category Placeholder
               </div>
               <div class="description">
                   {props.card.content}
               </div>
           </div>
           <div class="ui bottom attached button">
               <i class="add icon"></i>
               Add to Queue
           </div>
       </div>
        );
      };
      
      export default Card;
        
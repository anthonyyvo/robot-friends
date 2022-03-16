import React from "react";

const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/hello${props.id}`}></img>
            <h2>Hoai An</h2>
            <p>{props.name}</p>
            <p>{props.username}</p>
            <p>{props.email}</p>
        </div>
    ) 
};

export default Card;
import React from "react";
import Card from "./Card"

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('oh noooooo')
    // }
    const cardComponent =  robots.map((user, i) => {
        return (<Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />)
    });
    return (<div>{cardComponent}</div>);
};

export default CardList;
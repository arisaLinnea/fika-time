
import React, { useState } from "react";

//{ingredients: ["Not entered yet"], instructions: "none" }

const recipe = [{
    ingredients: [
    "3 dl flour",
    "125g milk free margin",
    "2 dl oatly iMat cream",
    "1,5 dl cacao",
    "50g chopped dark chocolate",
    "2 msk light (sirap)",
    "2 tsk vanilia suger",
    "1 tsk baking powder",
    "0,5 tsk salt"],
    instructions: 
    "Instructions: 1.Sätt på ugnen på 175 1.    2.Smörj en form (ca 20cm i diameter) med margarin och bröa den med strödbröd.     3.Mät/väg upp alla torra ingredienser i en bunke.     4.Hacka chokladen och blanda detta med de torra ingredienserna     5.Smält margarinet och blanda med grädden och sirapen.    6.Häll över vätskan i bunken med de torra ingredienserna. Rör om till en smet.     7.Grädda mitt i ugnen på 175° i 15-18 minuter. Observera att detta endast är en riktlinje, hur pass länge den ska stå inne skiljer sig från en ugn till en annan. 8.Låt kakan svalna och toppa med färska bär och pudra över lite florsocker."
}, {ingredients: ["Not entered yet"], instructions: "none" }];

const Recipe = ({number}) => {
    if(number < 0) return <div></div>;
    return (
        <>
        <ul>
            {recipe[number].ingredients.map((line, index) => (
                <li key={index}>
                    {line}
                </li>
            ))}
    </ul>
    <p className="instructions">
        {recipe[number].instructions}
    </p>
    </>
    )
}

export default Recipe;
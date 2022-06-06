import React from "react";


export default function Card({name, type, image }){
    
    return(
        <div>
            <h3>{name}</h3>
            <p>{type}</p>
            <img alt='imagen de pokemon'>{image}</img>
        </div>
    )
        //     return (
        //         <div className="card">
        //             <img className="cardImage" src={image} alt='img not found'></img>
        //             <h3 className="cardName">{name}</h3>
        //             <div className="contenedorDiets">
        //                 <h5 >Diet : </h5>
        //                 <div className="cardDietP">
        //                     {diets?.map(diets => <p key={diets}>{`${diets.name ? diets.name : diets}-`} </p>)}
        //                 </div>
        //             </div>
        
        //         </div>
        //     )
        
        
}
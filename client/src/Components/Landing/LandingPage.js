import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function LandingPage(){
    return(
        <DivContenedor>
            <H1>Welcome to PokePage</H1>
        <DivLanding>
            <p>Queres encontrar al mejor pokemon? Mejor aun, quieres hacerlo tu? <br/>Estas en el lugar correcto!<br/> Haz click en el boton para mas detalles y que te diviertas...</p>
            <Link to='/home'><Button>Home</Button></Link>
        </DivLanding>
        </DivContenedor>
    )
}



const H1 = styled.h1`
font-family: 'Kaushan Script', cursive;
font-size:60px;
background-color:khaki;
border-radius:10px;
padding:4px 30px;
box-shadow: 5px 5px;

@media (max-width:768px){
    font-size: 50px;
}

@media (max-width:425px){
    font-size: 35px;
}

@media (max-width:375px){
    font-size: 30px;
}

`

export const Button = styled.button`
background: white;
cursor: pointer;
font-size:1em;
margin:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
`
export const DivContenedor = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
flex-direction:column;
justify-content: flex-start;
gap: 300px;
@media (max-width:375px){
    margin:10px;
    justify-content:space-evenly;
    gap:50px;
}
@media (max-width:425px){
    margin:10px;
    justify-content:space-evenly;
    gap:50px;
}
@media (max-width:768px){
    
    font-size: 50px;
}


`
export const DivLanding = styled.div`
/* background: gray; */
border: 1 px solid;
border-radius:10px;
display:flex;
flex-direction: column;
text-align:center;
float:left;
margin:4px;
padding: 10px 22px;
margin:4px;
background-color:khaki;
/* opacity:0.9; */
box-shadow: 5px 5px;
font-size: 15px;
gap:20px;
`

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function LandingPage(){
    return(
        <DivContenedor>
        <DivLanding>
            <h1>Welcome to PokePage</h1>
            <Link to='/home'><Button>Home</Button></Link>
        </DivLanding>
        </DivContenedor>
    )
}




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
`
export const DivLanding = styled.div`
background: gray;
border: 1 px solid;
border-radius:10px;
display:flex;
flex-direction: column;
text-align:center;
float:left;
margin:4px;
padding: 10px 22px;
margin:4px;
`
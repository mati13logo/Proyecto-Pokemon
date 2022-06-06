import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Styles/Button'
import { DivLanding } from './Styles/DivLanding'
import {DivContenedor} from './Styles/DivContenedor'

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
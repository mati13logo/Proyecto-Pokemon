import react from 'react'
import styled from 'styled-components'


export default function Loading(){
    return (
        <Div>
            <Img src='https://www.todofondos.net/wp-content/uploads/3554x1999-Pokemon-Sad-Pikachu-HD-Wallpaper-Descargar-scaled.jpg'/>
            <p>Sorry, no information</p>
        </Div>

    )
}

const Img = styled.img`
width:400px;
height:300px;
border-radius:20px;
`
const Div = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:20px;
background-color:khaki;
`
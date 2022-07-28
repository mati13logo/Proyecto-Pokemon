import React from "react";
import styled from "styled-components";

export default function Cargando(){
    return(
        <Div>
        <Img src="https://pa1.narvii.com/6192/558b2d566d82f8cabba240585dfe9f6c9a2541bd_hq.gif"/>
        <h3>Loading...</h3>
        </Div>
    )
}

const Img = styled.img`
width:400px;
height:300px;
border-radius:20px;
@media (max-width:768px){
    width:300px;
    height:200px;
    overflow:auto;
}
@media (max-width:425px){
    width:300px;
    height:200px;
    overflow:auto;
}
@media (max-width:375px){
    width:300px;
    height:200px;
    overflow:auto;
}
`
const Div = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:20px;
background-color:khaki;
@media (max-width:768px){
 height:78vh;
}
@media (max-width:425px){
 height:78vh;
}
@media (max-width:375px){
 height:78vh;
}
`
import React from "react";
import styled from 'styled-components'
import { Colors } from '../Colors/Colors.js'
import Loading from "../Loading/Loading.js";

export default function Card({ name, type, image, setDetail, health, attack, defense, speed }) {
if(name,image,health,defense,attack,speed,type){
    return (
        <div onMouseEnter={() =>
            setDetail({
                name,
                image,
                type,
                health,
                attack,
                defense,
                speed,
            })
        }>
            <CardStyled style={{ backgroundColor: `${Colors[type[0].name?type[0].name: type[0] ]}` }}>
                <div >
                    <div>
                        <H3 >{name}</H3 >
                    </div>
                    <div>
                        
                        {type?.map((el,index) => <P key={index}>{`${el.name ? el.name : el}`} </P>)}
                    </div>
                    

                </div>
                <div>
                    <Img src={image} alt='imagen de pokemon' height='170' width='170' />
                </div>
            </CardStyled>

        </div>
    )
}else{
    return(<Loading></Loading>)
}
}



export const H3 = styled.h3`
margin: 0;
font-size:1 rem;
text-transform:capitalize;
color:white;
`
export const P = styled.p`
margin: 3px;
text-transform:capitalize;
color:white;
`

export const CardStyled = styled.div`
display:flex;
cursor: pointer;
font-size:1em;
margin:1em;
padding:4px 12px;
border-radius:5px;
justify-content:space-between;
position:relative;
height:130px;
width:330px;
box-shadow:0 20px 30px rgba(0,0,0,0.15);
@media (max-width:1440px){
    width:250px;
    

}
@media (max-width:375px){
    width:250px;
    

}
`
export const Img = styled.img`
position:absolute;
right:-15px;
top:0;

`
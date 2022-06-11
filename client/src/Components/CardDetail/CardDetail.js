import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors/Colors";

export default function CardDetail({ name, image, health, defense, attack, speed, type }) {
    if(name,image,health,defense,attack,speed,type){
        return (
            <DivConteiner>
                <DivCard >
                <Hp>HP {health}</Hp>
                <ImgCard src={image}/>
                <H3Name>{name}</H3Name>
                <DivTypes>
                {/* {type?.length > 1 ? type?.map((el, index) => (<P key={index} >{el}</P>)) : <P>{type}</P>} */}
                {type?.map((el,index) => <P key={index}>{`${el.name ? el.name : el}`} </P>)}
                </DivTypes>
                <DivStats>
                    <div>
                        <h3>Defense</h3>
                        <p>{defense}</p>
                    </div>
                    <div>
                        <h3>Attack</h3>
                        <p>{attack}</p>
                    </div>
                    <div>
                        <h3>Speed</h3>
                        <p>{speed}</p>
                    </div>
                </DivStats>
                </DivCard>
            </DivConteiner>
        )
    }else{
        return'no hay info pa'
    }
}
const DivConteiner = styled.div`
width:350px;
/* background-color:red; */
`
const DivCard = styled.div`
background:radial-gradient(circle at 50% 0%, orange 36%, #ffffff 36%);
width:100%;
padding:30px 20px;
box-shadow:0 20px 30px rgba(0,0,0,0.15);
border-radius:5px;
`
const ImgCard = styled.img`
display:block;
width:180px;
max-height:200px;
/* position:relative; */
margin:20px auto;
`
const Hp = styled.p`
width:80px;
background-color: #ffffff;
text-align:center;
padding:8px0;
border-radius:30px;
margin-left:auto;
font-weight:400;
`
const H3Name = styled.h3`
text-align:center;
font-weight:600;
text-transform:capitalize;
`
const DivTypes = styled.div`
display:flex;
justify-content:space-around;
margin:20x 0 40px 0;
text-transform:capitalize;
`

const DivStats = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
text-align: center;
`
 const P = styled.p`
margin: 0;
`
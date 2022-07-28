import React from "react";
import { getDetails } from "../../Redux/Actions";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cargando from "../Cargando/Cargando";
import { Colors } from "../Colors/Colors";

export default function Detail(props) {
    const pokeDetail = useSelector((state) => state.detail)
    const id = props.match.params.id
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])

    return (
        <Div>
            {
                Object.keys(pokeDetail).length > 0 ?
                    <DivDetails style={{ backgroundColor: `${Colors[pokeDetail.types[0].name?pokeDetail.types[0].name: pokeDetail.types[0] ]}` }}>
                        <NombreyImg>
                            <H3>{pokeDetail.name}</H3>
                            <Img src={pokeDetail.image} />
                        </NombreyImg>
                        <DivContenedorP style={{ backgroundColor: `${Colors[pokeDetail.types[0].name?pokeDetail.types[0].name: pokeDetail.types[0] ]}` }} >
                            <p>Id : #{pokeDetail.id}</p>
                            <p>Health : {pokeDetail.health}</p>
                            <p>Defense : {pokeDetail.defense}</p>
                            <p>Attack : {pokeDetail.attack}</p>
                            <p>Speed : {pokeDetail.speed}</p>
                            <p>Height : {pokeDetail.height}</p>
                            <p>Weight : {pokeDetail.weight}</p>
                            <DivType>
                                <p>Type : </p>
                                {pokeDetail.types?.map((el,index) => <P key={index}>{`${el.name ? el.name : el}`} </P>)}
                            </DivType>
                        </DivContenedorP>
                    </DivDetails>
                    : <Cargando></Cargando>
            }
                            <Link to='/home'>
                            <Button>Back</Button>
                            </Link>
        </Div>
    )
}
const NombreyImg = styled.div`
@media (max-width:425px){
    display:flex;
    flex-direction:column;
}
@media (max-width:375px){
    display:flex;
    flex-direction:column;
}
`
const DivContenedorP = styled.div`
background-color:cadetblue ;
display:flex;
color:black;
justify-content:center;
align-items:center;
width: fit-content;
flex-direction:column;
padding:25px;
border-radius:25px;
border:1px solid;
@media (max-width:768px){
 width:210px;
 height:400px;
}
`
const Button = styled.button`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
margin:10px;
`

const Div = styled.div`
height:100vh;
background-color:khaki;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
overflow:auto;
@media (max-width:768px){
height:100vh;
}

`

const DivDetails = styled.div`
background-color:cadetblue ;
display:flex;
color:black;
justify-content:center;
align-items:center;
width: fit-content;
flex-direction:row-reverse;
padding:25px;
border-radius:25px;
gap:40px;
@media (max-width:768px){
 margin:5px;
}
@media (max-width:425px){
  flex-direction:column;
  gap:0;
    margin-top:15px;
    padding:10px;
}
@media (max-width:375px){
    display:flex;
    flex-direction:column;
    gap:0;
    margin-top:15px;
    padding:10px;
}

`
const Img = styled.img`
@media (max-width:768px){
 width:400px;
}
@media (max-width:425px){
 width:210px;
}
@media (max-width:375px){
 width:200px;
}`
const H3 = styled.h3`
    float: left;
    text-transform: capitalize;
    border: 1px solid;
    border-radius: 7px;
    padding: 2px 10px;
    box-shadow: 0 1px 1px 2px;
    @media (max-width:425px){
    text-align:center;
}
    @media (max-width:375px){
    text-align:center;
}

`
const P = styled.p`
text-transform: capitalize;
margin:0;
/* gap: 5px; */
`
const DivType = styled.div`
display:flex;
justify-content:center;
text-align:center;
align-items:center;
gap:10px;
@media (max-width:425px){
    
}
@media (max-width:375px){
    width:150px;
}
`





import React from "react";
import { getDetails } from "../../Redux/Actions";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Detail(props) {
    const pokeDetail = useSelector((state) => state.detail)
    const id = props.match.params.id
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(getDetails(id))
        console.log(pokeDetail)
    }, [dispatch, id])

    return (
        <Div>
            {
                Object.keys(pokeDetail).length > 0 ?
                    <DivDetails>
                        <div>
                            <H3>{pokeDetail.name}</H3>
                            <img src={pokeDetail.image} />
                        </div>
                        <div>
                            <p>Health : {pokeDetail.health}</p>
                            <p>Health : {pokeDetail.defense}</p>
                            <p>Health : {pokeDetail.attack}</p>
                            <p>Health : {pokeDetail.speed}</p>
                            <p>Health : {pokeDetail.height}</p>
                            <p>Health : {pokeDetail.weight}</p>
                            <div>
                                <p>Type : </p>
                                {pokeDetail.types?.map((el,index) => <P key={index}>{`${el.name ? el.name : el}`} </P>)}
                            </div>
                        </div>
                    </DivDetails>
                    : '...Loading'
            }
                            <Link to='/home'>
                            <Button>Back</Button>
                            </Link>
        </Div>
    )
}


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
/* background-color: orange; */
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`

const DivDetails = styled.div`
background-color:gray ;
display:flex;
color:white;
justify-content:center;
align-items:center;
width: fit-content;
flex-direction:row-reverse;
padding:25px;
border-radius:25px;
gap:40px;

`
const H3 = styled.h3`
text-transform: capitalize;
`
const P = styled.p`
text-transform: capitalize;
margin:0;
/* gap: 5px; */
`
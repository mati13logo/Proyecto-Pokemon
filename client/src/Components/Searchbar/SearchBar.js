import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { getNamePokemon } from "../../Redux/Actions.js";
import styled from "styled-components";

export default function SearchBar(){
const dispatch = useDispatch();
const [name, setName] = useState("")

function handleInputChange(e){
e.preventDefault();
setName(e.target.value)

}
function handleSubmit(e){
    e.preventDefault();
    dispatch(getNamePokemon(name))
}

return(
    <Div>
        <Input type='text'
        placeholder="Buscar"
        onChange={(e)=> handleInputChange(e)}
        />
        <Button className='boton' type="submit"
        onClick={(e)=> handleSubmit(e)}
        >Buscar</Button>
    </Div>
)
}
const Div= styled.div`
@media (max-width:1440px){
    display:flex;
    flex-direction:row;
}
@media (max-width:768px){
    display:flex;
    flex-direction:row;
}
@media (max-width:425px){
    display:flex;
    flex-direction:row;
    /* gap:10px; */
}
@media (max-width:375px){
    display:flex;
    flex-direction:row;
}

`
const Input = styled.input`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
@media (max-width:1440px){
    width:170px;

}
@media (max-width:768px){
    width:170px;

}
@media (max-width:425px){
    width:170px;

}
@media (max-width:375px){
    width:170px;

}
`


const Button = styled.button`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
`

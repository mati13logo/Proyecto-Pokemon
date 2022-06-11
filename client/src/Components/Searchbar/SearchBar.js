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
    <div>
        <Input type='text'
        placeholder="Buscar"
        onChange={(e)=> handleInputChange(e)}
        />
        <Button className='boton' type="submit"
        onClick={(e)=> handleSubmit(e)}
        >Buscar</Button>
    </div>
)
}
const Input = styled.input`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
`


const Button = styled.button`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
`

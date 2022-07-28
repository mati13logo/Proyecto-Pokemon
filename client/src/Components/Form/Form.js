import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getPokemons, getTypes, postPokemon } from "../../Redux/Actions";


export function validate(input) {
    let errors = {};
    let patron = new RegExp('^[ñíóáéú a-zA-Z ]+$')

    if (!input.name) errors.name = 'Name is require'
    else if (!patron.test(input.name)) {
        errors.name = 'Invalid character entered'
    }
    if (!input.health) errors.health = 'Health is require'
    else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.health)) {
        errors.health = 'The number must be between 0 and 100'
    }
    if (!input.attack) errors.attack = 'Attack is require'
    else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.attack)) {
        errors.attack = 'The number must be between 0 and 100'
    }
    if (!input.defense) errors.defense = 'Defense is require'
    else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.defense)) {
        errors.defense = 'The number must be between 0 and 100'
    }
    if (!input.speed) errors.speed = 'Speed is require'
    else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.speed)) {
        errors.speed = 'The number must be between 0 and 100'
    }
    if (!input.image) errors.image = 'Image is require'
    else if (!/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(input.image)) {
        errors.image = 'This is not a picture'
    } else if (!/.*(png|jpg|jpeg|gif)$/.test(input.image)) {
        errors.image = 'This is not a picture'
    }
    if (!input.types.length) errors.types = 'You must select at least one type ';
    if (input.types.length > 2) errors.types = 'A pokemon can only have two types'
    return errors;
}

export default function Form() {
    const dispatch = useDispatch();
    const typesAll = useSelector((state) => state.types)
    const history = useHistory()
    const [errors, setErrors] = useState({
        name: 'Name is require'
    })

    const [input, setInput] = useState({
        name: '',
        image: '',
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        types: [],
    })

    useEffect(() => {
        dispatch(getTypes())
        dispatch(getPokemons())
    }, []);

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleCheck(e) {
        let types = input.types;
        let find = types.indexOf(e.target.value);
        if (find >= 0) {
            types.splice(find, 1);

        } else {
            types.push(e.target.value)
        }
        setInput({
            ...input,
            types: types,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postPokemon(input))
        alert('Pokemon Created')
        setInput({
            name: '',
            image: '',
            health: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            types: [],
        })
        history.push('/home')
    }

    return (
        <Formula>
            <ContenedorPrincipal>
                <Contenedor>
                    <DivInput>
                        <Label>Name </Label>
                        <Input
                            name='name'
                            type="text"
                            value={input.name}
                            onChange={handleChange}
                        ></Input>
                    </DivInput>
                    <DivError>
                        {errors.name && (<PErrors >{errors.name}</PErrors>)}
                    </DivError>
                </Contenedor>
                <Contenedor>
                    <DivInput>
                        <Label>Image </Label>
                        <Input
                            name='image'
                            type="text"
                            value={input.image}
                            onChange={handleChange}
                        ></Input>
                    </DivInput>
                    <DivError>
                        {errors.image && (<PErrors >{errors.image}</PErrors>)}
                    </DivError>
                </Contenedor>
                <Contenedor>
                    <DivInput>
                        <Label>Health </Label>
                        <Input
                            name='health'
                            type='number'
                            value={input.health}
                            onChange={handleChange}
                        ></Input>
                    </DivInput>
                    <DivError>
                        {errors.health && (<PErrors >{errors.health}</PErrors>)}
                    </DivError>
                </Contenedor>
                <Contenedor>
                    <DivInput>
                        <Label>Attack </Label>
                        <Input
                            name='attack'
                            type='number'
                            value={input.attack}
                            onChange={handleChange}
                        ></Input>
                    </DivInput>
                    <DivError>
                        {errors.attack && (<PErrors >{errors.attack}</PErrors>)}
                    </DivError>
                </Contenedor>
                <Contenedor>
                    <DivInput>
                        <Label>Speed </Label>
                        <Input
                            name='speed'
                            type='number'
                            value={input.speed}
                            onChange={handleChange}
                        ></Input>
                    </DivInput>
                    <DivError>
                        {errors.speed && (<PErrors >{errors.speed}</PErrors>)}
                    </DivError>
                </Contenedor>
                <Contenedor>
                    <DivInput>
                        <Label>Defense </Label>
                        <Input
                            name='defense'
                            type='number'
                            value={input.defense}
                            onChange={handleChange}
                        ></Input>
                    </DivInput>
                    <DivError>
                        {errors.defense && (<PErrors >{errors.defense}</PErrors>)}
                    </DivError>
                </Contenedor>
                <Type>
                    

                        <Label>
                            Types
                        </Label>
                        <ContenedorTypes>
                            {typesAll?.map((el, index) => {
                                return (<label><input type='checkbox' key={index} value={el.name} onChange={handleCheck}></input>{el.name} </label>)
                            })}
                        </ContenedorTypes>
                    
                   
                        <DivError>
                            {errors.types && (<PErrors >{errors.types}</PErrors>)}
                        </DivError>

                </Type>
                <Button type="submit" onClick={handleSubmit} disabled={Object.keys(errors).length === 0 ? false : true}>Create</Button>
            </ContenedorPrincipal>
                            <Link to='/home'><Button>Back</Button></Link>
        </Formula>
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

const DivError = styled.div`
width:150px;
@media (max-width:768px){
    font-size:10px;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    height:30px;
    width: 200px;
}
@media (max-width:425px){
    font-size:10px;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    height:30px;
    width: 200px;
}
@media (max-width:375px){
    font-size:10px;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    height:30px;
    width: 200px;
}
`

const ContenedorPrincipal = styled.div`
border:1px solid;
display:flex;
flex-direction : column;
background-color:gold;
justify-content: flex-start;
align-items:center;
width:750px;
height:700px;
gap:10px;
padding:20px;
border-radius:20px;
opacity:0.9;
@media (max-width:768px){
    display:flex;
    flex-direction:column;
    max-width:400px;
    gap:5px;
    margin-top:10px;
}
@media (max-width:425px){
    display:flex;
    flex-direction:column;
    max-width:310px;
    gap:5px;
}
@media (max-width:375px){
    display:flex;
    flex-direction:column;
    max-width:310px;
    gap:5px;
}
`

const ContenedorTypes = styled.div`
display:flex;
flex-wrap:wrap;
width:300px;
text-transform:capitalize;
margin:2px;
gap:4px;
padding:10px 12px;
border: 1px solid;
border-radius:20px;
@media (max-width:768px){
    max-width:260px;
    height:150px;
}
@media (max-width:425px){
    max-width:260px;
    height:150px;
}
@media (max-width:375px){
    max-width:260px;
    height:150px;
}
`

const Input = styled.input`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
width:300px;
height:20px;
@media (max-width:768px){
    max-width:170px;
}
@media (max-width:425px){
    max-width:170px;
}
@media (max-width:375px){
    max-width:170px;
}
`
const PErrors = styled.p`
color: red;
border:1px solid red;
border-radius:5px;
padding:5px;
font-size:15px;
@media (max-width:768px){
    font-size:10px;
    border:none;

}
@media (max-width:425px){
    font-size:10px;
    border:none;

}
@media (max-width:375px){
    font-size:10px;
    border:none;

}
`
const DivInput = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap: 20px;
width:600px;
@media (max-width:768px){
    margin-top:20px;
    height:30px;
}
@media (max-width:425px){
    margin-top:20px;
    height:30px;
}
@media (max-width:375px){
width:350px;
/* flex-direction:column; */
}
`
const Formula = styled.div`
display:flex;
align-items:center;
flex-direction:column;
height:100vh;
justify-content:center;
background-color:khaki;
@media (max-width:768px){
    display:flex;
    flex-direction:column;
    max-height:100vh;
    margin:0;
    overflow:hidden;
    /* width:375px; */
    gap:30px;
}
@media (max-width:425px){
    display:flex;
    flex-direction:column;
    max-height:100vh;
    margin:0;
    overflow:hidden;
    /* width:375px; */
    gap:30px;
}
@media (max-width:375px){
    display:flex;
    flex-direction:column;
    max-height:100vh;
    margin:0;
    overflow:hidden;
    width:375px;
    gap:30px;
}

`
const Contenedor = styled.div`
display:flex;
flex-direction:row;
height:60px;
@media (max-width:768px){
    max-width:270px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
}
@media (max-width:425px){
    max-width:270px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
}
@media (max-width:375px){
    max-width:270px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
}
`
const Label = styled.label`
width:50px;

`
const Type = styled.div`
width:750px;
display:flex;
justify-content:center;
flex-direction:row;
@media (max-width:1440px){
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-left:10px;
}
@media (max-width:768px){
    max-width:270px;
    display:flex;
    flex-direction:column;
    height:500px;
    gap:10px;
}
@media (max-width:425px){
    max-width:270px;
    display:flex;
    flex-direction:column;
    height:500px;
    gap:10px;
}

@media (max-width:375px){
    max-width:300px;
    display:flex;
    flex-direction:column;
    height:500px;
    gap:10px;
    align-items:center;
    margin:10px;
}

`
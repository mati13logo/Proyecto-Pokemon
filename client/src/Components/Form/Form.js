import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    if(input.types.length > 2) errors.types= 'A pokemon can only have two types'
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
            types:[],
        })
        history.push('/home')
    }
    console.log(input)
    return (
        <ContenedorPrincipal>
            <div>
                <label>Name </label>
                <input
                    name='name'
                    type="text"
                    value={input.name}
                    onChange={handleChange}
                ></input>
                {errors.name && (<p >{errors.name}</p>)}
            </div>
            <div>
                <label>Image </label>
                <input
                    name='image'
                    type="text"
                    value={input.image}
                    onChange={handleChange}
                ></input>
                {errors.image && (<p >{errors.image}</p>)}
            </div>
            <div>
                <label>Health </label>
                <input
                    name='health'
                    type='number'
                    value={input.health}
                    onChange={handleChange}
                ></input>
                {errors.health && (<p >{errors.health}</p>)}
            </div>
            <div>
                <label>Attack </label>
                <input
                    name='attack'
                    type='number'
                    value={input.attack}
                    onChange={handleChange}
                ></input>
                {errors.attack && (<p >{errors.attack}</p>)}
            </div>
            <div>
                <label>Speed </label>
                <input
                    name='speed'
                    type='number'
                    value={input.speed}
                    onChange={handleChange}
                ></input>
                {errors.speed && (<p >{errors.speed}</p>)}
            </div>
            <div>
                <label>Defense </label>
                <input
                    name='defense'
                    type='number'
                    value={input.defense}
                    onChange={handleChange}
                ></input>
                {errors.defense && (<p >{errors.defense}</p>)}
            </div>
            <div>
                {typesAll?.map((el, index) => {
                    return (<label><input type='checkbox' key={index} value={el.name} onChange={handleCheck}></input>{el.name} </label>)
                })}
            </div>
            <div>
                {errors.types && (<p >{errors.types}</p>)}
            </div>
            <button type="submit" onClick={handleSubmit} disabled={Object.keys(errors).length === 0 ? false : true}>Create</button>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
display:flex;
flex-direction : column;

`
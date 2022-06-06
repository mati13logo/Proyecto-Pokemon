import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, getTypes} from '../../Redux/Actions.js'


export default function Home(){
const dispatch = useDispatch()
const allPokemons = useSelector((state) => state.pokemons)
const typesAll = useSelector(state => state.types)

const [currentPage, setCurrentPage] = useState(1)
const [pokemonsPerPage, setPokemonsPerPage] = useState(12)

const indexOfLastPokemon = currentPage * pokemonsPerPage
const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

useEffect(() => {
    dispatch(getPokemons());
}, [dispatch])
useEffect(() => {
    dispatch(getTypes())
}, [dispatch])



return (
    <div>
        <h1>esto anda</h1>
        <div>
        {currentPokemons?.map((el)=>{
            <div>

            <Link to={'/home/' + el.id}>
                    <Card name={el.name} image={el.image} type={el.types}></Card>
            </Link>
            </div>
        })
        }

        </div>
    </div>
)
}
const express = require('express')
const router = express.Router()
const axios = require('axios')
const {Pokemon , Type}= require('../db')

const getInfoApi = async () => {
    const apiInfo = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')

    const apiMapInfo = apiInfo.data.results.map(pokemon =>  axios.get(pokemon.url))
    const pokemonApi = await axios.all(apiMapInfo);
    // .all es para esperar a todas las promesas y asi entregarlas todas juntas, o rechaze
    const pokemon = await pokemonApi.map(el => {
        return {
                    id: el.data.id,
                    name: el.data.name,
                    health: el.data.stats[0].base_stat,
                    attack: el.data.stats[1].base_stat,
                    defense: el.data.stats[2].base_stat,
                    speed: el.data.stats[5].base_stat,
                    height: el.data.height,
                    weight: el.data.weight,
                    image: el.data.sprites.other["official-artwork"].front_default,
                    types:
                    el.data.types.length < 2
                    ? [el.data.types[0].type.name]
                    : [el.data.types[0].type.name, el.data.types[1].type.name],
                }
            })
            return pokemon;
    }

const getDbInfo = async ()=>{
return await Pokemon.findAll({
    include:{
        model:Type,
        attributes:['name'],
        through:{
            attributes:[],
        }
    }
})
}

const getAllInfo = async ()=>{
    let apiInfo = await getInfoApi()
    let dataInfo = await getDbInfo()
    let allInfo = apiInfo.concat(dataInfo)
    return allInfo;
}




    router.get('/', async(req, res)=>{
    const name = req.query.name
    let pokemonsTotal = await getAllInfo();
    if(name){
        let pokemonName = await pokemonsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        pokemonName.length ?
            res.status(200).send(pokemonName) :
            res.status(404).send('No existe ningun pokemon con ese nombre');
    }else {
        res.status(200).send(pokemonsTotal)
    }
    })


    router.get('/:id', async(req, res)=>{
        try{
            const {id} = req.params
            let pokemonsTotal = await getAllInfo();
            if(id){
                let pokemonId = pokemonsTotal.filter(el=> el.id == id)
                pokemonId.length?
                res.status(200).json(pokemonId):
                res.status(404).send("No se encontro el Pokemon")
            }
        }
        catch(error){
            console.log(error)
        }
    })

    router.post('/', async(req, res)=>{
        try{
            const {name, image , health, attack, defense, speed, height, weight, types} = req.body
            const pokemonCreated = await Pokemon.create({
                name, image , health, attack, defense, speed, height, weight
            })
            let typeDb = await Type.findAll({
                where:{name: types}
            })
            pokemonCreated.addType(typeDb)
            res.send(pokemonCreated)
        }
        catch(error){
            console.log(error)
        }
    })
 module.exports = router

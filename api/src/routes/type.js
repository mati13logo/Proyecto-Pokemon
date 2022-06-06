const express = require('express')
const router = express.Router()
const axios = require('axios');
const { Type } = require('../db')


const getTypes= async ()=>{
    const resApi = await axios.get('https://pokeapi.co/api/v2/type')
    const typesApi = resApi.data.results.map(el =>  el.name )
    return typesApi;
}





router.get('/', async(req, res)=>{
    try {
        let typesApi= await getTypes();
        typesApi.forEach(el => {
            Type.findOrCreate({
                where: {
                    name: el 
                }  
            })
        });
        let types =  await Type.findAll()
        

        res.json(types);
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
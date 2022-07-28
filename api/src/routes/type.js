const express = require('express')
const router = express.Router()
const axios = require('axios');
const { Type } = require('../db')


const getTypes = async () => {
    const resApi = await axios.get('https://pokeapi.co/api/v2/type')
    const typesApi = resApi.data.results.map(el => el.name)
    return typesApi;
}






// router.get('/', async(req, res)=>{
//     try {
//         let typesApi= await getTypes();
//         console.log(typesApi)
//         typesApi.forEach(el => {
//             Type.findOrCreate({
//                 where: {
//                     name: el 
//                 }  
//             })
//         });
//         let types =  await Type.findAll()


//         res.json(types);
//     } catch (error) {
//         console.log(error)
//     }
// })



router.get('/', async (req, res) => {
    let typesApi = await getTypes()
        .then(resp => resp)
    typesApi?.forEach(el => {

        Type.findOrCreate({
            where: {
                name: el
            }
        })
    })
    const types = await Type.findAll()
    res.json(types)
})




module.exports = router;
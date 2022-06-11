import axios from 'axios'

export  function getPokemons(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type:'GET_POKEMONS',
            payload: json.data
        })
    }
}
export  function getTypes(){
    return async function(dispatch){
    var json = await axios.get('http://localhost:3001/type');
    return dispatch({
        type:'GET_TYPES',
        payload: json.data
    })
    }
}
export function getNamePokemon(name){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({
            type: 'GET_NAME_POKEMON',
            payload: json.data
        })
    }
}
export function postPokemon(payload){
return async function(dispatch){
    const json = await axios.post('http://localhost:3001/pokemons', payload);
    return json
}
}

export  function getDetails(id){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: 'GET_DETAILS',
            payload: json.data[0]
        })
    }
}

export function filterByType(payload){
return {
type:'FILTER_BY_TYPE',
payload
}
}

export function orderByAttack(payload){
return{
    type:'ORDER_BY_ATTACK',
    payload
}
}
export function orderByName(payload){
    return{
        type:'ORDER_BY_NAME',
        payload
    }
}

export function orderByCreated(payload){
return{
    type:'ORDER_BY_CREATED',
    payload
}
}
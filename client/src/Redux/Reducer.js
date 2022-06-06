const initialState= {
pokemons : [],
types: [],
detail: [],
}

export function rootReducer(state= initialState, action){
switch(action.payload){
    case 'GET_POKEMONS':
    return{
        ...state,
        pokemons: action.payload
    }
    case 'GET_TYPES':
        return {
        ...state,
        types: action.payload
        }
    case 'POST_POKEMON':
        return{
            ...state
        }
    case 'GET_NAME_POKEMON':
        return{
            ...state,
            pokemons:action.payload
        }
    case 'GET_DATAIL':
        return{
            ...state,
            detail:action.payload
        }

    default: return state
}
}
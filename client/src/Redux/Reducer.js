const initialState= {
pokemons : [],
allPokemons: [],
types: [],
detail: [],
}

export function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons:action.payload
            }
            case 'GET_TYPES':
        return {
        ...state,
        types: action.payload
        }
    case 'POST_POKEMON':
        return{
            ...state,
        }
    case 'GET_NAME_POKEMON':
        return{
            ...state,
            pokemons:action.payload
        }
    case 'GET_DETAILS':
        return{
            ...state,
            detail:action.payload
        }
    case 'FILTER_BY_TYPE':
        const pokemonsAll = state.allPokemons;
        const typeFilter = action.payload === 'all' ? pokemonsAll: pokemonsAll.filter(el => el.types.some(el => el.name ? el.name === action.payload : el === action.payload))
        return{
            ...state,
            pokemons: typeFilter
        }
    
    case 'ORDER_BY_ATTACK':
        let sortAttack = action.payload === 'min' ?
                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1;
                    }
                    if (b.attack > a.attack) {
                        return -1;
                    }
                    return 0
                }) :
                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return -1;
                    }
                    if (b.attack > a.attack) {
                        return 1;
                    }
                    return 0
                })
        return{
            ...state,
            pokemons: sortAttack,
        }
    case 'ORDER_BY_NAME':
        let sortOrder = state.pokemons
        sortOrder = sortOrder.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return action.payload === "asc" ? -1 : 1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return action.payload === "asc" ? 1 : -1;
            }
            return 0;
        });

        return {
            ...state,
            pokemons: sortOrder
        }
    case 'ORDER_BY_CREATED':
        let orderCreated = state.allPokemons;
        orderCreated = action.payload === 'api'? orderCreated.filter(el=> !el.createdByDb): action.payload === 'db'? orderCreated.filter(el=> el.createdByDb === true) : state.allPokemons
        return {
            ...state,
            pokemons: orderCreated
        }

    default: return state
}
}

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: [],
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'POST_POKEMON':
            return {
                ...state,
            }
        case 'GET_NAME_POKEMON':
            return {
                ...state,
                pokemons: action.payload
            }
        case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload
            }
        case 'FILTER_BY_TYPE':
            const pokemonsAll = state.allPokemons;
            let typeFilter =
                action.payload === "all"
                    ? pokemonsAll
                    : pokemonsAll.filter(
                        (el) =>
                            el.types?.includes(action.payload) ||
                            el.types?.map((el) => (el.name)).includes(action.payload)
                    );

            typeFilter.length === 0 &&
                window.alert("There is no such pokemon");
            return {
                ...state,
                pokemons: typeFilter.length > 0 ? typeFilter : pokemonsAll
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
            return {
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
            let allPokemons = state.allPokemons;
            const orderCreated = action.payload === 'db' ? allPokemons.filter(el => el.createdByDb) : allPokemons.filter(el => !el.createdByDb)
            return {
                ...state,
                pokemons: action.payload === 'all' ? state.allPokemons : orderCreated
            }

        default: return state
    }
}
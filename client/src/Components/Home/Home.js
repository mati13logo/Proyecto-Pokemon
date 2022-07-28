import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux'
import { orderByCreated, filterByType, getPokemons, getTypes, orderByAttack, orderByName } from '../../Redux/Actions.js'
import styled from 'styled-components'
import Paginado from "../Paginado/Paginado";
import SearchBar from "../Searchbar/SearchBar.js";
import CardDetail from "../CardDetail/CardDetail.js";
import Loading from "../Loading/Loading";
import Cargando from "../Cargando/Cargando";

export default function Home() {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    const typesAll = useSelector(state => state.types)
    const [oreden, setOrden] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)

    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    const [detail, setDetail] = useState({
        name: '',
        image: '',
        health: 0,
        defense: 0,
        attack: 0,
        speed: 0,
        type: [],
    })

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes())
    }, [dispatch])


    useEffect(() => {

        setDetail({
            key: allPokemons[0]?.id,
            name: allPokemons[0]?.name,
            image: allPokemons[0]?.image,
            type: allPokemons[0]?.types,
            health: allPokemons[0]?.health,
            attack: allPokemons[0]?.attack,
            defense: allPokemons[0]?.defense,
            speed: allPokemons[0]?.speed,
        });
    }, [allPokemons, dispatch]);


    function handleFilterType(e) {
        e.preventDefault();
        dispatch(filterByType(e.target.value))
        setCurrentPage(1);
    }
    function handleOrderByAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1);
        setOrden(e.target.value)
    }
    function handleOrderName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(e.target.value)
    }
    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(orderByCreated(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }
    


    return (
        <ContenedorPrincipal>
            <Nav>
                <DivSearch>
                    <SearchBar setCurrentPage={setCurrentPage}></SearchBar>
                    <Link to='/create'>
                        <Button > Create Pokemon</Button>
                    </Link>
                </DivSearch>
            </Nav>
            <ContenedorDeFiltros>
                <Select onChange={handleOrderName} defaultValue='todo'>
                    <option disabled value='todo'>Order</option>
                    <option value='asc'>A-Z</option>
                    <option value='des'>Z-A</option>
                </Select>
                <Select onChange={(e) => { handleOrderByAttack(e) }} defaultValue='attack'>
                    <option disabled value='attack'>Attack</option>
                    <option value='max'>Max</option>
                    <option value='min'>Min</option>
                </Select>
                <Select onChange={handleFilterCreated} defaultValue='created'>
                    <option disabled value='created'>Created</option>
                    <option value='all'>All</option>
                    <option value='api'>Api</option>
                    <option value='db'>DB</option>
                </Select>
                <Select onChange={(e) => { handleFilterType(e) }} defaultValue='all'>
                    <option value='all'> All</option>
                    {
                        typesAll?.map((el) => {
                            return (
                                <option key={el.id} value={el.name.toLowerCase()}> {el.name.toLowerCase()}</option>
                            )
                        })
                    }
                </Select>
            </ContenedorDeFiltros>
            {allPokemons.length > 0 ?
                <CardConteiner>
                    <CardDetail
                        name={detail.name}
                        image={detail.image}
                        health={detail.health}
                        defense={detail.defense}
                        attack={detail.attack}
                        speed={detail.speed}
                        type={detail.type}
                    />


                    <Cards>
                        {currentPokemons.map((el, index) => {
                            return (
                                <div>
                                    <Links to={'/home/' + el.id}>
                                        <Card key={el + index}
                                            name={el.name}
                                            image={el.image}
                                            type={el.types}
                                            setDetail={setDetail}
                                            health={el.health}
                                            defense={el.defense}
                                            attack={el.attack}
                                            speed={el.speed}
                                        />
                                    </Links>
                                </div>
                            )
                        })
                        }
                    </Cards>
                </CardConteiner>
                : <Cargando />
            }
            <DivPaginado>

                <Paginado
                    pokemonsPerPage={pokemonsPerPage}
                    allPokemons={allPokemons.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </DivPaginado>

        </ContenedorPrincipal>
    )
}
const Select = styled.select`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
text-transform:capitalize;
@media (max-width:1440px){

}
@media (max-width:768px){
    padding:1px;
    font-size:0.9rem;

}
@media (max-width:425px){
    padding:1px;
    font-size:0.9rem;

}
@media (max-width:375px){
    padding:1px;
    font-size:0.9rem;
    
}
`
const ContenedorDeFiltros = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:khaki;
padding:10px;
@media (max-width:1440px){

}
@media (max-width:768px){
    display:flex;
    justify-content:space-around;

}
@media (max-width:425px){
    display:flex;
    justify-content:space-around;

}
@media (max-width:375px){
    display:flex;
    justify-content:space-around;

}
`



const DivSearch = styled.div`
display:flex;
flex-direction: row-reverse;
@media (max-width:1440px){
    
}
@media (max-width:768px){
    display:flex;
    flex-direction:row;
    width:300px;
    justify-content:center;
}
@media (max-width:425px){
    display:flex;
    flex-direction:row;
    width:300px;
    justify-content:center;
}
@media (max-width:375px){
    display:flex;
    flex-direction:row;
    width:300px;
}
`

const Button = styled.button`
background: white;
cursor: pointer;
font-size:1em;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
@media (max-width:1440px){
    padding:5px;
    font-size:0.9rem;
}
@media (max-width:768px){
    padding:4px;
    font-size:0.9rem;
}
@media (max-width:425px){
    padding:4px;
    font-size:0.9rem;
}
@media (max-width:375px){
    padding:4px;
    font-size:0.9rem;
}
`





export const ContenedorPrincipal = styled.div`
display:grid;   
height:100%;
grid-template-rows:5vh 5vh 85vh 5vh;
/* background-color:khaki; */
@media (max-width:1440px){
    display:grid;   
height:100%;
}
@media (max-width:768px){
    display:flex;
    flex-direction:column;
    height:100vh;
   
}
@media (max-width:425px){
    display:flex;
    flex-direction:column;
    height:100vh;
   
}
@media (max-width:375px){
    display:flex;
    flex-direction:column;
    height:100vh;
   
}
`



export const Nav = styled.div`
background-color:darkcyan;
display:flex;
flex-direction:column;
padding:10px;
margin: 0;
@media (max-width:1440px){
    
}
@media (max-width:768px){
    display:flex;
    flex-direction:row;
    justify-content:center;
}
@media (max-width:425px){
    display:flex;
    flex-direction:row;
    justify-content:center;
}
@media (max-width:375px){
    display:flex;
    flex-direction:row;
}
`

export const CardConteiner = styled.div`
background-color:khaki;
    display: grid;
    grid-template-columns: 30% 70%;
    justify-content: space-around;
    align-items: center;
    justify-items:center;
 @media (max-width:1440px){
    display: grid;
    /* grid-template-columns:20% 80%; */
    overflow:auto;
    /* justify-content: space-around; */
    /* align-items: center; */
    /* justify-items:center; */
    

}
@media (max-width:768px){
    display:flex;
    min-height: 82vh;
    overflow:auto;
    width:100%;
    

}

    @media (max-width:425px){
    display:flex;
    min-height: 82vh;
    overflow:auto;
    width:100%;
    

}
    @media (max-width:375px){
    display:flex;
    min-height: 82vh;
    overflow:auto;
    width:100%;
    

}
`

export const Cards = styled.div`
display:grid;
grid-template-columns: repeat(3, auto);
gap:10px;
height: 80vh;
padding: 10px;
opacity:none;
@media (max-width:1440px){
display:grid;
grid-template-columns: repeat(3, auto);
gap:10px;
height: 80vh;
padding: 10px;
opacity:none;
}
@media (max-width:768px){
    display:flex;
    flex-direction:column;
    height:100%;
}
@media (max-width:425px){
    display:flex;
    flex-direction:column;
    height:100%;
}
@media (max-width:375px){
    display:flex;
    flex-direction:column;
    height:100%;
}

`
const Links = styled(Link)`
text-decoration:none;

&:hover{
    border-bottom: 1px solid red;
}
`
export const DivPaginado = styled.div`

`
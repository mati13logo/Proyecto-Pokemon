import React from "react";
import styled from "styled-components";


export default function Paginado({ pokemonsPerPage, currentPage, setCurrentPage, allPokemons}) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
        pageNumber.push(i)
    }
    const paginado1 = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    function nextPage(e) {
        e.preventDefault()
        setCurrentPage(currentPage + 1)
    }
    function prevPage(e) {
        e.preventDefault()
        setCurrentPage(currentPage - 1)
    }

    return (
        <NavPaginado>
            <Button disabled={currentPage === 1} onClick={(e) => prevPage(e)}>Prev</Button>
                {pageNumber && pageNumber.map(number => {
                    return (
                        <Li className="number" key={number}>
                            <Button className="prueba" onClick={() => paginado1(number)}>{number}</Button>
                        </Li>
                    )
                })}
            
            <Button disabled={currentPage > allPokemons / 12} onClick={(e) => nextPage(e)} >Next</Button>
        </NavPaginado>
    )
}

const Button = styled.button`
background: white;
cursor: pointer;
font-size:1em;
margin:10px;
padding:4px 12px;
border:1px solid #09f;
border-radius:5px;
`
const NavPaginado = styled.nav`
display:flex;
justify-content:center;
background:darkcyan;
padding:2.3px;
`
const Li = styled.li`
list-style: none;
`
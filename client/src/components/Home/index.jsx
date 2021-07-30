import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters, byStatus, byCreated, byOrder } from '../../actions/index.jsx';
import Card from './Card/index.jsx';
import Paginado from './Paginado/index.jsx';
import SearchBar from './SearchBar/index.jsx';
import './home.css'


export default function Home() {

    const dispatch = useDispatch();
    const allCharacters = useSelector((e) => e.characters);
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage, setCharactersPerPage] = useState(6)
    const [order, setOrder] = useState('')
    const indexLastCharacter = currentPage * charactersPerPage
    const indexFirstCharacter = indexLastCharacter - charactersPerPage
    const allPagCharacters = allCharacters.slice(indexFirstCharacter, indexLastCharacter)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getCharacters());
    },[dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCharacters());
    };

    function handleStatus(e) {
        dispatch(byStatus(e.target.value))
    };

    function handleOrder(e) {
        e.preventDefault();
        dispatch(byOrder(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    };

    function handleCreated(e) {
        dispatch(byCreated(e.target.value))
    };

    return (
        <div className='all'>
            <Link to='/character'>Crear Personaje</Link>
            <h1>AGUANTE BREAKING BAD</h1>
            <button onClick={(e) => {handleClick(e)}} >Volver a cargar todos los personajes</button>
            <div>
                <select onChange={e => handleStatus(e)}>
                    <option value='All'>All</option>
                    <option value='Alive'>Alive</option>
                    <option value='Deceased'>Deceased</option>
                    <option value='Unknown'>Unknown</option>
                    <option value='Presumed dead'>Presumed Dead</option>
                </select>
                <select onChange={e => handleCreated(e)}>
                    <option value="All">All</option>
                    <option value="Created">My Characters</option>
                    <option value="Api">Api Characters</option>
                </select>
            </div>
            <div>
                <select onChange={e => handleOrder(e)}>
                    <option value='Asc'>Asc</option>
                    <option value='Desc'>Desc</option>
                </select>
                <div>
                    <Paginado 
                        charactersPerPage={charactersPerPage}
                        allCharacters={allCharacters.length}
                        paginado={paginado}
                    ></Paginado>
                    <SearchBar></SearchBar>
                </div>
                </div>
                {
                allPagCharacters?.map((i) => {
                    return (
                        <div>
                            <Link to={'/details/' + i.id}>
                                <Card
                                    name={i.name}
                                    image={i.image}
                                    nickName={i.nickName} 
                                    key={i.id}
                                ></Card>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
};
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../../actions/index.jsx';

function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getByName(name))
    }

    return(
        <div>
            <input type='text' placeholder='Buscar...'
            onChange={e => handleChange(e)}></input>
            <button type='submit' onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
};

export default SearchBar;
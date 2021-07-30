import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postCharacter, getOccupations } from '../../actions/index.jsx';
import { useDispatch, useSelector } from 'react-redux';

function AddCharacter() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const occupations = useSelector(e => e.occupations)
    const [input, setInput] = useState({
        name: '',
        nickName: '',
        birthday: '',
        status: '',
        occupation: []
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    function handleCheck(e) {
        if(e.target.checked) {
            setInput({
                ...input,
                status: e.target.value
            });
        };
    };

    function handleSelect(e) {
        setInput({
            ...input,
            occupation: [
                ...input.occupation,
                e.target.value
            ]
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postCharacter(input))
        alert("Personaje creado!")
        setInput({
            name: '',
            nickName: '',
            birthday: '',
            status: '',
            occupation: []
        });
        history.push('/characters')
    };

    useEffect(() => {
        dispatch(getOccupations());
    }, [dispatch])

    return(
        <div>
            <Link to='/characters'>
                <button>Volver</button>
            </Link>
            <h1>Crea tu personaje</h1>
            <form onSubmit={e => {handleSubmit(e)}}>
                <div>
                    <label>Nombre:</label>
                    <input type='text' value={input.name} name='name'
                     onChange={e => handleChange(e)}>  
                    </input>
                </div>
                <div>
                    <label>nickName:</label>
                    <input type='text' value={input.nickName} name='nickName'
                     onChange={e => handleChange(e)}>  
                    </input>
                </div>
                <div>
                    <label>BirthDay:</label>
                    <input type='text' value={input.birthday} name='birthday'
                     onChange={e => handleChange(e)}>  
                    </input>
                </div>
                <div>
                    <label>Image:</label>
                    <input type='text' value={input.image} name='image'
                     onChange={e => handleChange(e)}>  
                    </input>
                </div>
                <div>
                    <h3>Staus</h3>
                </div>
                <div>
                    <label>
                        <input type='checkbox' name='Alive' value='Alive'
                        onChange={e => handleCheck(e)}>
                    </input>Alive</label>
                    <label>
                        <input type='checkbox' name='Deceased' value='Deceased'
                        onChange={e => handleCheck(e)}>
                    </input>Deceased</label>
                    <label>
                        <input type='checkbox' name='Unknown' value='Unknown'
                        onChange={e => handleCheck(e)}>
                    </input>Unknown</label>
                </div>
                <select onChange={e => handleSelect(e)}>
                    {
                        occupations.map(i => (
                            <option value={i.name}>{i.name}</option>
                        ))
                    }
                    <ul>
                        <li>{input.occupation.map(i => i + ", ")}</li>
                    </ul>
                </select>
                <button type='submit'>Crear Personaje</button>
            </form>
        </div>
    );
};

export default AddCharacter;
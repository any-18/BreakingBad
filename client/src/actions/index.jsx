import axios from 'axios';

export const CHARACTERS = "CHARACTERS";
export const BYNAME = "BYNAME";
export const DETAILS = "DETAILS";
export const STATUS = "STATUS";
export const BYCREATED = "BYCREATED";
export const ORDER = 'ORDER';
export const OCCUPATION = "OCCUPATION";
export const POST = "POST";



export function getCharacters() {
    return async function(dispatch) {
        const res = await axios.get('http://localhost:3001/characters')
        return dispatch({
            type: CHARACTERS,
            payload: res.data
        }); 
    };
};


export function getByName(name) {
    return async function(dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/characters?name=${name}`);
            return dispatch({
                type: BYNAME,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
        };
    };
};


export function getDetails(id) {
    return async function(dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/characters/${id}`);
            return dispatch({
                type: DETAILS,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
        };
    };
};


export function byStatus(payload) {
    return {
        type: STATUS,
        payload
    };
};


export function byCreated(payload) {
    return {
        type: BYCREATED,
        payload
    };
};


export function byOrder(payload) {
    return {
        type: ORDER,
        payload
    }
}


export function getOccupations() {
    return async function(dispatch) {
        const res = await axios.get('localhost:3001/occupations')
        return dispatch({
            type: OCCUPATION,
            payload: res.data
        });
    };
};


export function postCharacter(payload) {
    return async function(dispatch) {
        const res = await axios.post('http://localhost:3001/character', payload)
        return {
            type: POST,
            res
        }
    };
};
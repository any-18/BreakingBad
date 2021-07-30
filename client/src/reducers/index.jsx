import { CHARACTERS } from "../actions/index.jsx";
import { BYNAME } from "../actions/index.jsx";
import { DETAILS } from "../actions/index.jsx";
import { STATUS } from "../actions/index.jsx";
import { BYCREATED } from "../actions/index.jsx";
import { ORDER } from "../actions/index.jsx";
import { OCCUPATION } from "../actions/index.jsx";
import { POST } from "../actions/index.jsx";

const initialState = {
    characters: [],
    allCharacters: [],
    occupations: [], 
    details: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                allCharacters: action.payload
            }
        case BYNAME:
            return {
                ...state,
                characters: action.payload
            }
        case DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case STATUS:
            const allCharacters = state.allCharacters;
            const statusFilter = action.payload === 'All' ? allCharacters :
            allCharacters.filter(i => i.status === action.payload)
            return {
                ...state,
                characters: statusFilter
            }  
        case BYCREATED:
            const createdFilter = action.payload === 'Created' ? state.allCharacters.filter(i => i.createdInDb) : state.allCharacters.filter(i => !i.createdInDb)
            return {
                ...state,
                characters: action.payload === 'All' ? state.allCharacters : createdFilter
            }
        case ORDER:
            const orderName = action.payload === 'Asc' ?
            state.characters.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
            state.characters.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                characters: orderName
            }
        case OCCUPATION:
            return {
                ...state,
                occupations: action.payload
            }    
        case POST:
            return {
                ...state
            }
        default:
        return state;    
    };
};

export default rootReducer;
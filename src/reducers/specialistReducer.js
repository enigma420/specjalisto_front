import {GET_SPECIALIST , GET_SPECIALISTS} from "../actions/types";

const initialState = {
    specialists: [],
    specialist: {}
};

export default function (state = initialState,action) {
    switch (action.type) {
        case GET_SPECIALIST:
            return {
                ...state,
                specialist: action.payload
            };
        case GET_SPECIALISTS:
            return {
                ...state,
                specialists: action.payload
            };
        default:
            return state;
    }
}
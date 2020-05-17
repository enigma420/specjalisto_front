import {GET_OPINION,GET_OPINIONS,DELETE_OPINION} from "../actions/types";

const initialState = {
    opinions: [],
    opinion: {}
};

export default function (state = initialState,action) {
    switch (action.type) {
        case GET_OPINION:
            return {
              ...state,
              opinion: action.payload
            };

        case GET_OPINIONS:
            return {
                ...state,
                opinions: action.payload
            };

        case DELETE_OPINION:
            return {
                ...state,
                opinions: state.opinions.filter(
                    opinion => opinion.opinionId !== action.payload
                )
            };

        default:
            return state;
    }
}
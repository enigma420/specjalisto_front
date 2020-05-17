import {GET_CUSTOMER , GET_CUSTOMERS} from "../actions/types";

const initialState = {
    customers: [],
    customer: {}
};

export default function (state = initialState,action) {
    switch (action.type) {
        case GET_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            };
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            };
        default:
            return state;
    }
}
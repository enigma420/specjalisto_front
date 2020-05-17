import { GET_COMMISSION,GET_COMMISSIONS,DELETE_COMMISSION} from "../actions/types";

const initialState = {
    commissions: [],
    comission:{}
};

export default function (state = initialState,action) {

    switch (action.type) {
        case GET_COMMISSION:
            return {
              ...state,
              comission: action.payload
            };

        case GET_COMMISSIONS:
            return {
              ...state,
              commissions: action.payload
            };

        case DELETE_COMMISSION:
            return {
              ...state,
              commissions: state.commissions.filter(
                  commission => commission.commissionId !== action.payload
              )
            };

        default:
            return state;
    }

}
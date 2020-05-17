import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import commissionReducer from "./commissionReducer";
import opinionReducer from "./opinionReducer";
import securityReducer from "./securityReducer";
import customerReducer from "./customerReducer";
import specialistReducer from "./specialistReducer";


export default combineReducers({
    errors: errorReducer,
    commission: commissionReducer,
    opinion: opinionReducer,
    security: securityReducer,
    customer: customerReducer,
    specialist: specialistReducer
})
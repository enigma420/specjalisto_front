import axios from "axios";
import {GET_CUSTOMERS, GET_ERRORS} from "./types";



export const getCustomers = (nickname,mail) => async dispatch => {
    try{
        const res = await axios.get("/api/customer/getAll",{
            params:{
                nickname: nickname,
                mail: mail
            }
        });
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data
        })
    }catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};


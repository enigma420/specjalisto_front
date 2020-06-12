import axios from "axios";
import {GET_ERRORS, GET_SPECIALISTS} from "./types";

export const getSpecialists = (profession,province,city) => async dispatch => {
    try{
        const res = await axios.get("http://localhost:8080/api/specialist/get",{
            params:{
                profession: profession,
                province: province,
                city: city
            }
        });
        dispatch({
            type: GET_SPECIALISTS,
            payload: res.data
        })
    }catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};
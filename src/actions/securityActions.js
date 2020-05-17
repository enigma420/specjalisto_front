import axios from "axios";
import {GET_ERRORS,SET_CURRENT_USER} from "./types";
import setJwtToken from "../security/setJwtToken";
import jwt_decode from "jwt-decode";

export const registerSpecialist = (newSpecialist, history) => async dispatch => {
    try{
        await axios.post("/api/auth/register/specialist",newSpecialist);
        // history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const registerCustomer = (newCustomer, history) => async dispatch => {
    try{
        await axios.post("/api/auth/register/customer",newCustomer);
        // history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const confirmConfirmationRegisterSpecialist = () => async dispatch => {
    try{
        await axios.post("/api/auth/register/specialist/confirm");
        // history.push("/login");
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const confirmConfirmationRegisterCustomer = () => async dispatch => {
    try{
        await axios.post("/api/auth/register/customer/confirm");
        // history.push("/login");
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const login = LoginRequest => async dispatch => {
    try{
        /*POST => Login Request*/
        const res = await axios.post("/api/auth/login", LoginRequest);
        /*Extract token from res.data*/
        const{token} = res.data;
        /*Store the token in the localStorage*/
        localStorage.setItem("jwtToken",token);
        /*Set our token in header*/
        setJwtToken(token);
        /*decode token on React*/
        const decoded = jwt_decode(token);
        /*dispatch to our securityReducer*/
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }
};


export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJwtToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
};
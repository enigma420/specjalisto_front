import axios from "axios";
import {GET_ERRORS,GET_OPINION,GET_OPINIONS,DELETE_OPINION} from "./types";

export const createOpinion = (opinion,history) => async dispatch => {

    try {
        await axios.post("/api/opinion/add",opinion);
        history.push("/"); //Set output endpoint
        dispatch({
            type:GET_ERRORS,
            payload:{}
        });
    }catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const editOpinion = (opinion,history) => async dispatch => {

    try{
        await axios.post("/api/opinion/edit",opinion);
        history.push("/"); //Set output endpoint
        dispatch({
            type:GET_ERRORS,
            payload: {}
        });
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const getOpinion = (opinionId,history) => async dispatch =>{

    try {
        const res = await axios.get(`/api/opinion/get/${opinionId}`);
        dispatch({
            type: GET_OPINION,
            payload: res.data
        })
    }catch (err) {
        history.push("/"); //Set output endpoint
    }
};

export const getOpinions = () => async dispatch => {
    const res = await axios.get("/api/opinion/getAll");
    dispatch({
        type:GET_OPINIONS,
        payload: res.data
    })
};

export const deleteOpinion = (opinionId) => async dispatch => {
    if(window.confirm(
        "Czy jesteś pewien? Usunięcie skutkuje trwałym zniknięciem zlecenia"
    )){
        await axios.delete(`/api/opinion/delete/${opinionId}`);
        dispatch({
            type: DELETE_OPINION,
            payload: opinionId
        })
    }
};
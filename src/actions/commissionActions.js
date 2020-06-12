import axios from "axios";
import {GET_ERRORS, GET_COMMISSION, GET_COMMISSIONS, DELETE_COMMISSION, SEARCH_COMMISSIONS} from "./types";

export const create = (commission, history) => async dispatch => {

    try {
        await axios.post("http://localhost:8080/api/commission/add", commission);
        history.push("/commissionDashboard"); //Set output endpoint
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
export const editCommission = (commission, history) => async dispatch => {

    try {
        await axios.post("http://localhost:8080/api/commission/edit", commission);
        history.push("/"); //Set output endpoint
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const getCommission = (commissionId, history) => async dispatch => {

    try {
        const res = await axios.get(`http://localhost:8080/api/commission/get/${commissionId}`);
        dispatch({
            type: GET_COMMISSION,
            payload: res.data
        })
    } catch (err) {
        history.push("/"); //Set output endpoint
    }
};

export const getCommissions = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/commission/getAll");
    dispatch({
        type: GET_COMMISSIONS,
        payload: res.data
    })
};

export const deleteCommission = (commissionId) => async dispatch => {
    if (window.confirm(
        "Czy jesteś pewien? Usunięcie skutkuje trwałym zniknięciem zlecenia"
    )) {
        await axios.delete(`http://localhost:8080/api/commission/delete/${commissionId}`);
        dispatch({
            type: DELETE_COMMISSION,
            payload: commissionId
        })
    }
};

// export const searchCommissions = (profession,city) => async dispatch => {
//   try {
//     const res = await axios.get("/api/commission/search", {
//         params: {
//             profession: profession,
//             city: city
//         }
//     });
//       dispatch({
//           type:SEARCH_COMMISSIONS,
//           payload:res.data
//       })
//   }catch (err) {
//       history.push("/");
//   }
// };
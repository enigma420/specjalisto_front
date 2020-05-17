import axios from "axios";
import {GET_ERRORS,GET_COMMISSION,GET_COMMISSIONS,DELETE_COMMISSION,SEARCH_COMMISSIONS} from "./types";
import http from "../http-common";

const createCommission = (commission,history) => async dispatch => {

    try {
        await http.post("/commission/add",commission);
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
//
// export const editCommission = (commission,history) => async dispatch => {
//
//     try{
//         await axios.post("/api/commission/edit",commission);
//         history.push("/"); //Set output endpoint
//         dispatch({
//             type:GET_ERRORS,
//             payload: {}
//         });
//     }catch (err) {
//         dispatch({
//             type:GET_ERRORS,
//             payload: err.response.data
//         })
//     }
// };
//
// export const getCommission = (commissionId,history) => async dispatch =>{
//
//     try {
//     const res = await axios.get(`/api/commission/get/${commissionId}`);
//     dispatch({
//         type: GET_COMMISSION,
//         payload: res.data
//     })
//     }catch (err) {
//         history.push("/"); //Set output endpoint
//     }
// };
//
// export const getCommissions = () => async dispatch => {
//     const res = await axios.get("/api/commission/getAll");
//     dispatch({
//         type:GET_COMMISSIONS,
//         payload: res.data
//     })
// };
//
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
//
// export const deleteCommission = (commissionId) => async dispatch => {
//     if(window.confirm(
//         "Czy jesteś pewien? Usunięcie skutkuje trwałym zniknięciem zlecenia"
//     )){
//         await axios.delete(`/api/commission/delete/${commissionId}`);
//         dispatch({
//             type:DELETE_COMMISSION,
//             payload: commissionId
//         })
//     }
// };

export default {
    createCommission
}
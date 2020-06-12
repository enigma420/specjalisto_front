import http from "../http/http-common";
import setJwtToken from "../security/setJwtToken";
import jwt_decode from "jwt-decode"

const create = loginRequest => {
    const res = http.post("/auth/login",loginRequest);
    const{token} = res.data;
    localStorage.setItem("jwtToken",token);
    setJwtToken(token);
    const decoded = jwt_decode(token);
};



export default {

    create

};
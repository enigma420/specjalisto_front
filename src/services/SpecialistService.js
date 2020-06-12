import http from "../http/http-common";

const create = data => {
    return http.post("/auth/register/specialist",data);
};



export default {

    create

};
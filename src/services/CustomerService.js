import http from "../http/http-common";

export const create = data => {
    return http.post("/auth/register/customer", data);
};



export default {

    create

};
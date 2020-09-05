
import http from "../http-common";

const create = data => {
    return http.post("/commission/add", data);
};

export default {

    create,

};
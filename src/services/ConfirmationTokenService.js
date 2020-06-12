import http from '../http/http-commons'

const create = (token,specialistOrCustomer) => {
    return http.post("/auth/register/" + specialistOrCustomer +"/confirm", null , {
        params: {
            token
        }
    });
};

export default {
    create
}
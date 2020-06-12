import React from "react"
import {Link} from "react-router-dom";

const CreateOpinionButton = () => {
    return (
        <>
            <Link to="/createOpinion" className="btn btn-lg btn-primary" >
                <i className="fas fa-plus-circle">
                    Wystaw Opinie
                </i>
            </Link>
        </>
    )
};


export default CreateOpinionButton;
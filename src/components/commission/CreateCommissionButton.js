import React from "react"
import {Link} from "react-router-dom";

const CreateCommissionButton = () => {
    return (
        <>
            <Link to="/createCommission" className="btn btn-lg btn-primary">
                <i className="fas fa-plus-circle">
                    Create Commission
                </i>
            </Link>
            </>
    )
};


export default CreateCommissionButton;
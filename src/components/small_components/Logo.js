import React from 'react';
import headerIcon from "../../specjalist-icons.png";
import IconButton from "@material-ui/core/IconButton";

export default function Logo() {
    return (
        <>
            <div>
                <img src={headerIcon} alt="Specjalisto_Logo"/>
            </div>
            <a href="/"><img src="https://fontmeme.com/permalink/200420/c52ff2650cd9f23a8c647cf9fa2fa37c.png" alt="Specjalisto_Logo_Name"/></a>
        </>
    );
}

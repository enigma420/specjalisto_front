import React from 'react';
import FormControl from "@material-ui/core/FormControl/index";
import InputLabel from "@material-ui/core/InputLabel/index";
import TextField from "@material-ui/core/TextField/index";
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function ProfessionSelect() {
    const classes = useStyles();
        return (
            <div className="form-group">
                <label htmlFor="exampleInput">Zawód</label>
                <input type="email" id="exampleInput" aria-label="Zawód" className="form-control" />
            </div>
        );
}

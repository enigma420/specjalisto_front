import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

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

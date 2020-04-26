import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function CitySelect() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInput">Miasto</label>
                <input type="email" id="exampleInput" aria-label="Zawód" className="form-control" />
            </div>
        );
}
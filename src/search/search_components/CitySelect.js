import React from 'react';
import TextField from "@material-ui/core/TextField/index";
import Grid from "@material-ui/core/Grid/index";
import InputLabel from "@material-ui/core/InputLabel/index";
import FormControl from "@material-ui/core/FormControl/index";
import Select from "@material-ui/core/Select/index";

export default function CitySelect() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInput">Miasto</label>
                <input  id="profession" aria-label="Profession" className="form-control" />
            </div>
        );
}
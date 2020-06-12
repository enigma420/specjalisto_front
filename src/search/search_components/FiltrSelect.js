import React, {Component} from 'react';
import InputLabel from "@material-ui/core/InputLabel/index";
import Select from "@material-ui/core/Select/index";
import FormControl from "@material-ui/core/FormControl/index";
import Typography from "@material-ui/core/Typography/index";
import {MDBBtn} from "mdbreact";

export default function FiltrSelect() {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Filtr</InputLabel>
            <Select
                autoWidth
                id="demo-customized-select-native"
                label="Filtr"
                style={{width: '320px', height: '55px'}}>
                <option value="1">Od Najlepszej Oceny</option>
                <option value="2">Od Najgorszej Oceny</option>
                <option value="3">Od Największej Doświadczenia</option>
                <option value="4">Od Najmniejszego Doświadczenia</option>
            </Select>

            <MDBBtn color="red" size="sm" style={{borderRadius: '8px'}}>
                <Typography variant="h6" style={{fontWeight: 'bolder'}}>
                    Filtruj
                </Typography>
            </MDBBtn>


        </FormControl>
    );
}

import React, {Component} from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

export default function ProvinceSelect() {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Województwo</InputLabel>
            <Select
                autoWidth
                id="demo-customized-select-native"
                label="Województwo"
                style={{width:'180px', height:'55px'}}>
                <option value="1">Dolnośląskie</option>
                <option value="2">Kujawsko-Pomorskie</option>
                <option value="3">Lubelskie</option>
                <option value="4">Lubuskie</option>
                <option value="5">Łódzkie</option>
                <option value="6">Małopolskie</option>
                <option value="7">Mazowieckie</option>
                <option value="8">Opolskie</option>
                <option value="9">Podkarpackie</option>
                <option value="10">Podlaskie</option>
                <option value="11">Pomorskie</option>
                <option value="12">Śląskie</option>
                <option value="13">Świętokrzyskie</option>
                <option value="14">Warmińsko-Mazurskie</option>
                <option value="15">Wielkopolskie</option>
                <option value="16">Zachodniopomorskie</option>
            </Select>
        </FormControl>

    );
}

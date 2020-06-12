import React, {Component} from 'react';
import InputLabel from "@material-ui/core/InputLabel/index";
import Select from "@material-ui/core/Select/index";
import FormControl from "@material-ui/core/FormControl/index";
import MenuItem from "@material-ui/core/MenuItem/index";

export default function ProvinceSelect() {
    return (
        <FormControl variant="outlined">
            <InputLabel>Województwo</InputLabel>
            <Select
                variant="outlined"
                required
                fullWidth
                name="province"
                autoWidth
                label="Województwo"
                style={{width:'180px', height:'50px'}}>
                <MenuItem value="DOLNOSLASKIE">Dolnośląskie</MenuItem>
                <MenuItem value="KUJAWSKO_POMORSKIE">Kujawsko-Pomorskie</MenuItem>
                <MenuItem value="LUBELSKIE">Lubelskie</MenuItem>
                <MenuItem value="LUBUSKIE">Lubuskie</MenuItem>
                <MenuItem value="LODZKIE">Łódzkie</MenuItem>
                <MenuItem value="MALOPOLSKIE">Małopolskie</MenuItem>
                <MenuItem value="MAZOWIECKIE">Mazowieckie</MenuItem>
                <MenuItem value="OPOLSKIE">Opolskie</MenuItem>
                <MenuItem value="PODKARPACKIE">Podkarpackie</MenuItem>
                <MenuItem value="PODLASKIE">Podlaskie</MenuItem>
                <MenuItem value="POMORSKIE">Pomorskie</MenuItem>
                <MenuItem value="SLASKIE">Śląskie</MenuItem>
                <MenuItem value="SWIETOKRZYSKIE">Świętokrzyskie</MenuItem>
                <MenuItem value="WARMINSKO_MAZURSKIE">Warmińsko-Mazurskie</MenuItem>
                <MenuItem value="WIELKOPOLSKIE">Wielkopolskie</MenuItem>
                <MenuItem value="ZACHODNIOPOMORSKIE">Zachodniopomorskie</MenuItem>
            </Select>
        </FormControl>

    );
}

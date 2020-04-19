import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));
const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function Search() {
    const classes = useStyles();

    return (
        <div>
            <label>Wyszukaj Specjaliste</label>
            <form className={classes.root} noValidate autoComplete="on">

                <TextField label="Miasto" size='small' error={true}  />

                <TextField label="Specjalność" size='small' error={true}/>
                <StyledButton>classes shorthand</StyledButton>
            </form></div>

    );
}


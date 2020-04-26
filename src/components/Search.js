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
        background: '#DB4A39',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function Search() {
    const classes = useStyles();

    return (
        <div style={{padding:'2px',display:'inline-block'}}>
            <a href="https://fontmeme.com/comic-fonts/"><img src="https://fontmeme.com/permalink/200421/ed78d1cf8727ade6204810ae6b0406b7.png" alt="comic-fonts" border="0"/></a>
            <form className={classes.root} noValidate autoComplete="on">
                <TextField variant="outlined" label="Miasto" size='small' error={true}  />
                <TextField variant="outlined" label="Specjalność" size='small' error={true}/>
                <StyledButton>Szukaj</StyledButton>
            </form>
            Posiadamy 37892 Specjalistów
        </div>

    );
}


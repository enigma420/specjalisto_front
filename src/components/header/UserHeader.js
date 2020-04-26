import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import headerIcon from "../../specjalist-icons.png";
import Logo from "../small_components/Logo";
import MenuItem from "@material-ui/core/MenuItem";

const theme = createMuiTheme({
    palette: {
        primary: red
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(12)
    },
}));

export default function UserHeader() {


    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Logo/>
                        <Typography variant="h6" className={classes.title}>
                            Znajdź Specjalistę ze swojej okolicy !
                        </Typography>
                        <MenuItem >
                            <Button variant="outlined" color="inherit">Jesteś Specjalistą?</Button>
                        </MenuItem>
                        <Button variant="outlined" color="inherit">Zaloguj się</Button>
                        <MenuItem>
                            <Button variant="outlined" color="inherit">Zarejestruj się</Button>
                        </MenuItem>
                    </Toolbar>
                </AppBar>
            </div>
        </MuiThemeProvider>
    );
}

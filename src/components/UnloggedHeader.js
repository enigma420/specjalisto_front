import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import headerIcon from "../specjalist-icons.png";

const theme = createMuiTheme({
    palette: {
        primary:red
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
    },
}));

export default function UnloggedHeader(){


        const classes = useStyles();
        return (
            <MuiThemeProvider theme={theme}>
            <div  className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={headerIcon} alt="Specjalisto"/>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Specjalisto
                            </Typography>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            coś można wpisać
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            </MuiThemeProvider>
        );
}

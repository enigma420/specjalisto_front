import React from 'react';
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
sectionDesktop: {
    display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}
}));
export default function MailIcon(props) {
    const classes = useStyles();
    return (
        <div className={classes.sectionDesktop}>

        </div>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography/index';
import Chip from '@material-ui/core/Chip/index';
import Divider from '@material-ui/core/Divider/index';
import photo from "../../photo.jpg";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailIcon from '@material-ui/icons/Mail';
import Paper from "@material-ui/core/Paper/index";
import {connect} from "react-redux";
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
    chipRoot: {
        display: 'flex',
        justifyContent: 'center',

        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    root: {
        padding:'10px',
        minWidth:'650px',
        maxWidth:'720px'

    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

function Commission(props) {
    const classes = useStyles();
    const {user} = props.security;

        return (
            <Paper elevation={5} style={{minWidth:"250px",maxWidth:'400px'}}>
                <div  className="row" style={{padding:'5px 5px 5px 20px'}}>
                    <img src={photo} height="120px" width="120px" style={{borderRadius:'10px'}}/>
                    <div style={{textAlign:'center',padding:'5px'}}>
                        <Typography className={classes.heading}>{user.mail}</Typography>
                        <div className={classes.column}>
                            <Chip label="Warszawa"/>
                        </div>
                        <div className={classes.column} style={{padding:'5px'}}>
                            Dostępny 15min temu
                        </div>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <lu style={{listStyleType: 'none'}}>
                            <li>
                                <Chip color="primary" label="724794053" icon={<PhoneIphoneIcon/>} />
                            </li>
                            <li style={{marginTop:'5px'}}>
                                <Chip color="primary" label="joazawadka@gmail.com" icon={<MailIcon/>}/>
                            </li>
                        </lu>
                    </div>
                </div>
                <Divider />
                <div style={{padding:'5px'}} className={classes.chipRoot}>
                </div>
            </Paper>
        );
}

Commission.propTypes = {
    security:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Commission)
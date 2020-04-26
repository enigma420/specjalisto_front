import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import photo from "../../photo.jpg";
import Rating from "@material-ui/lab/Rating";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailIcon from '@material-ui/icons/Mail';
import HttpIcon from '@material-ui/icons/Http';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import WorkIcon from '@material-ui/icons/Work';
import CheckIcon from '@material-ui/icons/Check';
import Paper from "@material-ui/core/Paper";


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

export default function Specialist() {
    const classes = useStyles();

    return (
        <Paper elevation={5} style={{minWidth:'200px'}}>
                <div  className="row" style={{padding:'5px 5px 5px 20px'}}>
                    <img src={photo} height="120px" width="120px" style={{borderRadius:'10px'}}/>
                    <div style={{textAlign:'center',padding:'5px'}}>
                        <Typography className={classes.heading}>Joanna Zawadka</Typography>
                       <Rating name="read-only" value={3} size="large" readOnly/>

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
                            <li style={{marginTop:'5px'}}>
                                <Chip color="primary" label="MojaStrona.com" icon={<HttpIcon/>}/>

                            </li>
                        </lu>


                    </div>
                </div>
                <Divider />
                <div style={{padding:'5px'}} className={classes.chipRoot}>
                    <Chip color="secondary" label="Doświadczenie 3 lata" icon={<WorkIcon/>}/>

                    <Chip label="Car Mechanic" style={{backgroundColor:'#00FF00'}} icon={<CheckIcon/>}/>
                    <Chip label="Car Mechanic" style={{backgroundColor:'#00FF00'}} icon={<CheckIcon/>} />
                </div>
                <Divider />
                <div style={{padding:'5px'}} className={classes.chipRoot}>
                    <Chip color="primary" label="153 Opinie" icon={<AddCircleIcon/>}/>
                    <Chip label="Cennik" icon={<LocalAtmIcon/>} style={{backgroundColor:'#00FF00'}}/>
                    <Chip color="secondary" label="Fotorelacja" icon={<PhotoLibraryIcon/>}/>
                    <Chip color="secondary" label="Dodaj do Ulubionych"  icon={<AddCircleIcon/>}/>
                </div>

            </Paper>
    );
}
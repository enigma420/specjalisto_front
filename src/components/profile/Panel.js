import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import photo from "../../photo.jpg";
import Rating from "@material-ui/lab/Rating";
import DoneIcon from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailIcon from '@material-ui/icons/Mail';
import HttpIcon from '@material-ui/icons/Http';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import WorkIcon from '@material-ui/icons/Work';
import CheckIcon from '@material-ui/icons/Check';


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

        background: '#ffe6e6',
        border: '2px solid #fa8484',
        borderRadius:'3px'

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

export default function Panel(props) {
    const classes = useStyles();
    return (
            <ExpansionPanel defaultExpanded style={{background: '#ffe6e6', border: '2px solid #fa8484',minWidth:'720px',fontSize:'12px'}}>
                    <div  className="row" style={{padding:'5px 5px 5px 20px'}}>
                        <img src={photo} height="150px" style={{borderRadius:'10px',border:'1px solid #fa8484'}}/>
                        <div style={{textAlign:'center',padding:'5px'}}>
                        <Typography className={classes.heading}>Adrianna Zawadzka</Typography>
                            <Rating name="read-only" value={2} size="medium" readOnly />
                            <Typography variant="h6">8 Opinii</Typography>
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
                        <Chip label="Car Mechanic" style={{backgroundColor:'#00FF00'}} icon={<CheckIcon/>}/>
                    <Chip label="Car Mechanic" style={{backgroundColor:'#00FF00'}} icon={<CheckIcon/>} />
                    </div>
                <Divider />
                <div style={{padding:'5px'}} className={classes.chipRoot}>
                    <Chip color="primary" label="Opinie" icon={<AddCircleIcon/>}/>
                    <Chip color="" label="Cennik" icon={<LocalAtmIcon/>} style={{backgroundColor:'#00FF00'}}/>
                    <Chip color="secondary" label="Doświadczenie" icon={<WorkIcon/>}/>
                    <Chip color="secondary" label="Fotorelacja" icon={<PhotoLibraryIcon/>}/>
                    <Chip color="secondary" label="Dodaj do Ulubionych"  icon={<AddCircleIcon/>}/>
                </div>

            </ExpansionPanel>
    );
}





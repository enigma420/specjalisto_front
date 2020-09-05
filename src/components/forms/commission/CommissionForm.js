import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {createCommission} from '../../../actions/commissionActions'
import Paper from '@material-ui/core/Paper';
import CommissionService from "../../../services/CommissionService";
import CommissionActions from "../../../actions/commissionActions";
import http from "../../../http-common";
import {GET_ERRORS} from "../../../actions/types";
import WorkIcon from '@material-ui/icons/Work';
import errorReducer from "../../../reducers/errorReducer";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        height:'80px',
        width:'80px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
    },
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    formControl: {

        minWidth: 200,
    },
}));

export default function CommissionForm() {
    const classes = useStyles();

    const initialCommissionState = {
        title: '',
        description: '',
        city: '',
        profession: '',
        errors: {}
    };

    const [commission,setCommission] = useState(initialCommissionState);
    const [error,setError] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    const [isLoadingDuringFilled,setLoadingDuringFilled] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setLoadingDuringFilled(true);
        const{name,value} = e.target;
        setCommission({...commission, [name]:value});
    };

    const saveCommission = () => {
        var data = {
            title: commission.title,
            description: commission.description,
            city: commission.city,
            profession: commission.profession,
        };
        setLoading(true);
        CommissionService.create(data)
            .then(response => {
            setCommission({
                title: response.data.title,
                description: response.data.description,
                city: response.data.city,
                profession: response.data.profession,
                errors: response.data.errors
            });
            setSubmitted(true);
            console.log(response.data);
            })

        setLoading(false);
    };

    const newCommission = () => {
        setCommission(initialCommissionState);
        setSubmitted(false);
    };

    const registerFirstStep = () => {

        return (
            <div>
                {submitted ? (
                    <div>
                        <h1> SUCCESSFULLY CREATE COMMISSION</h1>
                    </div>
                ) : (
                    <div className="row">
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={12}>
                                <TextField
                                    type="text"
                                    onChange={handleInputChange}
                                    value={commission.title}
                                    name="title"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Tytul"
                                    autoFocus
                                    multiline="true"
                                    rows="2"
                                    className={classnames("form-control form-control-lg" , {
                                        "is-invalid":response.profession
                                    })}
                                />
                                {errors.title && (
                                    <div className="invalid-feedback">
                                        {errors.title}
                                    </div>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="text"
                                    onChange={handleInputChange}
                                    value={commission.profession}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="profession"
                                    label="Dziedzina Zlecenia"
                                    id="professionOfCommission"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="text"
                                    onChange={handleInputChange}
                                    value={commission.city}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="cityOfCommission"
                                    label="Miasto Zlecenia"
                                    name="city"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <TextField
                                    type="text"
                                    onChange={handleInputChange}
                                    value={commission.description}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="description"
                                    label="Opis"
                                    name="description"
                                    multiline="true"
                                    rows="8"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            onClick={saveCommission}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>

                    </div>
                )}
                {      loading && <div style={{color: `green`}}>"<strong>loading</strong>"</div>    }
            </div>
        )
    };
    return (
        <Paper md={3}  style={{padding: '150px'}}>
            <div className="row">
                <div className="col">
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <WorkIcon fontSize="large"/>
                        </Avatar>
                        <Typography variant="h2" style={{fontWeight:'bolder'}}>
                            Utworzenie Zlecenia
                        </Typography>
                                        <Typography>{registerFirstStep()}</Typography>


                    </div>

                </div>

            </div>
        </Paper>
    );
}



{/*<Grid item xs={12} sm={6}>*/}
{/*    <TextField*/}
{/*        variant="outlined"*/}
{/*        required*/}
{/*        fullWidth*/}
{/*        name="price"*/}
{/*        label="Cena wstepna (do negocjacji)"*/}
{/*        type="numeric"*/}
{/*        id="price"*/}
{/*    />*/}
{/*</Grid>*/}
{/*<Grid item xs={12} sm={6}>*/}
{/*    <TextField*/}
{/*        variant="outlined"*/}
{/*        required*/}
{/*        fullWidth*/}
{/*        style={{width:'300px'}}*/}
{/*        size="large"*/}
{/*        label="Czas trwania zlecenia w dniach"*/}
{/*        type="number"*/}
{/*        name="deadline"*/}
{/*        InputLabelProps={{*/}
{/*            shrink: true,*/}
{/*        }}*/}
{/*    />*/}
{/*</Grid>*/}
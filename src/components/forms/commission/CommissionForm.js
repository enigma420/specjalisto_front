import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {number} from "prop-types";


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


function getSteps() {
    return ['Formularz Zleceniowy', 'Potwierdzenie Utworzenia Zlecenia', 'Zlecenie Utworzone'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Proszę wypełnić formularz zleceniowy w celu utworzenia zlecenia.
            Pola oznaczone gwiazdką są obowiązkowe!`;
        case 1:
            return 'Na podany adres email został wysłany kod potwierdzający, który należy podać.';
        case 2:
            return `Zlecenie zostalo pomyslnie utworzone. Dziękujemy !`;
        default:
            return 'Niezidentyfikowany krok';
    }
}




export default function CommissionForm() {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const registerFirstStep = () => {
        return (
            <div>
                <CssBaseline/>
                <div className="row">

                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={12}>
                                <TextField
                                    name="title"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Tytul"
                                    autoFocus
                                    multiline="true"
                                    rows="2"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="professionOfCommission"
                                    label="Dziedzina Zlecenia"
                                    id="professionOfCommission"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="cityOfCommission"
                                    label="Miasto Zlecenia"
                                    name="cityOfCommission"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <TextField
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="price"
                                    label="Cena wstepna (do negocjacji)"
                                    type="numeric"
                                    id="price"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    style={{width:'300px'}}
                                    size="large"
                                    label="Czas trwania zlecenia w dniach"
                                    type="number"
                                    name="deadline"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <div className={classes.actionsContainer}>
                            <div style={{textAlign: 'center'}}>
                                <span style={{margin: '5px'}}>
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={handleNext}
                                                        className={classes.submit}
                                                        size="large"
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                                                    </Button>
                                                </span>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={handleNext}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    };
    const registerConfirmationSecondStep = () => {
        return (
            <div>
                <Paper md={5} style={{padding: '20px'}}>
                    <Typography align="center" style={{padding: '5px', fontSize: '22px', fontWeight: 'bolder'}}>Proszę
                        wprowadzić kod potwierdzający wysłany na Email</Typography>
                    <div style={{textAlign: 'center'}}>
                        <TextField
                            style={{margin: '5px'}}
                            variant="outlined"
                            required
                            name="confirmMailCode"
                            label="Kod Potwierdzający"
                            className={classes.submit}
                            type="password"
                            size="small"
                        />
                        <Button
                            style={{margin: '5px'}}
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.submit}
                            size="large"
                        >
                            {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                        </Button>
                        <Grid container justify="flex-start" style={{padding: '5px'}}>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Wyślij kod potwierdzający ponownie
                                </Link>
                            </Grid>
                        </Grid>
                    </div>

                </Paper>
            </div>
        )
    };
    const registerThanksFinalStep = () => {
        return (
            <div>
                <Paper md={5} style={{padding: '20px', textAlign: 'center'}}>
                    <Typography align="center" style={{padding: '5px', fontSize: '28px', fontWeight: 'bolder'}}>Dziękujemy
                        bardzo za utworzenie zlecenia w naszym serwisie !!!</Typography>
                    <Button
                        style={{margin: '5px'}}
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                        className={classes.submit}
                        size="large"
                    >
                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                    </Button>
                </Paper>
            </div>
        )
    };
    function getStepFormContent(step){
        switch (step) {
            case 0:
                return <>{registerFirstStep()}</>;
            case 1:
                return <>{registerConfirmationSecondStep()}</>;
            case 2:
                return <>{registerThanksFinalStep()}</>;
            default:
                return 'Niezidentyfikowany krok'
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Paper md={3}  style={{padding: '150px'}}>
            <div className="row">
                <div className="col">
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon fontSize="large"/>
                        </Avatar>
                        <Typography variant="h2" style={{fontWeight:'bolder'}}>
                            Utworzenie Zlecenia
                        </Typography>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div style={{padding:'30px'}}>{getStepFormContent(index)}</div>

                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Typography style={{fontSize:'20px',fontWeight:'bolder'}}>Wszelkie kroki procesu rejestracji zostały ukończone</Typography>
                            </Paper>
                        )}
                    </div>

                </div>

            </div>
        </Paper>
    );
}
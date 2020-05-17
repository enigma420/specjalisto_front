import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

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
        height: '80px',
        width: '80px'
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
    inputRoot: {
        fontSize: 10
    },
    labelRoot: {
        fontSize: 16,
        horizontalAlign: 'center'
    },
    checkboxLabel: {
        fontSize: 16
    },
    clauseLabel: {
        fontSize: 12
    },
    labelFocused: {},
    iconContainer: { // define styles for icon container
        transform: 'scale(3)',
        marginLeft: '12px',
    }
}));


function getSteps() {
    return ['Formularz Rejestracyjny', 'Potwierdzenie Rejestracji', 'Zarejestrowany'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Proszę wypełnić formularz rejestracyjny w celu utworzenia konta.
            Pola oznaczone gwiazdką są obowiązkowe!`;
        case 1:
            return 'Na podany adres email został wysłany kod potwierdzający, który należy podać.';
        case 2:
            return `Konto zostało pomyślnie zarejestrowane. Dziękujemy !`;
        default:
            return 'Niezidentyfikowany krok';
    }
}


export default function SpecialistRegisterForm(props) {
    const { val, bind, reset } = useInput('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${value}`);
        reset();
    }


    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const registerFirstStep = () => {
        return (
            <Paper md={5} style={{padding: '20px', minWidth: '550px'}}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={8} sm={4}>
                            <TextField
                                type="text"
                                {...bind}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Imię"
                                autoFocus
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={8} sm={4}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Nazwisko"
                                name="lastName"
                                autoComplete="lname"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <RadioGroup row aria-label="gender" name="gender1" onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio/>} label="Kobieta"
                                                  classes={{label: classes.checkboxLabel}}/>
                                <FormControlLabel value="male" control={<Radio/>} label="Mężczyzna"
                                                  classes={{label: classes.checkboxLabel}}/>
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="miasto"
                                label="Miasto"
                                id="city"
                                autoComplete="cities"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="province"
                                label="Województwo"
                                id="province"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Adres Email"
                                name="email"
                                autoComplete="email"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Potwierdź Adres Email"
                                name="confirmEmail"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField

                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Hasło"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Potwierdź Hasło"
                                type="password"
                                id="confirmPassword"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="profession"
                                label="Zawód/Profesja/Specjalność"
                                id="profession"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    },
                                    shrink:true
                                }}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <FormControl variant="outlined" className={classes.formControl}>*/}
                        {/*        <InputLabel htmlFor="outlined-age-native-simple" style={{fontSize: '16px'}}>Lata*/}
                        {/*            Doświadczenia</InputLabel>*/}
                        {/*        <Select*/}
                        {/*            native*/}
                        {/*            onChange={handleChange}*/}
                        {/*            label="Lata Doświadczenia"*/}

                        {/*        >*/}
                        {/*            <option aria-label="None" value=""/>*/}
                        {/*            <option value={1}>0</option>*/}
                        {/*            <option value={2}>0 - 1</option>*/}
                        {/*            <option value={3}>1 - 2</option>*/}
                        {/*            <option value={4}>2 - 3</option>*/}
                        {/*            <option value={5}>3 - 5</option>*/}
                        {/*            <option value={6}>5 - 8</option>*/}
                        {/*            <option value={7}>8 - 10</option>*/}
                        {/*            <option value={8}>10 - 15</option>*/}
                        {/*            <option value={9}>15+</option>*/}
                        {/*        </Select>*/}
                        {/*    </FormControl>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="education"
                                label="Wyksztalcenie"
                                id="educationStage"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                {...bind}
                                variant="outlined"
                                required
                                fullWidth
                                name="phone"
                                label="Numer Telefonu"
                                id="phoneNumber"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="secondary"/>}
                                classes={{label: classes.clauseLabel}}
                                label="Oświadczam, iż dane osobowe podałem/-am dobrowolnie, a przed wyrażeniem zgody zapoznałem/-am się z informacjami, których podanie jest wymagane zgodnie z art. 13 ogólnego rozporządzenia o ochronie danych osobowych [informacje dostępne tutaj]."
                            />
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="secondary"/>}
                                classes={{label: classes.clauseLabel}}
                                label="Akceptuję Regulamin i Politykę prywatności serwisu Konfeo i zobowiązuję się do ich przestrzegania"
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.actionsContainer}>
                        <div style={{textAlign: 'center'}}>
                                <span style={{margin: '5px'}}>
                                                    <Button
                                                        type="submit"
                                                        value="Submit"
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={handleNext}
                                                        className={classes.submit}
                                                        fullWidth
                                                        classes={{label: classes.checkboxLabel}}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                                                    </Button>
                                                </span>
                        </div>
                    </div>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <a href="#" variant="body2" style={{fontSize: '13px'}}>
                                Posiadasz już konto? Zaloguj się
                            </a>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        )
    };
    const registerConfirmationSecondStep = () => {
        return (
            <Paper md={5} style={{padding: '20px'}}>
                <Typography align="center" style={{padding: '5px', fontSize: '22px', fontWeight: 'bolder'}}>Proszę
                    wprowadzić kod potwierdzający wysłany na Email</Typography>
                <div style={{textAlign: 'center'}}>
                    <TextField
                        style={{margin: '5px', width: '50%'}}
                        variant="outlined"
                        required
                        name="confirmMailCode"
                        label="Kod Potwierdzający"
                        className={classes.submit}
                        type="password"
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelRoot,
                                focused: classes.labelFocused
                            }
                        }}
                    />
                    <Button
                        style={{margin: '5px'}}
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                        fullWidth
                        classes={{label: classes.checkboxLabel}}
                    >
                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                    </Button>
                    <Grid container justify="flex-end" style={{padding: '5px'}}>
                        <Grid item>
                            <a href="#" variant="body2" style={{fontSize: '13px'}}>
                                Wyślij kod potwierdzający ponownie
                            </a>
                        </Grid>
                    </Grid>
                </div>

            </Paper>
        )
    };
    const registerThanksFinalStep = () => {
        return (
            <Paper md={5} style={{padding: '20px', textAlign: 'center'}}>
                <Typography align="center" style={{padding: '5px', fontSize: '28px', fontWeight: 'bolder'}}>Dziękujemy
                    bardzo za dołączenie do naszego serwisu !!!</Typography>
                <Button
                    style={{margin: '10px'}}
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    fullWidth
                    classes={{label: classes.checkboxLabel}}
                >
                    {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                </Button>
            </Paper>

        )
    };

    function getStepFormContent(step) {
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

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    return (
        <Paper md={3} style={{padding: '80px 0 0 150px'}}>
            <div className={classes.paper} style={{width: '60%', margin: '0 auto'}}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon fontSize="large"/>
                </Avatar>
                <Typography variant="h2" style={{fontWeight: 'bolder'}}>
                    Rejestracja Specjalisty
                </Typography>
                <div style={{alignItems: 'center'}}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel classes={{ // apply this style
                                    iconContainer: classes.iconContainer
                                }}>
                                    <Typography variant="h4" style={{fontWeight: 'bolder'}}>{label}
                                    </Typography></StepLabel>
                                <StepContent>
                                    <Typography variant="h5">{getStepContent(index)}</Typography>
                                    <div style={{padding: '30px'}}>{getStepFormContent(index)}</div>

                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography style={{fontSize: '20px', fontWeight: 'bolder'}}>Wszelkie kroki procesu rejestracji
                            zostały ukończone</Typography>
                    </Paper>
                )}
            </div>


        </Paper>
    );
}
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
import ConfirmationTokenService from "../../../services/ConfirmationTokenService";
import {applyMiddleware as dispatch} from "redux";
import classnames from "classnames";
import SpecialistService from "../../../services/SpecialistService";
import CustomerService from "../../../services/CustomerService";

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


export default function SpecialistRegisterForm() {

    const initialSpecialistState = {
        name: '',
        surname:'',
        province:'',
        city: '',
        profession: '',
        phoneNumber: '',
        mail: '',
        confirmMail: '',
        password: '',
        confirmPassword: '',
    };

    const initialSpecialistToken = {
        token: ''
    };

    const [specialist, setSpecialist] = useState(initialSpecialistState);
    const [submitted, setSubmitted] = useState(false);
    const [confirmationKey,setConfirmationKey] = useState(initialSpecialistToken);
    // const [confirmationInputMail, setConfirmationInputMail] = useState(false)
    // const [confirmationInputPassword, setConfirmationInputPassword] = useState(false)
    const [errors, setErrors] = useState({
        name: '',
        surname:'',
        province:'',
        city: '',
        profession: '',
        phoneNumber: '',
        mail: '',
        confirmMail: '',
        password: '',
        confirmPassword: '',
    });

    const [wrongConfirmationToken,setWrongConfirmationToken] = useState({
        token: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSpecialist({...specialist, [name]: value});
    };

    const handleInputChangeSecond = (e) => {
        const{name, value} = e.target;
        setConfirmationKey({...confirmationKey, [name]: value})
    }

    const saveConfirmationKey = () => {
        var data = {
            token: confirmationKey.token
        };
        ConfirmationTokenService.create(data.token,"specialist")
            .then(response => {
                // console.log("first: " + data.token)
                // console.log("second: "+ data.token.token)
                // console.log("third: "+ data.token.token.token)
                // console.log("fourth: "+ response)
                // console.log("fifth: "+ response.data)
                // console.log("sixth: "+ response.token)
                // console.log("sixth: "+ data)
                // console.log("sixth: "+ data[0])
                // console.log("sixth: "+ data[1])
                // console.log("sixth: "+ response.data)
                // console.log("sixth: "+ response.data[0])
                // console.log("sixth: "+ response.data[1])
                // console.log("sixth: "+ response.data.token)
                // console.log("sixth: "+ response.data.token[0])
                // console.log("sixth: "+ response.data.token[1])
                // console.log("sixth: "+ response.data.token.token)
                dispatch(setConfirmationKey({

                    token: response.data.token
                }));
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            })

            // console.log("token: " + data.token)
            .catch(function (error) {
                if (error.response) {
                    setWrongConfirmationToken(error.response.data)
                    console.log(error.response.data.message)
                }
            })
    };

    const saveSpecialist = () => {
        var data = {
            name: specialist.name,
            surname: specialist.surname,
            province: specialist.province,
            city: specialist.city,
            profession: specialist.profession,
            phoneNumber: specialist.phoneNumber,
            mail: specialist.mail,
            confirmMail: specialist.confirmMail,
            password: specialist.password,
            confirmPassword: specialist.confirmPassword,
        };

        SpecialistService.create(data)
            .then(response => {
                dispatch(setSpecialist({
                    name: response.data.name,
                    surname: response.data.surname,
                    province: response.data.province,
                    city: response.data.city,
                    profession: response.data.profession,
                    phoneNumber: response.data.phoneNumber,
                    mail: response.data.mail,
                    confirmMail: response.data.confirmMail,
                    password: response.data.password,
                    confirmPassword: response.data.confirmPassword
                }));
                // if(checkConfirmationMail(customer.mail,customer.confirmMail) &&
                //     checkConfirmationPassword(customer.password,customer.confirmPassword)){
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                // setSubmitted(true);
                // }
            })
            /*first way*/
            .catch(function (error) {
                if (error.response) {
                    setErrors(error.response.data)
                    console.log(error.response.data);
                    console.log("name error: " + error.response.data.name);
                    console.log("surname error: " + error.response.data.surname);
                    console.log("province error: " + error.response.data.province);
                    console.log("city error: " + error.response.data.city);
                    console.log("profession error: " + error.response.data.profession);
                    console.log("phoneNumber error: " + error.response.data.phoneNumber);
                    console.log("mail error: " + error.response.data.mail);
                    console.log("confirmMail error: " + error.response.data.confirmMail);
                    console.log("password error: " + error.response.data.password);
                    console.log("confirmPassword error: " + error.response.data.confirmPassword);

                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
        /*second way*/
        // .catch(function (error) {
        //     console.log(JSON.stringify(error.response.data.title))
        //     console.log(JSON.stringify(error.response.data.city))
        //     console.log(JSON.stringify(error.response.data.profession))
        //     console.log(JSON.stringify(error.response.data.description))
        // })
        /*third way*/
        // .catch((error) => {
        //     console.log({...error})
        // })
    };
    //

    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const registerFirstStep = () => {
        return (
            <Paper md={5} style={{padding: '20px', minWidth: '550px'}}>
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={8} sm={4}>
                            <TextField
                                type="text"
                                onChange={handleInputChange}
                                error={!!errors.name}
                                value={specialist.name}
                                autoComplete="fname"
                                name="name"
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
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.name
                                })}
                            />
                            {errors.name && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.name}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={8} sm={4}>
                            <TextField
                                type="text"
                                onChange={handleInputChange}
                                value={specialist.surname}
                                error={!!errors.surname}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Nazwisko"
                                name="surname"
                                autoComplete="lname"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.surname
                                })}
                            />
                            {errors.surname && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.surname}
                                </div>
                            )}
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
                                onChange={handleInputChange}
                                value={specialist.city}
                                error={!!errors.city}
                                variant="outlined"
                                required
                                fullWidth
                                name="city"
                                label="Miasto"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.city
                                })}
                            />
                            {errors.city && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.city}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                onChange={handleInputChange}
                                value={specialist.province}
                                error={!!errors.province}
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
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.province
                                })}
                            />
                            {errors.province && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.province}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                onChange={handleInputChange}
                                value={specialist.mail}
                                error={!!errors.mail}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Adres Email"
                                name="mail"
                                autoComplete="email"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.mail
                                })}
                            />
                            {errors.mail && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.mail}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                onChange={handleInputChange}
                                value={specialist.confirmMail}
                                error={specialist.mail !== specialist.confirmMail}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Potwierdź Adres Email"
                                name="confirmMail"
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
                                onChange={handleInputChange}
                                value={specialist.password}
                                error={!!errors.password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Hasło"
                                type="password"
                                id="password"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.name
                                })}
                            />
                            {errors.name && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.name}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleInputChange}
                                value={specialist.confirmPassword}
                                error={specialist.password !== specialist.confirmPassword}
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
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
                                onChange={handleInputChange}
                                value={specialist.profession}
                                error={!!errors.profession}
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
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.profession
                                })}
                            />
                            {errors.profession && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.profession}
                                </div>
                            )}
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
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <TextField*/}
                        {/*        type="text"*/}
                        {/*        {...bind}*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        name="education"*/}
                        {/*        label="Wyksztalcenie"*/}
                        {/*        id="educationStage"*/}
                        {/*        InputProps={{classes: {root: classes.inputRoot}}}*/}
                        {/*        InputLabelProps={{*/}
                        {/*            classes: {*/}
                        {/*                root: classes.labelRoot,*/}
                        {/*                focused: classes.labelFocused*/}
                        {/*            }*/}
                        {/*        }}*/}
                        {/*        className={classnames("form-control form-control-lg", {*/}
                        {/*            "is-invalid": errors.name*/}
                        {/*        })}*/}
                        {/*    />*/}
                        {/*    {errors.name && (*/}
                        {/*        <div className="invalid-feedback"*/}
                        {/*             style={{textAlign: 'center', marginTop: "85px", fontSize: "13px"}}>*/}
                        {/*            {errors.name}*/}
                        {/*        </div>*/}
                        {/*    )}*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                onChange={handleInputChange}
                                value={specialist.phoneNumber}
                                error={!!errors.phoneNumber}
                                variant="outlined"
                                required
                                fullWidth
                                name="phoneNumber"
                                label="Numer Telefonu"
                                id="phoneNumber"
                                InputProps={{classes: {root: classes.inputRoot}}}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.phoneNumber
                                })}
                            />
                            {errors.phoneNumber && (
                                <div className="invalid-feedback"
                                     style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                    {errors.phoneNumber}
                                </div>
                            )}
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

                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={saveSpecialist}
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
                <Typography style={{padding: '5px', fontSize: '22px', fontWeight: 'bolder'}}>Proszę
                    wprowadzić kod potwierdzający wysłany na Email</Typography>
                <div style={{textAlign: 'center'}}>
                    <TextField
                        style={{margin: '5px', width: '50%'}}
                        variant="outlined"
                        onChange={handleInputChangeSecond}
                        value={confirmationKey.token}
                        required
                        name="token"
                        label="Kod Potwierdzający"
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelRoot,
                                focused: classes.labelFocused
                            }
                        }}
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": wrongConfirmationToken.message
                        })}
                    />
                    {wrongConfirmationToken.message && (
                        <div className="invalid-feedback"
                             style={{textAlign: 'center', marginTop: "85px", fontSize: "13px"}}>
                            {wrongConfirmationToken.message}
                        </div>
                    )}
                    <Button
                        style={{margin: '25px'}}
                        variant="contained"
                        color="secondary"
                        onClick={saveConfirmationKey}
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
        <Paper md={3}>
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
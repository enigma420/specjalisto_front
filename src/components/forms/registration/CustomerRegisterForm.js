import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import {applyMiddleware as dispatch} from "redux";
import CustomerService,{create} from "../../../services/CustomerService";
import classnames from "classnames";
import ConfirmationTokenService from "../../../services/ConfirmationTokenService";



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
        marginLeft: '12px'
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


 export default function CustomerRegisterForm() {

    const initialCustomerState = {
        nickname: '',
        city: '',
        phoneNumber: '',
        mail: '',
        confirmMail: '',
        password: '',
        confirmPassword: '',
    };

    const initialCustomerToken = {
        token: ''
    }

    const [customer, setCustomer] = useState(initialCustomerState);
    const [confirmationKey,setConfirmationKey] = useState(initialCustomerToken);
    const [errors, setErrors] = useState({
        nickname: "",
        city: "",
        phoneNumber: "",
        mail: "",
        confirmMail: '',
        password: '',
        confirmPassword: ''
    });

    const [wrongConfirmationToken,setWrongConfirmationToken] = useState({
        token: ""
    });

    // const checkConfirmationMail = (mail,confirmMail) => {
    //     if(mail === confirmMail) setConfirmationInputMail(true);
    //     else return ( <div> MAIL AND CONFIRMATION MAIL ARE NOT EQUAL</div>)
    // }
    //
    // const checkConfirmationPassword = (password,confirmPassword) => {
    //     if(password === confirmPassword) setConfirmationInputPassword(true);
    //     else return ( <div> PASSWORD AND CONFIRMATION PASSWORD ARE NOT EQUAL</div>)
    // }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCustomer({...customer, [name]: value});
    };

    const handleInputChangeSecond = (e) => {
        const{name, value} = e.target;
        setConfirmationKey({...confirmationKey, [name]: value})
    };

    const saveConfirmationKey = () => {
        var data = {
            token: confirmationKey.token
        };
        ConfirmationTokenService.create(data.token,"customer")
            .then(response => {
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

    const saveCustomer = () => {
        var data = {
            nickname: customer.nickname,
            city: customer.city,
            phoneNumber: customer.phoneNumber,
            mail: customer.mail,
            confirmMail: customer.confirmMail,
            password: customer.password,
            confirmPassword: customer.confirmPassword
        };

        CustomerService.create(data)
            .then(response => {
                dispatch(setCustomer({
                    nickname: response.data.nickname,
                    city: response.data.city,
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
                    console.log("nickname error: " + error.response.data.nickname);
                    console.log("city error: " + error.response.data.city);
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
    const registerFirstStep = () => {
        return (
            <Paper md={5} style={{padding: '20px', minWidth: '550px'}}>
                <form>
                <Grid container spacing={3}>
                    <Grid item xs={8} sm={6}>
                        <TextField
                            error={!!errors.nickname}
                            name="nickname"
                            variant="outlined"
                            onChange={handleInputChange}
                            value={customer.nickname}
                            fullWidth
                            label="Nazwa Użytkownika"
                            InputProps={{classes: {root: classes.inputRoot}}}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }}
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.nickname,

                            })}
                        />
                        {errors.nickname && (
                            <div className=" invalid-feedback"
                                 style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                {errors.nickname}
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={8} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            onChange={handleInputChange}
                            value={customer.city}
                            name="city"
                            label="Miasto"
                            autoComplete="cities"
                            error={!!errors.city}
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
                            variant="outlined"
                            required
                            fullWidth
                            error={!!errors.mail}
                            onChange={handleInputChange}
                            value={customer.mail}
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
                            variant="outlined"
                            required
                            fullWidth
                            error={customer.mail !== customer.confirmMail}
                            id="email"
                            onChange={handleInputChange}
                            value={customer.confirmMail}
                            label="Potwierdź Adres Email"
                            name="confirmMail"
                            InputProps={{classes: {root: classes.inputRoot}}}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }}
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.confirmMail
                            })}
                        />
                        {errors.confirmMail && (
                            <div className="invalid-feedback"
                                 style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                {errors.confirmMail}
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            onChange={handleInputChange}
                            value={customer.password}
                            name="password"
                            label="Hasło"
                            type="password"
                            error={!!errors.password}
                            InputProps={{classes: {root: classes.inputRoot}}}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }}
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.password
                            })}
                        />
                        {errors.password && (
                            <div className="invalid-feedback"
                                 style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                {errors.password}
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="confirmPassword"
                            error={customer.password !== customer.confirmPassword}
                            onChange={handleInputChange}
                            value={customer.confirmPassword}
                            label="Potwierdź Hasło"
                            type="password"
                            InputProps={{classes: {root: classes.inputRoot}}}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }}
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.confirmPassword
                            })}
                        />
                        {errors.confirmPassword && (
                            <div className="invalid-feedback"
                                 style={{textAlign: 'center', marginTop: "15px", fontSize: "13px"}}>
                                {errors.confirmPassword}
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="phoneNumber"
                            label="Numer Telefonu"
                            onChange={handleInputChange}
                            value={customer.phoneNumber}
                            error={!!errors.phoneNumber}
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
                            label="* Oświadczam, iż dane osobowe podałem/-am dobrowolnie, a przed wyrażeniem zgody zapoznałem/-am się z informacjami, których podanie jest wymagane zgodnie z art. 13 ogólnego rozporządzenia o ochronie danych osobowych [informacje dostępne tutaj]."
                        />
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="secondary"/>}
                            classes={{label: classes.clauseLabel}}
                            label="* Akceptuję Regulamin i Politykę prywatności serwisu Konfeo i zobowiązuję się do ich przestrzegania"
                        />
                    </Grid>
                </Grid>
                <div className={classes.actionsContainer}>
                    <div style={{textAlign: 'center'}}>
                                <span style={{margin: '5px'}}>
                                                    <Button
                                                        // disabled={}
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={saveCustomer}
                                                        className={classes.submit}
                                                        fullWidth
                                                        classes={{label: classes.checkboxLabel}}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                                                    </Button>
                                                </span>
                    </div>
                </div>
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
                        // className={classes.submit}
                        // type="password"
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

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Paper md={3}>
            <div className={classes.paper} style={{width: '60%', margin: '0 auto'}}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon fontSize="large"/>
                </Avatar>
                <Typography variant="h2" style={{fontWeight: 'bolder'}}>
                    Rejestracja Klienta
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

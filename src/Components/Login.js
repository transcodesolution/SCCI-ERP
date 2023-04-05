import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
import {  setEmail, setPassword, setIsButtonDisabled, loginSuccess, loginFailed } from '../Features/userSlice';
import {initialState} from '../Features/userSlice'; 
const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 10
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff',
        },
    })
);

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    // const [isLoggedIn, setIsLoggedIn] = useState(true);

    const loginState = useSelector((state) => state.loginState);
    console.log("loginState", loginState);

    // validations
    const registerSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please provide a valid email address")
            .required("Email address is required"),
        password: yup
            .string()
            .min(5, "Password should have a minimum length of 5")
            .max(12, "Password should have a maximum length of 12")
            .required("Password is required")
            .oneOf([('password')], 'Passwords does not match'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema),
    });

    useEffect(() => {
        if (loginState.email.trim() && loginState.password.trim()) {
            dispatch(setIsButtonDisabled(false));
        } else {
            dispatch(setIsButtonDisabled(true));
        }
    }, [dispatch, loginState.email, loginState.password]);

    const handleLogin = (e) => {
        console.log(e);
        if (loginState.email === 'kunal.aage@seaflux.tech' && loginState.password === 'password') {
            dispatch(loginSuccess('Login Successfully'));
            navigate("/dashboard");
        } else {
            dispatch(loginFailed('Incorrect email or password'));
        }
    };

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
    };
return (
        <form className={classes.container} noValidate autoComplete="off">
            <Box
                sx={{
                    width: "120%",
                    maxWidth: '100%',
                    ml: 0,
                    mb: "-7rem"
                }}>
                <Card style={{ marginTop: "15rem" }}>
                    <CardHeader className={classes.header} title="Huia Capital" />
                    <CardContent>
                        <div>
                            <TextField
                                error={initialState.isError}
                                fullWidth
                                id="email"
                                type="email"
                                label="Email"
                                placeholder="Email"
                                margin="normal"
                                // helperText={state.helperText}
                                {...register('email')}
                                onChange={handleEmailChange}
                            />
                            <div style={{ color: "red" }}>{errors.email?.message}</div>
                            <TextField
                                error={initialState.isError}
                                fullWidth
                                type="password"
                                id="password"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                                // helperText={state.helperText}
                                {...register('password')}
                                onChange={handlePasswordChange}
                            />
                            <div style={{ color: "red" }}>{errors.password?.message}</div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.loginBtn}
                            onClick={handleSubmit(handleLogin)}
                            disabled={loginState.isButtonDisabled}
                        >
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </form>
    );
}

export default Login;
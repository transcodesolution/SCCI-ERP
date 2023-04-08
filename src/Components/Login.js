import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { MDBBtn, MDBCard, MDBCardBody, MDBCheckbox, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { Formik, Form, Field } from 'formik';
import { setLogin } from '../Reducers/authReducer';


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registration, setRegistration] = useState({
        email: '',
        password: ''
    })


    // validations
    const loginSchema = yup.object().shape({
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


    const handleLogin = (e) => {
        console.log(e)
        dispatch(setLogin({ token: '123' }))
        navigate("/")

    };


    return (
        <>
            {/* <form className={classes.container} noValidate autoComplete="off">
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
            </form> */}
            <Formik initialValues={registration} onSubmit={handleLogin}>
                {
                    ({ values, isSubmitting }) => {
                        return <Form>
                            {
                                console.log(values)
                            }
                            <MDBContainer fluid>

                                <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

                                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                                    <MDBCardBody className='p-5 text-center'>

                                        <h2 className="fw-bold mb-5">Log In</h2>


                                        <Field name='email'>
                                            {({ field, meta }) => (
                                                <MDBInput wrapperClass='mb-4' id='email' type='email' label="Email" {...field} invalid={meta.touched && meta.error} />
                                            )}
                                        </Field>
                                        <Field name='password'>
                                            {({ field, meta }) => (
                                                <MDBInput wrapperClass='mb-4' name='password' id='password' type='password' label="Password" {...field} invalid={meta.touched && meta.error} />
                                            )}
                                        </Field>


                                        <Field name="firstName">
                                            {({ field, meta }) => (
                                                <div>

                                                    <MDBBtn className='w-100 mb-4' type='submit' size='md' disabled={isSubmitting}>Log  IN</MDBBtn>

                                                </div>
                                            )}
                                        </Field>
                                      

                                        <div className="text-center">


                                        </div>

                                    </MDBCardBody>
                                </MDBCard>

                            </MDBContainer>
                        </Form>
                    }
                }

            </Formik >
        </>
    );
}

export default Login;
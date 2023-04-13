import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { MDBBtn, MDBCard, MDBCardBody, MDBCheckbox, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setLogin } from '../Reducers/authReducer';
import { ApiPostNoAuth } from '../Api/ApiData';
import { toast } from "react-toastify";
// import * as yup from 'yup'
import { Button, Text } from '@chakra-ui/react'

const schema = yup.object().shape({
    email: yup.string().required("please enter your email"),
    password: yup.string().required("please enter your password")
})

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
        console.log(e, "wwewe")
        ApiPostNoAuth(
            "/admin/login",
            {
                email: e.email,
                password: e.password,
            }
        )
            .then((response) => {
                toast.success('Logiin SuccessFull')
                dispatch(
                    setLogin({
                        token: response?.data?.data?.token,
                        profile: response?.data?.data,
                        access: response?.data?.data?.managerAccess,
                    })
                );
                navigate("/StudentListpage");
            })
            .catch((error) => {
                toast.error(error.message)
                console.log(error);
            });



    };


    return (
        <>

            <Formik initialValues={registration} validationSchema={schema} onSubmit={handleLogin}>
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


                                        <ErrorMessage name='email' >
                                            {(msg) => <Text as="span" color={'red'}>{msg}  </Text>}
                                        </ErrorMessage>
                                        <Field name='email'>
                                            {({ field, meta }) => (
                                                <MDBInput wrapperClass='mb-4' id='email' type='text' label="Email" {...field} invalid={meta.touched && meta.error} />
                                            )}
                                        </Field>
                                        <ErrorMessage name='password' >
                                            {(msg) => <Text as="span" color={'red'}> {msg} </Text>}
                                        </ErrorMessage>
                                        <Field name='password'>
                                            {({ field, meta }) => (
                                                <MDBInput wrapperClass='mb-4' name='password' id='password' type='password' label="Password" {...field} invalid={meta.touched && meta.error} />
                                            )}
                                        </Field>
                                        <br></br>
                                        <br></br>
                                        <Field>
                                            {() => <Button type='submit' colorScheme='blue'>Button</Button>}
                                        </Field>



                                        <div className="text-center">


                                        </div>

                                    </MDBCardBody>
                                </MDBCard>

                            </MDBContainer>
                        </Form>
                    }
                }

            </Formik>
        </>
    );
}

export default Login;
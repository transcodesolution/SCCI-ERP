import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import { addFormData } from "../../../Reducers/addScci";
import { initialValues } from "../../Sccimembers/initialvalue";
import { fetchFormData } from "../../../Reducers/getFormData";
const AddProfile = () => {
    const dispatch = useDispatch();
    const [addFormDatas, setAddFormDatas] = useState({ initialValues });
    const handleSubmit = (value, resetForm) => {

        console.log(value)
        dispatch(addFormData(value)).then((response) => {
            console.log(response)
            if (response.payload.status == 200) {
                resetForm({
                    values: {
                        ...addFormDatas,
                        class: value.class,
                        rollNo: value.rollNo + 1,
                        standard: value.standard
                    }
                })
                toast.success('Student Added Successfully')
            }
        })
    };

    useEffect(() => {
        dispatch(fetchFormData());
    }, []);

    return (
        <div className="main_content">
            <div className="student_wrapper">
                <div className="student_wrap">
                    <div className="student_tab_block">
                        <Formik initialValues={addFormDatas} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
                            {
                                ({ values, setFieldValue }) => <Form>
                                    <Tabs >
                                        <Tab eventKey="Profile" title="Profile">
                                            <div className="profile_wrap">
                                                <div className="profile_block">
                                                    <div className="profile_form">
                                                        <ul>
                                                            <li>
                                                                <label>first name :</label>
                                                                <Field
                                                                    type="text"
                                                                    name="firstName"
                                                                />
                                                            </li>
                                                            <li>
                                                                <label>Middle name :</label>
                                                                <Field type="text"
                                                                    name="middleName"
                                                                />
                                                            </li>
                                                            <li>
                                                                <label>last name :</label>
                                                                <Field type="text"
                                                                    name="lastName"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="profile_form profile_form1">
                                                        <ul>
                                                            <li>
                                                                <label>Address :</label>
                                                                <Field type="text"

                                                                    name="address"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="profile_form profile_form2">
                                                        <ul>
                                                            <li>
                                                                <label>State :</label>
                                                                <Field type="text"

                                                                    name="state"
                                                                />
                                                            </li>

                                                        </ul>
                                                    </div>

                                                    <div className="profile_form profile_form2">
                                                        <ul>
                                                            <li>
                                                                <label>date of birth :</label>
                                                                <Field type="date"

                                                                    name="dob"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="profile_form profile_form2">
                                                        <ul>
                                                            <li>
                                                                <label>phone number :</label>
                                                                <Field type="number"

                                                                    name="phoneNumber"
                                                                />
                                                            </li>
                                                            <li>
                                                                <label>Email (Optional) :</label>
                                                                <Field type="taxt"
                                                                    name="email"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Form>
                            }

                        </Formik>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProfile;

















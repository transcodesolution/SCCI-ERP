import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("please  enter your firstName"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("please enter your lastName"),
    email: Yup.string()
        .email("Invalid email")
        .required("please enter your email "),
    contectNumber: Yup.string()
        .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
        })
        .required("please enter your contect number"),
    whatsappNumber: Yup.string()
        .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
        })
        .required("please enter your whatsappNumber"),
    gender: Yup.string().required("A radio option is required"),
    birthDate: Yup.date().required("Date Of Birth Required"),
    companyAddress: Yup.string().required("please enter your address"),
    state: Yup.string().required("state require"),
    detailOfCompany: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("please file the compoany detail"),
    gstNumber: Yup.string()
        .required("GST number is required")
        .matches(
            /^[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/,
            "Invalid GST number"
        ),
    memberships: Yup.string().required("please select your country"),
    membershipsDetails: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("please enter your memberships Details"),
    about: Yup.string().required("please enter your value"),
    website: Yup.string().required("please enter your value"),
});
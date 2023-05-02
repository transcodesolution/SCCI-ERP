// import * as Yup from "yup";
// export const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("please  enter your firstName"),
//     middleName: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("please  enter your middleName"),
//     lastName: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("please enter your lastName"),
//     email: Yup.string()
//         .email("Invalid email")
//         .required("please enter your email "),
//     phone: Yup.string()
//         .matches(/^[6-9]\d{9}$/, {
//             message: "Please enter valid number.",
//             excludeEmptyString: false,
//         })
//         .required("please enter your contect number"),
//     whatsappNumber: Yup.string()
//         .matches(/^[6-9]\d{9}$/, {
//             message: "Please enter valid number.",
//             excludeEmptyString: false,
//         })
//         .required("please enter your whatsappNumber"),
//     companyWhatsappNumber: Yup.string()
//         .matches(/^[6-9]\d{9}$/, {
//             message: "Please enter valid number.",
//             excludeEmptyString: false,
//         })
//         .required("please enter your whatsappNumber"),
//     gender: Yup.string().required("A radio option is required"),
//     dob: Yup.date().required("Date Of Birth Required"),
//     address: Yup.string().required("please enter your address"),
//     state: Yup.string().required("state require"),
//     city: Yup.string().required("state require"),
//     businessDetails: Yup.string().required("Business Details require"),
//     companyEmail: Yup.string()
//         .email("Invalid email")
//         .required("please enter your email "),
//     detailOfCompany: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("please file the compoany detail"),
//     gst: Yup.string()
//         .required("GST number is required")
//         .matches(
//             /^[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/,
//             "Invalid GST number"
//         ),
//     memberships: Yup.string().required("please select your country"),
//     startDate: Yup.date().required("please enter your startDate"),
//     endDate: Yup.date().required("please enter your endDate"),
//     // amount: Yup.number().required("please enter your amount"),
//     // pendingAmount: Yup.number().required("please enter your pendingAmount"),
//     isSubscribeToBulletin: Yup.string().required("please select you chack box icon"),
//     membershipType: Yup.string().required('Please choose your favorite color'),
//     categoryadd: Yup.string().required('Please choose your Category Add'),
//     // isSubscribeToBulletin: Yup.boolean()
//     //     .required('You must agree to the terms and conditions')
//     //     .oneOf([true], 'You must agree to the terms and conditions'),
//     companyName: Yup.string().required("please enter your company Name"),
//     companyPhoto: Yup.mixed().required('Image is required'),
//     membershipsDetails: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("please enter your memberships Details"),
//     about: Yup.string().required("please enter your about value"),
//     website: Yup.string().required("please enter your website"),
// });
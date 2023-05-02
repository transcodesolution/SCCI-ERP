// import React, { useState } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { Field, Form, Formik } from "formik";
// const PersonalDetails = () => {

//     const dispatch = useDispatch();
//     const [key, setKey] = useState('Profile')
//     const standard = useSelector((state) => state.standard)
//     const [addUsers, setAddUsers] = useState({
//       firstName: "",
//       middleName: "",
//       lastName: "",
//       aadharCard: "",
//       address: "",
//       area: "",
//       city: "surat",
//       district: "",
//       state: "",

//     });

//     const handleSubmit = (value, resetForm) => {

//       console.log(value)
//       dispatch(addUser(value)).then((response) => {
//         console.log(response)
//         if (response.payload.status == 200) {
//           resetForm({
//             values: {
//               ...addUsers,
//               class: value.class,
//               rollNo: value.rollNo + 1,
//               standard: value.standard
//             }
//           })
//           setKey('Profile')
//           toast.success('Student Added Successfully')
//         }
//       })

//     };

//     // console.log(state)

//     useEffect(() => {
//       dispatch(fetchStandards());
//     }, []);
//     return (
//       <>
//         <div>
//         </div>
//       </>
//     )
//   }

//   export default PersonalDetails;



import React from 'react'
import AddProfile from './AddProfile';

const PersonalDetails = () => {
  return (
    <div>
      <AddProfile />
    </div>
  )
}

export default PersonalDetails;







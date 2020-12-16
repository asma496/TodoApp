// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import {makeStyles} from '@material-ui/styles'






// const useStyles = makeStyles(theme => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   button: {
//     margin: theme.spacing(1)
//   }
// }));


// const Logform = () => (

//   <div>

//     <h1>Log in</h1>
//     <Formik
//       initialValues={{ username: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.username) {
//           errors.username = 'Required';
//         }
//         //  else if (
//         //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         // ) 
//         {
//           errors.username = 'Invalid username';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           console.log(JSON.stringify(values, null, 2));
//           alert('Thank you!')
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field type="text" name="username" placeholder='username' />
//           <ErrorMessage name="username" component="div" />
//           <Field type="password" name="password" placeholder='password' />
//           <ErrorMessage name="password" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//             Sign in
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>

// );












// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Formik, Form, Field } from 'formik';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   button: {
//     margin: theme.spacing(1)
//   }
// }));

// export const Logform = ({
//   formData,
//   setFormData,
//   nextStep,
//   prevStep
// }) => {
//   const classes = useStyles();
//   const [direction, setDirection] = useState('back');
//   return (
//     <>
//       <Formik
//         initialValues={formData}
//         onSubmit={values => {
//           setFormData(values);
//           direction === 'back' ? prevStep() : nextStep();
//         }}
//       >
//         <Form className={classes.form}>
//           <Field
//             name='username'
//             label='username'
//             margin='normal'
//             as={TextField}
//           />
//           <Field name='password' label='password' margin='normal' as={TextField} />
//           <div>
//             <Button
//               type='submit'
//               variant='contained'
//               color='primary'
//               className={classes.button}
//               onClick={() => setDirection('forward')}
//             >
//               Sign in
//             </Button>
//           </div>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// Logform.propTypes = {
//   formData: PropTypes.object.isRequired,
//   setFormData: PropTypes.func.isRequired,
//   nextStep: PropTypes.func.isRequired,
//   prevStep: PropTypes.func.isRequired

// };










import React from 'react'
import {Formik, Form, } from 'formik'
import * as Yup from 'yup'
import { TextField } from '@material-ui/core'


const Logform = () => {
  const initialValues={
    username:'',
    password:''
  }
  const validationSchema = Yup.object({
    username:Yup.string().username('invalid username').required('Required'),
    password:Yup.string().required('Required'),

  })
  const onSubmit =values =>{
    console.log('Form data',values)

  }
  return (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
{
 formik => {
   
      <Form>
        <TextField
        control = 'input'
        type='text'
        lable='username'
        name='username'
        />

<TextField
        control = 'input'
        type='password'
        lable='password'
        name='password'
        />
<button type='submit' disable = {formik.invalid}>Sign in</button>
    
</Form>
  }
}
  </Formik>
  )
}






// import React from "react";
// import ReactDOM from "react-dom";

// // import "bootstrap/dist/css/bootstrap.css";

// class Logform extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formValues: {
//         email: "",
//         password: ""
//       },
//       formErrors: {
//         email: "",
//         password: ""
//       },
//       formValidity: {
//         email: false,
//         password: false
//       },
//       isSubmitting: false
//     };
//   }

//   handleChange = ({ target }) => {
//     const { formValues } = this.state;
//     formValues[target.name] = target.value;
//     this.setState({ formValues });
//     this.handleValidation(target);
//   };

//   handleValidation = target => {
//     const { name, value } = target;
//     const fieldValidationErrors = this.state.formErrors;
//     const validity = this.state.formValidity;
//     const isEmail = name === "email";
//     const isPassword = name === "password";
//     const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     validity[name] = value.length > 0;
//     fieldValidationErrors[name] = validity[name]
//       ? ""
//       : `${name} is required and cannot be empty`;

//     if (validity[name]) {
//       if (isEmail) {
//         validity[name] = emailTest.test(value);
//         fieldValidationErrors[name] = validity[name]
//           ? ""
//           : `${name} should be a valid email address`;
//       }
//       if (isPassword) {
//         validity[name] = value.length >= 3;
//         fieldValidationErrors[name] = validity[name]
//           ? ""
//           : `${name} should be 3 characters minimum`;
//       }
//     }

//     this.setState({
//       formErrors: fieldValidationErrors,
//       formValidity: validity
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.setState({ isSubmitting: true });
//     const { formValues, formValidity } = this.state;
//     if (Object.values(formValidity).every(Boolean)) {
//       alert("Form is validated! Submitting the form...");
//       this.setState({ isSubmitting: false });
//     } else {
//       for (let key in formValues) {
//         let target = {
//           name: key,
//           value: formValues[key]
//         };
//         this.handleValidation(target);
//       }
//       this.setState({ isSubmitting: false });
//     }
//   };

//   render() {
//     const { formValues, formErrors, isSubmitting } = this.state;
//     return (
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-lg-12 text-center">
//             <h1 className="mt-5">Login Form</h1>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <form onSubmit={this.handleSubmit}>
//               <div className="form-group">
//                 <label>Email address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className={`form-control ${
//                     formErrors.email ? "is-invalid" : ""
//                   }`}
//                   placeholder="Enter email"
//                   onChange={this.handleChange}
//                   value={formValues.email}
//                 />
//                 <div className="invalid-feedback">{formErrors.email}</div>
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className={`form-control ${
//                     formErrors.password ? "is-invalid" : ""
//                   }`}
//                   placeholder="Password"
//                   onChange={this.handleChange}
//                   value={formValues.password}
//                 />
//                 <div className="invalid-feedback">{formErrors.password}</div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-block"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Please wait..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <>
//     {/* <LoginForm /> */}
//     <br/>
//     <a href="https://sebhastian.com/tags/react/">More React tutorials at sebhastian.com</a>
//   </>
// , rootElement);



































export default Logform;
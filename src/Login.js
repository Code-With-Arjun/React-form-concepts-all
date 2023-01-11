import {React,useState} from 'react'
import{ Form} from 'react-bootstrap';
import './css/Login.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
// import Singin from './Singin';
// import RegistrationForm from './RegistrationForm ';
import {

  Link
} from "react-router-dom";
import Signup from './Signup';

const Login = () => {
    const [data,setData]=useState({})
    const [isSignin,setIsSignin]=useState(false)
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            password:"",
            checkbox:false
        },
        validationSchema: yup.object().shape({
            email:yup.string().email('Invalid email').required('Enter Your Email'),
            password:yup.string().matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              ).required("Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
              checkbox:yup.boolean()
              .oneOf([true], "You must accept the pricing policy terms and conditions").required()
            }),
        onSubmit:(values,action)=>{
            console.log(values)
     setData(values)
    //  action.resetForm()
        // Form.reset()
        // window.location.reload(false);
        }
        })
        if(isSignin){
            console.log("button clicked ",data)
            return <Signup/>
        }
  return (


    <div className="main_login_container">
        <div className="login_container shadow-sm">
        <Form className='loginform_container' onSubmit={handleSubmit}>
    {/* <label htmlFor=""></label> */}
    <h3 className='text-center login_heading'>Login </h3>
    <div className={`email  ${errors.email&&touched.email?"loginmargin_content":"logincontainer_field"}`}>
          <Form.Label className='field_label loginform-label'>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='logininput_box' name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
          {errors.email&&touched.email?<p className='loginwarning_errors'>{errors.email}</p>:null}
    </div>
    <div className={`password  ${errors.password&&touched.password?"loginmargin_content_password":"logincontainer_field_password"}`}>
    <Form.Label className='field_label loginform-label'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='logininput_box' name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
          {errors.password&&touched.password?<p className='loginwarning_errors'>{errors.password}</p>:null}
    </div>
  <div className={`terms_condition  ${errors.checkbox&&touched.checkbox?"loginmargin_content":"logincontainer_field"}`}>
  <Form.Group className="" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I accept the Terms and Conditions" name="checkbox" className='terms_condtions_label' onChange={handleChange} onBlur={handleBlur} value={values.checkbox}/>
      {errors.checkbox&&touched.checkbox?<p className='loginwarning_errors login_error'>{errors.checkbox}</p>:null}
      </Form.Group>
  </div>
  {/* <Button variant="dark" className='submit_btn ' type="submit" id="btn_submit">Login</Button> */}
  <div className="submit_container text-center">
  <button className='login_button'>Login</button>
  </div>
  <div className='signup_para__container'>
      <Link to="/signup" className='para_singup'>
   Do You have an account?<span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className='signup_span'>Sign Up</span>
      </Link>
  </div>
    </Form>
        </div>
    </div>
  
  )
}

export default Login
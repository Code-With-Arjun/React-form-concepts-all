import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import {Col} from 'react-bootstrap';
import '../css/Signup.css'
import { useFormik } from 'formik';
import { IoLogoXing } from 'react-icons/io5';
import * as yup from 'yup';
import "yup-phone";
const initialValues={
  name:"",
  email:"",
  phone:"",
  password:"",
  gender:"",
  state:"",
}
const Signup = () => {
   const [data,setData]=useState({});
const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
  initialValues:initialValues,
  validationSchema:yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(18, 'Too Long!').required('Required'),
    email:yup.string().email('Invalid email').required('Required'),
    phone:yup.string().phone('IN', true, 'Phone is invalid').required("Please Enter Your Phone number"),
    password:yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ).required("Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    gender:yup.string().required("Gender is Required"),
    state:yup.string().required("State field is must")
    }),
  onSubmit:(values,action)=>{
  setData(values)
  action.resetForm()
  // Form.reset()
  }
  })

  const state=["Jaipur","Bharatpur","Alwar","Bikaner"];
  const renderState=state.map((value)=>{
    return (
      <>
       <option  label={value}>{value}</option>
      </>
    )
  })

 
  return (
    <div className="grid_container">
  <div className="icon_container">
<div className="icon">
  <IoLogoXing/>
</div>
  </div>


<div className='main_container '>
<Form className='form_container shadow-sm' onSubmit={handleSubmit} onBlur={handleBlur}>
    {/* <label htmlFor=""></label> */}
    <h4 className='text-center' style={{color:"#764abc"}}>Signup form</h4>
    <div className={`name  ${errors.name&&touched.name?"margin_content":"container_field"}`} >
    <Form.Label className='field_label'>First Name</Form.Label>
    <Form.Control placeholder="Enter Your Name" className='input_box sigin_input' name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
    {errors.name&&touched.name?<p className='warning_errors'>{errors.name}</p>:null}
    </div>
    <div className={`phone  ${errors.phone&&touched.phone?"margin_content":"container_field"}`}>
    <Form.Label className='field_label'>Phone Number</Form.Label>
    <Form.Control className='input_box sigin_input' placeholder='Enter Phone Number' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
    {errors.phone&&touched.phone?<p className='warning_errors'>{errors.phone}</p>:null}
    </div>
    <div className={`email  ${errors.email&&touched.email?"margin_content":"container_field"}`}>
          <Form.Label className='field_label'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='input_box sigin_input' name="email" value={values.email} onChange={handleChange} autoComplete="off" onBlur={handleBlur}/>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            {errors.email&&touched.email?<p className='warning_errors'>{errors.email}</p>:null}
    </div>
    <div className={`password  ${errors.password&&touched.password?"margin_content_password":"container_field_password"}`}>
    <Form.Label className='field_label'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='input_box sigin_input' name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off"/>
          {errors.password&&touched.password?<p className='warning_errors'>{errors.password}</p>:null}
    </div>
    <div className='d-flex justify-content-between '>
    <div className={`gender  ${errors.gender&&touched.gender?"margin_content":"container_field"}`}>
          <Form.Label className='field_label'>Gender</Form.Label>
          <div key="inline-radio" className="mb-3 ">
            <Form.Check inline label="Male" name="gender" type="radio"  value="Male" className='input_box2' onChange={handleChange} onBlur={handleBlur}/>
            <Form.Check inline label="Female" name="gender" type="radio"  value="Female"  className='input_box2' onChange={handleChange} onBlur={handleBlur} />
            {errors.gender&&touched.gender?<p className='warning_errors'>{errors.gender}</p>:null}
     </div>
    </div>
    <div className={`state  ${errors.state&&touched.state?"margin_content":"container_field"}`}>
    <Form.Group as={Col} controlId="formGridState" className='select_dropdown'>
            <Form.Label className='field_label'>State</Form.Label>
            <Form.Select defaultValue="Choose..." name="state"  className='dropdown_items input_box2 input_box' onChange={handleChange} onBlur={handleBlur}>
              <option>...Select</option>
            {renderState}
            </Form.Select>
            {errors.state&&touched.state?<p className='warning_errors'>{errors.state}</p>:null}
          </Form.Group>
    </div>
    </div>
 
  <div className="submit text-center">
 <button className='sigup_button'>Sign Up</button>
  </div>
    </Form>
</div>
</div>

   
  )
}

export default Signup 
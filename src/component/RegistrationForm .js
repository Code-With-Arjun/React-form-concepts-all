import React, { useState } from 'react'
import {Container,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/form.css'
import { useFormik } from 'formik';
import schema from '../schema';
import { IoLogoXing } from 'react-icons/io5';
const initialValues={
  name:"",
  email:"",
  phone:"",
  password:"",
  gender:"",
  state:"",
  hobbies:[],
}
const RegistrationForm = () => {
   const [data,setData]=useState({});
const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
  initialValues:initialValues,
  validationSchema:schema,
  onSubmit:(values,action)=>{
  setData(values)
  action.resetForm()
  // Form.reset()
  }
  })
  const hobbies=["Playing","Singing","Dancing","Other"];
  const state=["Jaipur","Bharatpur","Alwar","Bikaner"];
  const renderHobbies=hobbies.map((value,index)=>{
    return (
      <>
       <Form.Check inline  label={value} value={value} type="checkbox"  className='input_box2' name="hobbies" onChange={handleChange} onBlur={handleBlur} />
      
      </>
    )
  })
  const renderState=state.map((value)=>{
    return (
      <>
       <option  label={value}>{value}</option>
      </>
    )
  })
  console.log(data)
  return (
    <div className="grid_container">
  <div className="icon_container">
<div className="icon">
  <IoLogoXing/>
</div>
  </div>


<div className='main_container'>
<Form className='form_container' onSubmit={handleSubmit} onBlur={handleBlur}>
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
    <div className={`hobbies  ${errors.hobbies&&touched.hobbies?"margin_content":"container_field"}`}>
    <Form.Label className='field_label'>Hobbies</Form.Label>
          <div key="inline-radio" className="d-flex justify-content-between"   >
           {renderHobbies}
    </div>
            {errors.hobbies&&touched.hobbies?<p className='warning_errors'>{errors.hobbies}</p>:null}
    </div>
    <div className="fileupload">
    <Form.Label className='field_label'>File</Form.Label>
    <Form.Control type="file"  name="file" className='input_box2 input_box'/>
  </div>
   <div className="range">
        <label htmlFor="range_slider">Rating</label>
        <input type="range"  id="range_slider"   name="vol" className='input_range' min="30" max="100"/>
  </div> 
  <div className="submit text-center">
  <Button variant="dark" className='submit_btn' type="submit" id="btn_submit" style={{backgroundColor:'#764abc',border:'1px solid #764abc'}}>Sign In</Button>
  </div>
    </Form>
</div>
</div>

   
  )
}

export default RegistrationForm 

import React, { useEffect, useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
import '../css/AddItems_Section.css'
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { AddItemsData } from '../redux/action/action';
import { RiCloseCircleFill } from 'react-icons/ri';

import Sidebar from './Sidebar';
import Header from './Header';

const AddItems_Section = () => {
  const dispatch=useDispatch()
  const [data,setData]=useState()
   const [id,setId]=useState(0)
  const handleFile=(e)=>{
// console.log(URL.createObjectURL(e.target.files[0]))
setData(URL.createObjectURL(e.target.files[0]))
  }
  const {values,handleChange,handleSubmit,handleBlur,errors,touched,setFieldValue  }=useFormik({
    initialValues:{
      name:"",
      title:"",
      price:"",
      content:"",
      image:""
    },
    validationSchema:yup.object().shape({
      name: yup.string().min(2, 'Too Short!').max(18, 'Too Long!').required('Enter Product Name'),
      title: yup.string().min(2, 'Too Short!').max(18, 'Too Long!').required('Enter Product title'),
      price: yup.number().min(2, 'Too Short!').required('Enter Product Price'),
      content: yup.string().min(18, 'Too Short!').max(30, 'Too Long!').required('Enter Product Description'),
      }),
    onSubmit:(values,action)=>{
      setId(id+1)
      values.id=id
      // console.log(values.image)
      dispatch(AddItemsData(values))
    action.resetForm()
    setData("")
    // Form.reset()
    }
    })
 const handleIconClick=(e)=>{
setData(null)
  }
  const handleInputFileClick=(e)=>{
    setFieldValue("image",e.currentTarget.files[0])
    handleFile(e)
  }

  return (
    <>
<div className="addItems_section">

<div className="sidebar_container">

<Sidebar/>
<Header/>
</div>

 <div className="text_container" >
  <div className="text_container_padding">
    <div className="img_section ">
{/* <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"/> */}
{
  data&&
  <RiCloseCircleFill onClick={handleIconClick} className="file_logo_cancelIcon" id='cancel_icon'/>
}
<label htmlFor="file_input" className='file_input_label'>
  {
    data?
    <div className="file_logo_container">
      <img src={data} alt="" className='file_logo_image2' />
      {/* <div className="icon_container"> */}

      {/* </div> */}
      </div>
      :
      <div>
        <img src="https://th.bing.com/th/id/OIP.vmv1ZFrZg_aWH8xbwwGwwwHaHa?pid=ImgDet&rs=1" alt="" className='file_logo_image '/>
      </div>
  }
</label>
<br/>
<input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" id='file_input' onChange={handleInputFileClick}/>
    </div>
    <div className="text_section form_section">
      <form onSubmit={handleSubmit}>
    <div  className={`name  ${errors.name&&touched.name?"addItems_content_errorclass":"addItems_content_class"}`}>
    <Form.Label className='addItemsInput_label'>Item Name</Form.Label>
    <Form.Control placeholder="Enter Item Name" className='addItems_input' name="name"  onChange={handleChange} onBlur={handleBlur} value={values.name}/>
    {errors.name&&touched.name?<p className='addItems_warning_errors'>{errors.name}</p>:null}
    </div>
    <div className={`title  ${errors.title&&touched.title?"addItems_content_errorclass":"addItems_content_class"}`}>
    <Form.Label className='addItemsInput_label'>Item Title</Form.Label>
    <Form.Control placeholder="Enter Item Title" className='addItems_input' name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
    {errors.title&&touched.title?<p className='addItems_warning_errors'>{errors.title}</p>:null}
    </div>
    <div className={`price  ${errors.price&&touched.price?"addItems_content_errorclass":"addItems_content_class"}`}>
    <Form.Label className='addItemsInput_label'>Item Price</Form.Label>
    <Form.Control placeholder="Enter Item Price" className='addItems_input' name="price" type="number" min="100" onChange={handleChange} onBlur={handleBlur} value={values.price} />
     {errors.price&&touched.price?<p className='addItems_warning_errors'>{errors.price}</p>:null}
    </div>
    <div className={`price content ${errors.price&&touched.price?"addItems_content_errorclass":"addItems_content_class"}`} >
        <Form.Label className='addItemsInput_label'>Description</Form.Label>
        <Form.Control as="textarea" rows={4} className='addItems_input text_area_input' name="content" onChange={handleChange} onBlur={handleBlur} value={values.content}/>
        {errors.content&&touched.content?<p className='addItems_warning_errors'>{errors.content}</p>:null}
    </div>
    <div className="addItem_btn_container text-center my-1">
      <button className="addItems_button" type='submit'>Add Item</button>
    </div>
    </form>
    </div>
  </div>
        </div>
                
</div>
    </>
  )
}

export default AddItems_Section
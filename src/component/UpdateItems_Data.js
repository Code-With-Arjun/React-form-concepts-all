
import React, { useEffect, useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
import '../css/AddItems_Section.css'
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import {updatedItemData} from '../redux/action/action';
import { RiCloseCircleFill } from 'react-icons/ri';
import Sidebar from './Sidebar';
import FormikData from './FormikData';
import { Link, useNavigate } from 'react-router-dom';

import "../css/UpdateItems_Data.css"


const UpdateItems_Data = ({setIsClick}) => {
  //  const dispatch=useDispatch()
// const navigate=useNavigate()
    // const [data,setData]=useState()
    const [isShowImage,setIsShowImage]=useState(true)
    const [newImage,setNewImage]=useState(false)
    const [imageUrl,setImageUrl]=useState()
    const [previousPage,setPreviousPage]=useState(false)
    const value=useSelector(state=>state.UpdateItemsReducer)
    const [id,setId]=useState(value.id)
    // console.log(value)
        const handleFile=(e)=>{
            setNewImage(true)
    //   console.log(URL.createObjectURL(e.target.files[0]))
      setImageUrl(URL.createObjectURL(e.target.files[0]))
    // setImageUrl(e.target.files[0])
    
        }
        const {values,handleChange,handleSubmit,handleBlur,errors,touched,setFieldValue}=useFormik({
          initialValues:{
            name:value.name,
            title:value.title,
            price:value.price,
            content:value.content,
            // image:URL.createObjectURL(updateItems.image)
            // image:value.image
            image:""
          },
          validationSchema:yup.object().shape({
            name: yup.string().min(2, 'Too Short!').max(18, 'Too Long!').required('Enter Product Name'),
            title: yup.string().min(2, 'Too Short!').max(18, 'Too Long!').required('Enter Product title'),
            price: yup.number().min(2, 'Too Short!').required('Enter Product Price'),
            content: yup.string().min(18, 'Too Short!').max(30, 'Too Long!').required('Enter Product Description'),
            }),
          onSubmit:(values,action)=>{
            // console.log("submit button clicked")
            // dispatch(updatedItemData(values))
            values.id=id
            // console.log(values)
            setIsClick(values)
           setPreviousPage(true);
       
          }
          })
       const handleIconClick=(e)=>{
    //   setData(null)
    if(newImage){
        setNewImage(false)
    }
   if(isShowImage){
        setIsShowImage(false)
    }
        }
        const handleInputFileClick=(e)=>{
          setFieldValue("image",e.currentTarget.files[0])
          handleFile(e)
        }
if(previousPage){
  return <FormikData/>
}
        // console.log(values.image.name)
  return (
   <>
<div className="addItems_section">

<div className="sidebar_container">

<Sidebar/>
</div>

 <div className="text_container" >
  <div className="text_container_padding">

    <div className="img_section ">
        {
            isShowImage||newImage?
            <RiCloseCircleFill onClick={handleIconClick} className="file_logo_cancelIcon" id='cancel_icon'/>
            :null
        }
<label htmlFor="file_input" className='file_input_label'>
    {
        isShowImage?
        <div className="file_logo_container">
       {/* <img src={URL.createObjectURL(value.image)} alt="" className='file_logo_image2' /> */}
        </div>
        :
        <>
 
        {
               newImage?
               <div className="file_logo_container">
               <img src={imageUrl} alt="" className='file_logo_image2' />
               </div>
               :
               <img src="https://th.bing.com/th/id/OIP.vmv1ZFrZg_aWH8xbwwGwwwHaHa?pid=ImgDet&rs=1" alt="" className='file_logo_image '/>

        }
   </>
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
    <div className="addItem_btn_container text-center my-1 d-flex">
   {/* <button type='submit'>Submit</button> */}
   <input type="submit" value="submit" />
      {/* <button type="submit"> */}
      {/* <Link className='UpdateItems_Data__link mx-1' type='submit'>
      submit
        </Link> */}
      {/* </button> */}
        <Link to="/" className='UpdateItems_Data__link' >
        Back
        </Link>
    </div>

    </form>
    </div>

  </div>
        </div>
                

   </div>
   
   
   </>
  )
}

export default UpdateItems_Data
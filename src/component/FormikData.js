import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Container, Row,Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import '../css/Items_Data.css'
import { UpdatedItemsData,AddItemsData,UpdateItemsData} from '../redux/action/action';
import UpdateItems_Data from './UpdateItems_Data';
// import { useSelect } from '@mui/base';

const FormikData = () => {
  const [isUpdate,setIsUpdate]=useState(false)
  // const [isClick,setIsClick]=useState(false)
  const value=useSelector(state=>state.AddItemsReducer)
  const newData=useSelector(state=>state.UpdatedItemsReducer)
  const [data,setData]=useState([])
  const [updatedData,setUpdatedData]=useState(newData)
  // const [isReRender,setIsReRender]=useState(false)
    // console.log(value)
    console.log(updatedData)
  const dispatch=useDispatch()
useEffect(()=>{
setData(value)
},[])
  // console.log(data)
  function updateItem(data){
    dispatch(UpdateItemsData(data))
    setIsUpdate(true)
  }
  function childButtonClick(item){
    // console.log(item)
    let newArr=value.map(val=>val.id===item.id?item:val)
    // console.log(newArr)
// setUpdatedData(newArr)
    // setData(newArr)
    dispatch(UpdatedItemsData(newArr))
    // setIsReRender(true)
  }
console.log(data)
  // console.log(updatedData)
const renderItems=updatedData.length?"":data.map((item,index)=>{
  return (
    <React.Fragment key={index}>
    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={URL.createObjectURL(item.image)}/>
      <hr/>
      <Card.Body className='text-center'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price{item.price}</Card.Text>
        <Card.Text>
      {item.content}
        </Card.Text>
<div className="itemsData_button_container">
        <button className='itemsData_update__button' onClick={()=>updateItem(item)}>
          Update Item
          </button>
</div>
      </Card.Body>
    </Card>
    </Col>
    </React.Fragment>
  )
})

const renderUpdatedItems=updatedData.map((item,index)=>{
  return (
    <React.Fragment key={index}>
    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={URL.createObjectURL(item.image)}/>
      <hr/>
      <Card.Body className='text-center'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price{item.price}</Card.Text>
        <Card.Text>
      {item.content}
        </Card.Text>
<div className="itemsData_button_container">
        <button className='itemsData_update__button' onClick={()=>updateItem(item)}>
          Update Item
          </button>
</div>
      </Card.Body>
    </Card>
    </Col>
    </React.Fragment>
  )
})
console.log(renderItems)
if(isUpdate){
  return <UpdateItems_Data setIsClick={childButtonClick}/>
}
  return (
    <>
 <div className="itemsData_main__container">

<div className="itemsData_sidebar__container">
  <Sidebar/>
</div>

 <div className="itemsData_DataShow__container my-1" >
<Container>
  <Row>
{
  renderUpdatedItems
}
    {
    
   data.length? renderItems:
     <Col className='itemsData_spinner_container'>
          <Spinner animation="border" role="status" >
     <span className="visually-hidden">Loading...</span>
   </Spinner>
     </Col>

    }
    
  </Row>
</Container>
      </div>          
</div>


    </>
  )
}

export default FormikData


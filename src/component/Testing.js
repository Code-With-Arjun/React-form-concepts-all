import React from 'react'
import { useFormik } from 'formik'
const Testing = () => {
    const {values,handleChange,handleSubmit,handleBlur,errors,touched,setFieldValue,fileRef}=useFormik({
        initialValues:{
        //  hobbies:[]
        // gender:""
        file:""
        // select:""
        },
         onSubmit:(values,action)=>{
            console.log(values)
        //  setData(values)
         action.resetForm()
                // Form.reset()
                // window.location.reload(false);
                }
        })

  return (
   <>
   <form onSubmit={handleSubmit}>



{/* <div className="form-check">
  <input className="form-check-input" type="checkbox"  id="flexCheckChecked" onChange={handleChange} name="hobbies" value="singing" checked={values.hobbies.includes("singing")}/>
  <label className="form-check-label" for="flexCheckChecked">
    singing
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="checkbox"  id="flexCheckChecked" onChange={handleChange} name="hobbies" value="playing" checked={values.hobbies.includes("playing")}/>
  <label className="form-check-label" for="flexCheckChecked">
    playing
  </label>
</div> */}
{/* 
<div className="radiobutton">
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="flexRadioDisabled" onChange={handleChange} value="male" checked={values.gender.includes("male")}/>
  <label class="form-check-label" for="flexRadioDisabled">
   Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="flexRadioCheckedDisabled" onChange={handleChange} value="female" checked={values.gender.includes("female")}/>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
  Female
  </label>
</div>
</div> */}
<input type="file" name="file" id="" onChange={(e)=>setFieldValue("file",e.currentTarget.files[0])}/>

{/* <select name="select" id="" onChange={handleChange} value={values.select}>
  <option>Choose any</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Alwar">Alwar</option>
  <option value="bharatpur">Bharatpur</option>
</select> */}
<button type="submit" className='btn btn-warning'>Submit</button>
</form>
   </>
  )
}

export default Testing
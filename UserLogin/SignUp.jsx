import React from 'react'
import {useFormik } from 'formik'
import { Row,Col} from 'react-bootstrap'
import { Button, Link, TextField } from '@mui/material'
import {PhoneInput}  from 'react-contact-number-input'
import "./Forms.css"
const SignUp = () => {
  const formik = useFormik({
      initialValues:{
      name:"",
      surname:"",
      email:"",
      password:""
      },
      onSubmit:(values,e)=>{
         e.preventDefault()
      console.log("form",values)
      // axios.post(" http://atologistinfotech.com/api/register.php",{values}).then(response=> console.log(response.status)).catch(error=>console.log(error))
      },
      validate:(values)=>{
          let errors = {};
          if(!values.name){
              errors.name= " please enter your Name required"

          }
          if(!values.surname){
            errors.email= " please Enter Surname required"

        }
        if(!values.email){
            errors.email= " please  your Email required"

        }
        if(!values.password){
          errors.password= " please  your  password required"

      }
         return errors
      }
      
  })






  return (
    <>
    <form  autoComplete='off' onSubmit={formik.handleSubmit}>
   <Row> 
       <Col >
      <TextField variant="filled" type ="text" name="name" id="name" placeholder='Name' value={formik.values.name} onChange={ formik.handleChange}/>
       {formik.errors.name ?  <div style={{color:"red"}}> {formik.errors.name} </div>:null} </Col>
       <Col>
   <TextField  variant="filled" type ="text" name="surname" id="surname" placeholder='Surname' value={formik.values.surname}  onChange={ formik.handleChange}/>
   {formik.errors.name ?  <div style={{color:"red"}}> {formik.errors.name} </div>:null}
   </Col>
   <Row>
   <TextField variant="filled" type ="email" name="email" id="Email" value={formik.values.email} placeholder="email Address   @gmail.com"  onChange={formik.handleChange} fullWidth/>
   {formik.errors.email ?  <div style={{color:"red"}}> {formik.errors.email} </div>:null}
   </Row>
    <Row className="pt-3">
       <TextField type ="text" placeholder='password' name ="passowrd"/>
   {formik.errors.password ?  null
   :<div style={{color:"red"}}> {formik.errors.password} </div>}

   </Row> 
   <Row className="pt-3">
       <PhoneInput type ="text"  country={'India'} enableareas={true} 
        inputProps={{
          name:"phone",
          country:"India",
          required:true,
          autoFouc:true
        }}
         style ={{outline:"none",border:"none"}} 
        />
   </Row>
   <Row>
   <TextField type ="date" />
   </Row>
   <Row>
   <TextField type ="text" placeholder='Gender(optional)' />
   </Row>
   <Row className="pt-3">
     <p>By Clicking "Continue" you Agree to the  <Link> terms </Link> and  <Link>  privacyPolicy  </Link></p> 
     <Row>
             <Button type ="submit" className ="w-100" style={{ display:"flex", alignItems:"center",color:"white", background:"#0275d8", padding:"15px", borderRadius:"1000px"}}>Continue</Button>
     </Row>
     <Row className="pt-3 text-center">
        <Col> 
        <p>Already have an Account? <Link>Sign in</Link> </p> 
        </Col> 
     </Row>

   </Row>
   </Row>
    </form>
    
    
    </>
  )
}

export default SignUp
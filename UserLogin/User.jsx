import React from 'react'
import { Navbar, NavLink, Row,Col, Card,  } from 'react-bootstrap'
import SignUp from './SignUp'
import Yahooo from '../UserLogin/Yahooo.png'
const User = () => {
     
    
  return (
    <>
    <Row>
    <Navbar className="d-flex justify-content-between"> 
     <NavLink><h2> <img src={Yahooo} alt ="..." width="150px"/></h2></NavLink>     
     <NavLink> <p>Help</p></NavLink>  
    </Navbar>
    </Row>
    <Row>
   
        <Col style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Card style={{ width:"30rem"}}>
<Card.Header className="text-center">
    <h2>Sign Up</h2>
    <p>Create a Yahoo email address</p>
</Card.Header>
<Card.Body >
    <SignUp/>
</Card.Body>
   
        </Card>
        
        
        
        </Col>
    </Row>
    
    
    
    </>
  )
}

export default User
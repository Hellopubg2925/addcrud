import { useState } from "react";
import { ListGroup, Button, Modal } from "react-bootstrap"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import './My.css'


export default function View(props) {

  const [s, setS] = useState({
    form: {
     ...props.mydata
    }
  });
 
 useEffect(()=>{

setS({form:props.mydata})

 },[props])
 

  
  


  return (<>



    <Modal show={props.show} onHide={props.f1}>
      <Modal.Header closeButton>
        <Modal.Title className="view">EMPLOYEE DATA</Modal.Title>
      </Modal.Header>
      <Modal.Body><ListGroup>
        <ListGroup.Item variant="dark" className="view"> ID : {s.form.id}</ListGroup.Item>
        <ListGroup.Item variant="primary" className="view" >Name : {s.form.employee_name}</ListGroup.Item>
        <ListGroup.Item variant="warning" className="view"> Email : {s.form.employee_email}</ListGroup.Item>
        <ListGroup.Item variant="success" className="view">Age : {s.form.employee_age}</ListGroup.Item>
        <ListGroup.Item variant="danger" className="view">Salary : {s.form.employee_salary}</ListGroup.Item>

      </ListGroup></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.f1}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  </>)

}
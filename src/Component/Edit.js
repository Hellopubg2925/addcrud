import { Button } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import setPostId from 'react'
import { Navigate, useNavigate } from "react-router-dom";
export default function Edituser(props) {
   

    const [s, setS] = useState({
        form: {
            ...props.mydata
        }
    });

    useEffect(()=>{
        
        setS({form:props.mydata})
    },[props])


  const{id}=useParams();

    const handlechange = (event) => {
        let obj = s.form;
        obj[event.target.name] = event.target.value;

        setS({ form: obj });

    }


    const handlesubmit = (event) => {
        
        event.preventDefault();
       userdata();
      
    }

    let data = s.form;
    const userdata = () => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(`http://localhost:3002/employee/${data.id}`, requestOptions)
            .then(response => response.json())
            .then(() =>{ 
                alert("update ")
               props.f1();
               props.call();
                

            
            });
        
           



        }


       

         
    return (
        <>


            <Modal show={props.show} onHide={() => props.f1()}>
                <form onSubmit={handlesubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>




                        <TextField className='ababab' fullWidth id="outlined-basic" color='success' label="Name" variant="outlined" size="small" required margin='dense' name="employee_name" value={s.form.employee_name} onChange={handlechange} />

                        <TextField fullWidth required className='ababab' id="outlined-basic" label="Email" variant="outlined" size="small" name="employee_email" value={s.form.employee_email} onChange={handlechange} />

                        <TextField fullWidth required className='ababab' id="outlined-basic" label="Age" variant="outlined" size="small" name="employee_age" value={s.form.employee_age} onChange={handlechange} />

                        <TextField fullWidth className='ababab' id="outlined-basic" label="Salary" variant="outlined" size="small" required name="employee_salary" value={s.form.employee_salary} onChange={handlechange} />





                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => props.f1()}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" >
                            Update
                        </Button>

                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}


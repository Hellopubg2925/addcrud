import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Navigate, useNavigate } from 'react-router-dom';
import Dashbaord from '../Component/Dashboard';
import './My.css';
import { Toast } from 'bootstrap';
export default function Login() {
    const[email,SetEmail]=useState('');
    const[password,SetPassword]=useState('')
    const navigate=useNavigate()
    const username=localStorage.getItem('email')
?localStorage.getItem('email'):'admin123@gmail.com'

const userpassword=localStorage.getItem('password')
?localStorage.getItem('password'):'admin123'

    const submit=(e)=>{
       
        e.preventDefault();
        if(email===username && password===userpassword){
                 alert('login Successful')
               navigate('/Dashboard')
              
        }
        else{
            alert('invalid email or password')
        }

    }
   
    return (
        <>

            <div className='login'>
                <div className='min'>

                    <form className='form' onSubmit={submit}>


                        <TextField fullWidth required  className='ababab' id="outlined-basic" label="Email" variant="outlined" size="small"  value={email} onChange={e =>SetEmail(e.target.value)}/>
                       
                        <TextField type="password" className='ababab' fullWidth id="outlined-basic" label="password" variant="outlined" size="small" required value={password} onChange={e =>SetPassword(e.target.value)} />

                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="keep me login" className='check' />

                        </FormGroup>
                        <h1 className='btn'><Button variant="contained" type='submit'>Login</Button></h1>
                        <h1 className='btn'><Button variant="contained" >Cancel</Button></h1>
                    </form>

                </div>
            </div>
        </>
    )

}
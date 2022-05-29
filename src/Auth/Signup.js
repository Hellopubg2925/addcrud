
import React, { useState } from 'react';
import { Button,TextField } from '@mui/material';
import './My.css' ;
import{toast} from 'react'
export default function Signup(){
    const[fname,SetFname]=useState('');
    const[lname,SetLname]=useState('');
    const[email,SetEmail]=useState('');
    const[password,SetPassword]=useState('');
    const[phone,SetPhone]=useState('');


    const handlesubmit=()=>{
    localStorage.setItem('fname',fname)
    localStorage.setItem('lname',lname)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    localStorage.setItem('phone',phone)
    }

    return(
        <>
        <div className='login'>
            <div className='min'>
                
                    <form className='form' onSubmit={handlesubmit}>

                   
                   <TextField className='ababab' fullWidth id="outlined-basic" color='success' label="First Name" variant="outlined" size="small" required margin='dense' value={fname} onChange={e=>SetFname(e.target.value)} />
                   
                   <TextField fullWidth required  className='ababab' id="outlined-basic" label="Second Name" variant="outlined" size="small" value={lname} onChange={e=>SetLname(e.target.value)}   />
                
                   <TextField fullWidth required className='ababab' id="outlined-basic" label="Email" variant="outlined" size="small" value={email} onChange={e=>SetEmail(e.target.value)} />
                  
                   <TextField fullWidth  className='ababab' id="outlined-basic" label="password" variant="outlined" size="small" required value={password} onChange={e=>SetPassword(e.target.value)} />
                  
                   <TextField fullWidth required  className='ababab' id="outlined-basic" label="Mobile no." variant="outlined" size="small" value={phone} onChange={e=>SetPhone(e.target.value)} />
                   <h1 className='btn'><Button variant="contained" type='submit' >Sign up</Button></h1>
                   <h1 className='btn'><Button variant="contained" >Cancel</Button></h1>
                    </form>
                
            </div>
        </div>
        </>
    )
    
    }
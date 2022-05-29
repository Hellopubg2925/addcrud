import { Link } from 'react-router-dom'
import React from 'react';
import './My.css'
import { display } from '@mui/system';

export default function Header(props) {
     return (
          <>

               <div className='main_f'>
                    <div className='min'>
                         <div className='half'></div>



                         <div className='header'>
                              <h1 className='span'><Link to=" " className='deco'>Home</Link></h1>
                              <h1 className='span'><Link to="About" className='deco'>About</Link></h1>
                              <h1 className='span'><Link to="Login" className='deco'>Login</Link></h1>
                              <h1 className='span'><Link to="Signup" className='deco'>Signup</Link></h1>
                         </div>
                        
                    </div>
                    <hr></hr> 
               </div>


          </>


     )
}
import React, { useEffect, useState } from "react"
import setStatus from 'react'
import Btn from "./Btn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Edit from "./Edit"
import Viewbtn, { Display } from "./Viewbtn"

import { Toast } from "bootstrap"



export default function Dashboard() {
    const [Employ, SetEmploy] = useState([])
    const [update, setUpdate] = useState({});
    const[search,setSearch]=useState(""); 
    const[sortValue,setSortValue]=useState("")
    const[page,setPage]=useState("5")
    const[pagination,setPagination] = useState({limitt:5,curr_page:1})

    useEffect(() => {
        loaduser();
    }, [pagination.curr_page])
      
    const loaduser = () => {
        console.log(pagination.curr_page)
        fetch(`http://localhost:3002/employee`).then((response) => response.json().then((data) => {
        if(data.length==0) {  
            let page = pagination.curr_page; 
            setPagination({...pagination,curr_page:page-1})
        } 
        else{
            SetEmploy(data);
        }   
        }))
    }
  
  


    

    const sortOption=["id","employee_name","employee_email","employee_salary","employee_age"];
   
    
    const paginate = (page)=>{
        console.log(page)
        if(page >=1){
            setPagination({...pagination,curr_page:page})
            
        }    
    }
 

 
    const deleteData = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:3002/employee/${id}`, requestOptions)
            .then(response => response.json())
            .then(() => {
                alert(" DELETED succefully");

                newData();
            }
            );
    }
    

    const newData = () => {

        loaduser()
    }

 const handlesort=(e)=>{
     let value=e.target.value;
     setSortValue(value);


     fetch(`http://localhost:3002/employee?_sort=${value}&_order=asc&_limit=${pagination.limitt}`).then((response) => response.json().then((data) => {
            SetEmploy(data)
            
        }))
 }

 
 

    return (<>
        <div className="save-data">
            <div className="mid-save"><Btn call={newData} /></div>
        </div>
        <div className="box-table">


            <div className="mid-table">
            <div className="display">
            <h5 className="next">Sort By</h5>
                <select 
               onChange={handlesort}
                value={sortValue}
                >
                <option>Please select option</option>
                {sortOption.map((v,i)=>(
               <option value={v} key={i}>{v}</option>

                ))}
                </select></div>
                
              

                <input type="text" placeholder="Search..."
                 className="search" 
                onChange={(e)=>{setSearch(e.target.value)}}
                />



                <table className="table" border="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SR.NO</th>
                            <th>ID</th>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Employee Age</th>
                            <th>Employee Salary</th>
                         

                            <th>EDIT</th>
                            <th>DELETE</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Employ.filter((v)=>{
                            if(search===""){
                                return v;
                            }
                            else if(v.employee_name.toLowerCase().includes(search.toLowerCase()) ||
                            v.employee_email.toLowerCase().includes(search.toLowerCase()) ||
                            v.employee_age.toLowerCase().includes(search.toLowerCase()) ||
                            v.employee_salary.toLowerCase().includes(search.toLowerCase())){
                                return v;
                            }
                            }).map((v, i) =>
                            <tr key={v.id}>
                                <th>#</th>
                                <th>{i + 1}</th>
                                <th>{v.id}</th>
                                <th>{v.employee_name}</th>
                                <th>{v.employee_email}</th>
                                <th>{v.employee_age}</th>
                                <th>{v.employee_salary}</th>
                             

                                <th onClick={() => setUpdate(v)} ><Viewbtn call={newData} obj={update} /></th>
                                <th><button className="data_btn" onClick={() => { deleteData(v.id) }}><FontAwesomeIcon icon={faTrash} /></button> </th>
                                <th onClick={() => setUpdate(v)}><Display call={newData} obj={update} /></th>
                            </tr>
                        )}

                    </tbody>
                </table>
                <div className="center">
                <span className="next" onClick={()=>paginate(pagination.curr_page-1)}>PREVIOUS</span> <span className="pre"> {pagination.curr_page} </span><span className="next" onClick={()=>paginate(pagination.curr_page+1)}>NEXT</span>
                </div>
                
               
                
            </div>
        </div>

    </>)

}
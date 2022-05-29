import { useState } from "react";
import Example from "./Example";
import './My.css'
export default function Btn(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formData = (data)=>{
        console.log(data)
    }
    return (
        <>
            <button  onClick={handleShow} className=" data_btn">
                Create New Record
            </button>
            <Example show={show} f1 = {handleClose} call={props.call} formSubmit = {formData}/>
        </>

    )

}
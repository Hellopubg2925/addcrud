import { useState } from "react";
import Edituser from "./Edit";
import './My.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash, faEdit ,faEye} from '@fortawesome/free-solid-svg-icons'
import View from "./View";
export default function Viewbtn(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <>
            <button  onClick={handleShow} className="data_edit">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </button>
            <Edituser show={show} f1 = {handleClose} mydata = {props.obj} call={props.call}/>
        </>

    )

}



export function Display(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
    <>
    <button  onClick={handleShow} className="data_view">
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
    </button>
    <View show={show} f1 = {handleClose} mydata = {props.obj} call={props.call}/>
</>
)

}
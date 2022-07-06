import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from 'react-bootstrap';
import './ButtonWar.css';


function ButtonWor(props) {

    const notify = () => toast("if you want to send a report to direct mail adress press button: Direct connection ");

    return (
        <div>
        <div>
        <Button id="crveno-war" type="button" class="btn btn-warning" onClick={notify} >Warning</Button>
        <ToastContainer />
        </div>
        </div>
    );
}

export default ButtonWor;
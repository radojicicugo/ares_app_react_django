
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from 'react-bootstrap';

function Test(props) {

    const notify = () => toast("It is very important to pay attention to entering personal data!");

    return (
        <div>
        <Button type="button" class="btn btn-warning" onClick={notify}>Warning</Button>
        <ToastContainer />
        </div>
    );
}

export default Test;
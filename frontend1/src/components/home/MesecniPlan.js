import React from 'react';
import NavBarMenu from '../NavBarMenu';
import {Button} from 'react-bootstrap';
import ButtonWor from './ButtonWor';
import './MesecniPlan.css';


function MesecniPlan(props) {
    return (
        <div>
         <NavBarMenu/> 
             <div id="coverr"></div>
         <div id="pozadina">
         <h2 className="raport-h3" style={{margin:'0px', padding:'15px', color:'white'}}><strong>Report:</strong></h2>
         <div style={{paddingBottom:'40px'}} className="bt-warning">
             <ButtonWor/>
         </div>
         <div>
         <a href="mailto:Aressg@outlook.com"><Button type="button" class="btn btn-info">Direct connection</Button></a> 
         </div>
         </div>
       </div>
    );
}

export default MesecniPlan;
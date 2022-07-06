import React, {useState, useEffect, useMemo, useRef} from 'react';

import axios from 'axios';
import './Aktivni.css';
import {Table, Container} from 'react-bootstrap';
import {Link, useHistory, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DateTime from '../DateTime';
import NavBarMenu from '../NavBarMenu';
import Poruka from './Poruka';





function AktivniBorko(props) {

const delay = 5;



const [ugljesa, setUgljesa] = useState([])
const [show, setShow] = useState(true)


const { id } = useParams();
//const history = useHistory();
const history = useNavigate();



const GetUgljesa = async () => {
  const {data} = await axios.get('http://localhost:8000/borko/')
  console.log(data)
  setUgljesa(data) 
}

useEffect(() => {
  GetUgljesa();
 
  {/*let timer1 = setTimeout(() => setShow(false), delay * 20000);
  return () => {
    clearTimeout(timer1)
  }*/}
},[])

    return (
        <div className="aktivni-pozadina">
           
            <div style={{padding:'10px', margin:'10px'}}>
              
            </div>   
           
            {
                ugljesa.map((item, index) => (
                    <div>
{
    show ? (
      <div className="table" > 
<Table  key={index} className="box-aktivni" style={{background: <AktivniBorko/> ? "rgb(174, 249, 172)" : ""}} striped bordered hover responsive size="sm" >
<thead>
    <tr>
      <th>id</th>
      <th>Prezime</th>
      <th>Pozicija</th>
      <th style={{color:'red'}}>Pocetak</th>
      <th style={{color:'red'}} >Kraj</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{item.id}</td>
      <td>{item.prezime}</td>
      <td>{item.pozicija}</td>
      <td>{item.pocetak}</td>
      <td>{item.zavrsetak}</td>
    </tr>
  </tbody>
</Table>
   </div>
    ):(
        <div>Trenutno nema aktivnih agenata na pozicijama!

        </div>
    )
   } 
     </div>
   ))
    }
  
 </div>
    );
}

export default AktivniBorko;
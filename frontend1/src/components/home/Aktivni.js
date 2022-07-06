import React, {useState, useEffect, useMemo, useRef} from 'react';
import axios from 'axios';
import './Aktivni.css';
import {Table, Container} from 'react-bootstrap';
import {Link, useHistory, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DateTime from '../DateTime';
import NavBarMenu from '../NavBarMenu';
import Poruka from './Poruka';
import AktivniGrujic from './AktivniGrujic';
import AktivniJeremic from './AktivniJeremic';
import AktivniTomo from './AktivniTomo';
import AktivniMario from './AktivniMario';
import AktivniVlada from './AktivniVlada';
import AktivniDinc from './AktivniDinc';
import AktivniBorko from './AktivniBorko';
import AktivniAngelovski from './AktivniAngelovski';
import Aktivni001 from './Aktivni001';
import Aktivni002 from './Aktivni002';
import Aktivni003 from './Aktivni003';
import Aktivni004 from './Aktivni004';
import Aktivni005 from './Aktivni005';
import Aktivni006 from './Aktivni006';
import Aktivni007 from './Aktivni007';
import Aktivni008 from './Aktivni008';
import Aktivni009 from './Aktivni009';
import Aktivni10 from './Aktivni10';
import AktivniVane from './AktivniVane';




function Aktivni(props) {

const delay = 5;



const [ugljesa, setUgljesa] = useState([])

const [show, setShow] = useState(true)

const [poruka, setPoruka] = useState(false)
const [date, setDate] = useState(new Date())

const { id } = useParams();
//const history = useHistory();
const history = useNavigate();



//Idemo novi pokusaj
const onChange = date =>{
setDate(date);
}

//===========

const GetUgljesa = async () => {
  const {data} = await axios.get('http://localhost:8000/ugljesa/')
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
            <NavBarMenu /> 
            <div style={{padding:'10px', margin:'10px'}} onChange={onChange} value={date}>
              {date.toString()}
            </div>   
            <h3 className="m-5">Aktivni agenti po pozicijama:</h3>
          <h2 style={{margin:'30px'}}>Ugljesa</h2>
          <hr></hr>
            {
                ugljesa.map((item, index) => (
                    <div>
{
    show ? (
      <div className="table" > 
<Table  key={index} className="box-aktivni" style={{background: <Aktivni /> ? "greenyellow" : ""}} striped bordered hover responsive size="sm" >
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
  <div>
<h2>Jeremic</h2>
<hr></hr>
 <AktivniJeremic/>
 </div> 
 <div>
   <h2>Tomo</h2>
   <hr></hr>
 <AktivniTomo/>
 </div> 
 <div>
<h3>Grujic</h3>
<hr></hr>
 <AktivniGrujic/>
 </div>
 <div>
<h3>Mario</h3>
<hr></hr>
 <AktivniMario/>
 </div>
 <div>
<h3>Vlada</h3>
<hr></hr>
 <AktivniVlada/>
 </div>
 <div>
<h3>Dinc</h3>
<hr></hr>
 <AktivniDinc/>
 </div>
 <div>
<h3>Vane</h3>
<hr></hr>
 <AktivniVane/>
 </div>
 <div>
<h2>Borko</h2>
<hr></hr>
 <AktivniBorko/>
 </div>
 <div>
<h2>Angelovski</h2>
<hr></hr>
 <AktivniAngelovski/>
 </div>
 <div>
<h2>Agent 001</h2>
<hr></hr>
 <Aktivni001/>
 </div>
 <div>
<h2>Agent 002</h2>
<hr></hr>
 <Aktivni002 />
 </div>
 <div>
<h2>Agent 004</h2>
<hr></hr>
 <Aktivni003/>
 </div>
 <div>
<h2>Agent 004</h2>
<hr></hr>
 <Aktivni004/>
 </div>
 <div>
<h2>Agent 005</h2>
<hr></hr>
 <Aktivni005/>
 </div>
 <div>
<h2>Agent 006</h2>
<hr></hr>
 <Aktivni006/>
 </div>
 <div>
<h2>Agent 007</h2>
<hr></hr>
 <Aktivni007/>
 </div>
 <div>
<h2>Agent 008</h2>
<hr></hr>
 <Aktivni008/>
 </div>
 <div>
<h2>Agent 009</h2>
<hr></hr>
 <Aktivni009/>
 </div>
 <div>
<h2>Agent 10</h2>
<hr></hr>
 <Aktivni10/>
 </div>
 </div>
    );
}

export default Aktivni;
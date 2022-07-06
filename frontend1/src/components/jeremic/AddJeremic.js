import React, {useEffect, useState} from 'react';
import { useHistory, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {Button} from 'react-bootstrap'
import NavBarMenu from '../NavBarMenu';





function AddJeremic(props) {

const [pozicija, setPozicija] = useState('')
const [pocetak, setPocetak] = useState('')
const [zavrsetak, setKrajSmene] = useState('')
const [dan, setDan] = useState('')
const [pauza, setPauza] = useState('')
const [opis, setOpis] = useState('')
const [sati, setUkupnoSati] = useState('')
const [total, setTotal] = useState('')
const [prezime, setPrezime] = useState('')


//const history = useHistory();
const history = useNavigate();

    const addProductInfo = async () => {
        let formField = new FormData()
      
        formField.append('pozicija',pozicija) 
        formField.append('pocetak', pocetak)
        formField.append('zavrsetak', zavrsetak)
        formField.append('pauza', pauza)
        formField.append('dan', dan)
        formField.append('opis', opis)
        formField.append('sati', sati)
        formField.append('total', total)
        formField.append('prezime', prezime)
      
        await axios({
          method: 'post',
          url: 'http://localhost:8000/jeremic/',
          data: formField
          
        }).then((response) =>{
      
            console.log(response.data);
            history('/')
        })
      }
      
      
          return (
              <div>
                <NavBarMenu />
                <h3>Upis agenta za poziciju:</h3>
                 <div className="container">
                    <div className="form-group m-2">
                     <input 
                     type='text'
                     className="form-control form-control-lg"
                     placeholder="Prezime:"
                     name="prezme"
                     value={prezime}
                     onChange={(e) => setPrezime(e.target.value)}
                     />
                    </div> 
                    <div className="form-group m-2">
                     <input 
                     type='text'
                     className="form-control form-control-lg"
                     placeholder="Unesi Poziciju:"
                     name="pozicija"
                     value={pozicija}
                     onChange={(e) => setPozicija(e.target.value)}
                     />
                    </div> 
                   <div className="form-group">
                     <input id="date1"
                     type='datetime-local'
                     className="form-control form-control-lg"
                     placeholder="Unesi Pocetak smene:"
                     name="pocetak"
                     value={pocetak}
                     onChange={(e) => setPocetak(e.target.value)}
                        />
                   </div>
                   <div className="form-group">
                     <input id="date2"
                     type='datetime-local'
                     className="form-control form-control-lg"
                     placeholder="Unesi Kraj smene:"
                     name="zavrsetak"
                     value={zavrsetak}
                     onChange={(e) => setKrajSmene(e.target.value)}
                     />
                   </div>
                   <div className="form-group">
                     <input 
                     type='text'
                     className="form-control form-control-lg"
                     placeholder="Unesi Pauza: "
                     name="pauza"
                     value={pauza}
                     onChange={(e) => setPauza(e.target.value)}
                     />
                   </div>
                   <div className="form-group">
                              <input 
                     type= 'datetime'
                     className="form-control form-control-lg"
                     placeholder="Danasnji dan: "
                     name="dan"
                     value={dan}
                     onChange={(e) => setDan(e.target.value)}
                     />
                   </div>
                   <div className="form-group">
                     <textarea 
                     type='text'
                     className="form-control form-control-lg"
                     placeholder="Unesi Opis: "
                     name="opis"
                     value={opis}
                     onChange={(e) => setOpis(e.target.value)}
                     />
                   </div>   
                   <div className="form-group">
                     <input 
                     type='number'
                     className="form-control form-control-lg"
                     placeholder="Ukupno sati: "
                     name="sati"
                     value={sati}
                     onChange={(e) => setUkupnoSati(e.target.value)}
                     />
                   </div>   
                   <div className="form-group">
                     <input 
                     type='number'
                     className="form-control form-control-lg"
                     placeholder="Ukupno sati: "
                     name="total"
                     value={total}
                     onChange={(e) => setTotal(e.target.value)}
                     />
                   </div>   
                   <Button color="success" className="btn m-3" onClick={addProductInfo}>Dodaj na listu</Button>
                 </div>
                 </div>
    );
}

export default AddJeremic;
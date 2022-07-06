import axios from 'axios';
import React, {useState, useEffect } from 'react';
import {useParams, useHistory, useNavigate} from 'react-router-dom'
import {Button} from 'reactstrap';
import NavBarMenu from '../NavBarMenu';


function UpdateDinc(props) {

    //const history = useHistory();
    const history = useNavigate();
    const { id } = useParams();

    const [pozicija, setPozicija] = useState(null)
    const [pocetak, setPocetak] = useState(null)
    const [zavrsetak, setKrajSmene] = useState(null)
    const [pauza, setPauza] = useState(null)
    const [dan, setDan] = useState(null)
    const [opis, setOpis] = useState(null)
    const [sati, setUkupnoSati] = useState(0)
    const [total, setTotal] = useState(0)
    const [prezime, setPrezime] = useState(null)

    useEffect(() => {
     loadProducts();
    }, [])
    


    const loadProducts = async () => {
      const result = await axios.get(`http://localhost:8000/dinc/${id}`)
      console.log(result.data.pozicija)
      setPozicija(result.data.pozicija)
      setPocetak(result.data.pocetak)
      setKrajSmene(result.data.zavrsetak)
      setPauza(result.configdata.pauza)
      setDan(result.data.dan)
      setOpis(result.data.opis)
      setUkupnoSati(result.data.sati)
      setTotal(result.data.total)
      setPrezime(result.data.prezime)
    }
    


   const UpdateProductInfo = async () => {
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
        method: 'PUT',
        url: `http://localhost:8000/dinc/${id}/`,
        data: formField
    }).then(response => {
        console.log(response.data)
        history("/chat")
    })
   
   }

    return (
        <div>
          <NavBarMenu/>
            <h3>Update Produkt</h3>
            <div className="container">
            <div className="form-group m-2">
               <input 
               type='text'
               className="form-control form-control-lg"
               placeholder="Prezime:"
               name="prezime"
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
             <Button color="success" className="btn m-3" onClick={UpdateProductInfo}>Update</Button>
           </div>
       </div>
      
    );
}

export default UpdateDinc;
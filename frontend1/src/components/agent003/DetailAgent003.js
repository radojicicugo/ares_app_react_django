import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarMenu from '../NavBarMenu';

function DetailAgent003(props) {

const [product, setProduct] = useState("")

const { id } = useParams();
//const history = useHistory();
const history = useNavigate();

const getSingleProduct = async () =>{
 const { data } = await axios.get(`http://localhost:8000/agent03/${id}/`)
 console.log(data)
 setProduct(data)
}

useEffect(() => {
getSingleProduct();
}, [])

//Delete product
const deleteProduct = async () => {
 await axios.delete(`http://localhost:8000/agent03/${id}/`)
 history('/')
}

    return (
        <div>
            <NavBarMenu/>
            Ovo je DetailProduct
            <div className='single-product-info'>
           <p>Prezime: {product.prezime}</p>
           <p>Dan: {product.dan}</p>
           <p>Pozicija: {product.pozicija}</p>
           <p>Pocetak: {product.pocetak}</p>
           <p>Kraj: {product.zavrsetak}</p>
           <p>Pauza: {product.pauza}</p>
           <p>Opis: {product.opis}</p>
           <p>Broj sati: {product.sati}</p>
           <p>Total: {product.total}</p>
            </div>
        <Link to={`/${product.id}/updateagent003`} className="btn btn-primary m-2">Update</Link>
        <Link className="btn btn-danger m-2" onClick={() => deleteProduct(product.id)}>Delete</Link>
        </div>
    );
}

export default DetailAgent003;
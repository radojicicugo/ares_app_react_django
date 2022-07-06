
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {Button, Card, Container} from 'react-bootstrap'

import NavBarMenu from '../NavBarMenu';



function ShowBorko(props) {
  
  console.log(props)
 
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        const response = await axios.get("http://127.0.0.1:8000/borko/")
        console.log(response.data)
        setProduct(response.data)
      }

    useEffect(() => {
      getProduct();
    
    }, [])

return(
    <div className="showProduct-nav">
      <NavBarMenu/>
      <h3 className="ugljesa-h3">Borko</h3>
      <Link className="btn btn-success" to={'/addborko'}>Dodaj Novo</Link>
        {
            product.map((el, index) => (
<Container className="map">
  <Card className="card" key={index} style={{ width: '18rem'}} >
  <Card.Body className="body-body">
    <Card.Title className="mb-2 text-muted">Prezime: <strong>{el.prezime}</strong></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Datum: {el.dan}</Card.Subtitle>
    <Card.Title>Pozicija: {el.pozicija}</Card.Title>
    <Card.Text>redni broj/id: {el.id}</Card.Text>
    <Card.Text >Pocetak smene: {el.pocetak}</Card.Text>
    <Card.Text >Kraj smene: {el.zavrsetak}</Card.Text>
    <Card.Text>Pauza: {el.pauza}</Card.Text>
    <Card.Text>Opis: {el.opis}</Card.Text>
    <Card.Text className="brojSati"><strong>sati:</strong> {el.sati}</Card.Text>
    <Card.Text className="brojSati"><strong>Total:</strong> {el.total}</Card.Text>
    <Link to={`/${el.id}/updateborko/`} className="btn btn-primary" >Detail</Link>
  </Card.Body>
</Card>
</Container>
            ))
        }
    </div>
);
}
export default ShowBorko;


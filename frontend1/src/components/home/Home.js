import React, {useState, useRef, useEffect} from 'react';
import Test from '../../Test';
import AddProduct from '../AddProduct';
import ShowProduct from '../ShowProduct';
import './Home.css';
import video from '../../video/video.mp4' ;

import {gsap} from 'gsap';
import {Link} from 'react-router-dom';
import NavBarMenu from '../NavBarMenu';

import { RiShieldFlashLine } from "react-icons/ri";



function Home(props) {

    let frontNaslov = useRef(null)
    let frontBtn = useRef(null)
    let linija = useRef()
    
    useEffect(() => {
      gsap.timeline().to(frontNaslov.current, {opacity:8, duration:7.5, scale:0.7, ease:"back"})
     // gsap.timeline().from(frontNaslov.current, {opacity:10, duration:4.5, scale:0.2, ease:"back"})
      //gsap.timeline().from(frontBtn.current, { marginLeft:"345px", opacity:7, duration:4.5, scale:0.2, ease:"back"})
      //gsap.timeline().to(linija.current, {opacity: 7, duration:3, rotation: 360, ease:"back"})
    }, [])


    return (
        <div className="home-home" >
          <div id="back-p">
            <div className="videos" id="background-video" >
       <video autoPlay loop muted>
           <source id="videos" src={video} type="video/mp4" />
       </video>
       <div id="h1-front">
           <h1 ref={frontNaslov} style={{fontSize:'45px'}} id="h1">Ares Security<strong className="linija">_server</strong></h1>
       </div>
          <Link to="/pocetna"> <div id="btn-front">
           <button ref={frontBtn} id="btn-front" type="button" class="btn btn-secondary" ><h2 style={{color:'white'}}><RiShieldFlashLine/></h2></button>
           </div></Link>
    <div>
       </div>
    </div>
    </div> 
    </div>
    );
}

export default Home;
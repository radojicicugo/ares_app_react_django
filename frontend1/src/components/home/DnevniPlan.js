import React, {useState, useEffect} from 'react';
import './DnevniPlan.css';
import { db } from '../../fire';

import {query,onSnapshot, addDoc, collection } from 'firebase/firestore';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactioPlugin from '@fullcalendar/interaction';
import { Container } from 'react-bootstrap';
import NavBarMenu from '../NavBarMenu';


import { Calendar } from '@fullcalendar/core';

import timeGridPlugin from '@fullcalendar/timegrid'

function DnevniPlan(props) {

const [data, setData] = useState([])

useEffect(() => {
const q = query(collection(db, 'ares_db_react'));
const unsub = onSnapshot(q, (snap) => {
    const array:[] = snap.docs.map(doc => {
        return{
            id:doc.id,
            title:doc.get('title'),
            start:doc.get('start').toDate(),
            allDay:doc.get('allDay')
        }
    });
    setData([...array]);
})
  return () => {unsub()}
}, [])


const handleDateClick = (e:DateClickArg) => {
    if(e.jsEvent.altKey){
        const title = prompt('enter titlle', e.dateStr);
        const event = {
            title: title ? title : e.dateStr,
            start: e.date,
            allDay: true
        }
        addDoc(collection(db, 'ares_db_react'), event)
    } 
}
  function MouseOver(event){
    event.target.style.background = '';
  }
  
    return (
        <div id="calend">
            <NavBarMenu/>
        <Container  onMouseOver={MouseOver} className="">
        <FullCalendar
        dayMaxEventRows={true}
        events={data}
        plugins={[dayGridPlugin, interactioPlugin]} 
        dateClick={handleDateClick}
        />
        </Container>
        </div>
    );
}

export default DnevniPlan;
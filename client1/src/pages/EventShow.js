import React, { useEffect, useState } from "react";
import Inputs from "../components/Inputs";
import Date from "../components/date"
import Button from '@mui/material/Button';
import QRCode from "react-qr-code";

import { useDispatch, useSelector } from 'react-redux'
import { AddEventUser,GetEventUser } from "src/redux/actions/eventUserActions";
export default function EventListPage() {
  const dispatch = useDispatch()
  const Datacomment = useSelector(state => {return state.eventUser.eventUser||{}})
  const events = useSelector(state => state.events.events)

  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)
  const [event, setEvent] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("event");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const result = events.filter((test) => test.title == event.title);
  console.log(result[0].title)

 


  useEffect(() => { 
dispatch(GetEventUser(event.title))
    const saved = localStorage.getItem("event");

    

}, [])
  const handleOpen = () => 
  {    
    dispatch(AddEventUser(event, setShow, setMessage))
    dispatch(GetEventUser(event.title))
  };
  
  return (
    <div className="container p-4 mt-4">
<div className="alert alert-success" role="alert" style={{ display: show ? "block" : "none" }}>
    {message}
</div>
    <div >
       
       <div >
           <div className="d-flex">
            <div><h2>Event: {event.title||""}</h2>
           <br/> <p>{event.date||""}</p></div>
           </div>
           <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
            <span  dangerouslySetInnerHTML={{ __html: result[0].description||"" }} /> 
            </div>
            <Button variant="outlined" onClick={handleOpen}>interested</Button>
            </div>
            <QRCode value={JSON.stringify(Datacomment)} />
            </div>
            </div>
  );
}
import React , { useState } from "react";
import {Grid} from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../App/api/SampleData";


export default function EventDashboard({formOpen , setFormOpen , selectEvent , selectedEvent}){
  
  const [events , setEvents]= useState(sampleData);

  function handleCreateEvent(event){
      setEvents([...events , event])
  }

  function handleUpdateEvent(updatedEvent){
      setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent: evt));
      selectEvent(null);
  }

  function handleDeleteEvent(eventID){
    setEvents(events.filter(evt => evt.id !== eventID));

  }


 
    return(
        <Grid>
        <Grid.Column width={10}>
            <EventList events = {events} selectEvent = {selectEvent} deleteEvent ={handleDeleteEvent}/>      
 </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && 
<EventForm 
  setFormOpen={setFormOpen} 
  setEvents={setEvents} 
  createEvent= {handleCreateEvent}
  updateEvent = {handleUpdateEvent}
  selectedEvent ={selectedEvent}
  key = {selectedEvent ? selectedEvent.id : null}
   /> }
        </Grid.Column>
    
      </Grid>
    )
}

import React from 'react'
import Event from './Event';


const EventList = (props) => {
  let events = props.events
  console.log(events,"<<<<propsEvent");
  let eventsComponent = events.map(event => { return <Event
    key={event.id}
    id={event.id}
    name={event.event_name}
    label={event.label}
    content={event.event_content}
    price={event.Price}
    sendFraud={props.sendFraud}/>
  })

  return (
    <div>{eventsComponent}</div>
  )
}


export default EventList;

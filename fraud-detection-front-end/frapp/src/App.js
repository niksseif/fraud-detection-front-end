import React, { Component } from 'react';
import NavBar from  './component/NavBar'
import EventList from  './component/EventList'
import Footer from './component/Footer'
import FraudList from './component/FraudList'
import UnFraudList from './component/UnFraudList'



import './App.css';

class App extends Component {
  state = {
    events:[],

    fraudEvents: [{
        "id": 1,
        "event_name": "Party",
        "label": "Low",
        "event_content": "We are going to have a huge party come and join us",
        "Price": 5,
        "Prediction": 4,
        "Country": "US"
        },
        {
        "id": 2,
        "event_name": "Dance",
        "label": "Medium",
        "event_content": "We are going to have a huge party come and join us",
        "Price": 5,
        "Prediction": 6,
        "Country": "US"
        },],

UnFraudEvents:[{

      "id": 3,
      "event_name": "Party",
      "label": "high",
      "event_content": "We are going to have a huge party come and join us",
      "Price": 5,
      "Prediction": 1,
      "Country": "US"

      }]

  }
  // get data from the API
  componentDidMount = () => {
    console.log("component did mount")
     this.getDataFromAPI()
  }

  getDataFromAPI = async () => {
      // fetch products

      const eventsJSON = await fetch('http://localhost:3000/events')
      console.log("i am here ");

      let events = await eventsJSON.json()
      console.log(events,"<<<<events");
      this.setState({ events })
      console.log("got the events")
    }


  // componentDidMount(){
  //   console.log('i am here')
  //   fetch('http://localhost:3000/events').then(response => response.json()).then(events => {
  //     console.log(events, 'events in comonent did mount')
  //     let newEvents =  events.map( event => {
  //       return {
  //         id: event.id,
  //         name: event.name,
  //         country: event.country,
  //
  //
  //       }
  //     })
  //     this.setState({ ...this.state.events,  newEvents })
  //     console.log(this.state.events, 'EVENTS IN STATE')
  //   })
  //
  // }

    // _______________________
    // post the fraud event to fraud table API
  //   addFraud = async (FraudList) => {
  //   const { event_name, event_content } = FraudList
  //   const response = await fetch("http://localhost:3000/events", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       event_name,
  //       event_content
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   })
  //   const event = await response.json()
  //   console.log("events === ", this.state.events);
  //   console.log("new message == ", event);
  //
  //   this.setState({
  //     events: [
  //       ...this.state.events,
  //       event
  //     ],
  //     display: !this.state.display
  //   })
  //   console.log(this.state);
  // }
// this is a function for sending fraud to the fraud list
  sendFraud = (name, id ,label, price) => {
        // e.preventDefault()
        console.log("clicked");
        console.log("name", name,"id", id ,"label", label, "price", price);
        this.setState({
          fraudEvents:[
            ...this.state.fraudEvents,
            {
              name,
              id,
              label,
              price
            }
          ]
        })
        let filteredEvents = this.state.events.filter(event => event.id !== id)
        console.log("filtered in app", filteredEvents)
        this.setState({
          events: [...filteredEvents]
        })
        // alert('Are you sure? by clicking ok, you are sending this event to fraud list')
      }
  sendUnFraud = (name, id, label, price) =>{
    this.setState({
      UnFraudEvents:[
        ...this.state.UnFraudEvents,
        {
          name,
          id,
          label,
          price
        }
      ]
    })
  }


  render() {
    return (
      <div className="App">

        <NavBar />
        <EventList events={this.state.events} sendFraud={this.sendFraud} sendUnFraud={this.sendUnFraud}/>
        <FraudList fraudEvents={this.state.fraudEvents} />
        <UnFraudList UnFraudEvents={this.state.UnFraudEvents} />
        <Footer />


      </div>
    );
  }
}

export default App


import React from 'react'
import { List } from 'semantic-ui-react'
import PopupCard from './PopupCard'




const Event = (props) => {
console.log(props,"<<eventpropsnow");
if (props.label  === "low"){
  var newColor = this.state.color === '' ? 'blue' : '';
    this.setState({ color : newColor})
} else if ( props.lblb === "high" ){
   newColor = this.state.color === '' ? 'red' : '';
    this.setState({ color : newColor})
}

return(

  <List divided relaxed >
    <List.Item>
      <List.Content>
          <PopupCard
            className="mt-10"
            name={props.name}
            id={props.id}
            content={props.content}
            label={props.label}
            price={props.price}
            key={props.id}
            sendFraud={props.sendFraud}></PopupCard>

        <List.Description as='a'>{props.label}</List.Description>
      </List.Content>
    </List.Item>
  </List>

);
}


export default Event

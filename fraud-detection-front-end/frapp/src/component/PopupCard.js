import React, { Component } from 'react';
import { Header, Button, Popup, Grid  } from 'semantic-ui-react'
import App from '../App'


class PopupCard extends Component {
  // console.log("HELLO ", props.name);
  render(){
  const { addFraud, events, sendFraud, sendUnFraud } = this.props
  console.log("props in popup", this.props);
  //  sending fraud to the fraud list



  return(
    <Popup
      trigger={<a>{this.props.name}</a>}
      header='EventsName'
      content={this.props.content}
      button = {<Button icon>Fraud</Button>}
      on={['click']}>
      <Grid centered divided columns={3}>
        <Grid.Column textAlign='center'>
          <Header as='h4'>{this.props.name}</Header>
          <p>
            <b></b> {this.props.content}
          </p>
          <Header as='h3'>{`$${this.props.price}.00 `}</Header>
        </Grid.Column>
      </Grid>
      <Button
        color='blue'
        content='Unfraud'
        onClick ={() => sendUnFraud(this.props.name, this.props.id, this.props.label, this.props.price)}
        fluid />
      <Button
        color='red'
        content='Fraud'
        onClick={() => sendFraud(this.props.name, this.props.id, this.props.label, this.props.price)}
        fluid />

      </Popup>
    );
}
}




export default PopupCard;

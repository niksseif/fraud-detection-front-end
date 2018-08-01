
import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const FraudList = ({ fraudEvents }) => {

// console.log(props, "<<<<props in the fraudlist")

return (

  <Table celled striped>
    <Table.Header color="red">
      <Table.Row>
        <Table.HeaderCell colSpan='3'>FraudList</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>

      {fraudEvents.map(event => (<Table.Row key={event.id}>
        <Table.Cell collapsing>
          <Icon />
          {event.label}
        </Table.Cell>
        <Table.Cell>{event.event_name ? event.event_name : event.name}</Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          {event.Price ? event.Price : event.price}
        </Table.Cell>
      </Table.Row>))}

    </Table.Body>
  </Table>
)
}

export default FraudList;

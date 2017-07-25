import React from 'react'
import {Grid, Row, Col, Panel, Glyphicon, Button} from 'react-bootstrap/lib'
import Form from './component/Form'
import List from './component/List'
import './app.css'

const title = (
  <h3><Glyphicon glyph="wrench" /> My first React-app</h3>
)

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [{
        id: 1,
        firstname: 'John',
        lastname: 'Doe'
      },
      {
        id: 2,
        firstname: 'Jane',
        lastname: 'Doe'
      },
      {
        id: 3,
        firstname: 'Victor',
        lastname: 'Frankenstein'
      }]
    }
  }

  check() {
    console.log(this.state)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col smOffset={2} sm={8}>
            <Panel header={title} bsStyle="primary">
              <Form users={this.state.users}/>
              <List users={this.state.users}/>
            </Panel>
          </Col>
          <Col sm={2}><Button onClick={this.check.bind(this)}>check</Button></Col>
        </Row>
      </Grid>
    )
  }
}


export default App

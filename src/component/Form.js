import React from 'react'
import {Grid, Row, Col, FormControl, Button, Glyphicon} from 'react-bootstrap/lib'
import List from './List'
import './form.css'



class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      users: props.users
    }
  }
  updateFirstName(event) {
    this.setState({firstname: event.target.value})
  }

  updateLastName(event) {
    this.setState({lastname: event.target.value})
  }

  addUser() {
    let id = this.state.users.length + 1
    let users = this.state.users
    users.push({
      id: id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    })
    this.setState({users: users})
  }

  render() {
    return(
        <Grid fluid={true}>
          <Row className="mb-20">
            <Col sm={5}><FormControl type="text" placeholder="firstname..." onChange={this.updateFirstName.bind(this)}/></Col>
            <Col sm={5}><FormControl type="text" placeholder="lastname..." onChange={this.updateLastName.bind(this)}/></Col>
            <Col sm={2}><Button bsStyle="success" onClick={this.addUser.bind(this)}><Glyphicon glyph="plus"/></Button></Col>
          </Row>
          <List users={this.state.users}/>
        </Grid>
      )
  }

}

export default Form
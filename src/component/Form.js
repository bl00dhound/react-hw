import React from 'react'
import {Grid, Row, Col, FormControl, Button} from 'react-bootstrap/lib'
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
    let id = this.state.users.length
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
            <Col sm={2}><Button onClick={this.addUser.bind(this)}>Add user</Button></Col>
          </Row>
        </Grid>
      )

  }

}

export default Form
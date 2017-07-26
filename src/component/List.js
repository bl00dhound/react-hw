import React from 'react'
import {Alert, Button, Row, Glyphicon} from 'react-bootstrap/lib'



class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: props.users
    }
  }

  viewUser(userId) {
    console.log(userId)
  }

  deleteUser(userId) {
    console.log(userId)
  }

  renderList(users) {
    return users.map( user => <Item key={user.id}
                                    firstname={user.firstname}
                                    lastname={user.lastname}
                                    deleteUser={this.deleteUser.bind(this, user.id)}
                                    viewUser={this.viewUser.bind(this, user.id)}/>)
  }

  render() {
     return(
       <Row>
         {this.renderList(this.state.users)}
       </Row>
     )
  }

}

const Item = (props) => <Alert>{props.firstname} {props.lastname}
                          <Button onClick={props.viewUser} bsStyle='primary'>View</Button>
                          <Button onClick={props.deleteUser} bsStyle='danger'><Glyphicon glyph='trash'/></Button>
                        </Alert>


export default List
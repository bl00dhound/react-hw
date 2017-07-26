import React from 'react'
import {Alert, Button, Row, Glyphicon} from 'react-bootstrap/lib'
import './list.css'


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

  renderList(users) {
    return users.map( user => <Item key={user.id}
                                    firstname={user.firstname}
                                    lastname={user.lastname}
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

const Item = (props) => <Alert className='relative'>{props.firstname} {props.lastname}
                          <Button className="alert_btn" onClick={props.viewUser} bsStyle='primary'>View</Button>
                        </Alert>


export default List
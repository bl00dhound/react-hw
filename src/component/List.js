import React from 'react'
import {Alert, Button, Row} from 'react-bootstrap/lib'
import R from 'ramda'


class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: props.users
    }


  }

  renderAlert(user) {
    return <Alert key={user.id}>{user.firstname} {user.lastname}</Alert>
  }

  renderList(users) {
    return R.map(this.renderAlert)(users)
  }

  render() {
     return(
       <Row>
         {this.renderList(this.state.users)}
       </Row>
     )
  }

}

export default List
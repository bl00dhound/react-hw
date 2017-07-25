import React from 'react'
import {Alert, Button} from 'react-bootstrap/lib'
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

  check() {
    console.log(this.state)
  }

  render() {
     return(
       <div>
         {this.renderList(this.state.users)}
         <Button onClick={this.check.bind(this)}>List check</Button>
       </div>
     )
  }

}

export default List
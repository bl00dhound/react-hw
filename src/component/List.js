import React from 'react'
import R from 'ramda'
// import {Alert, Button, Row} from 'react-bootstrap/lib'
import './list.css'

let that = null

class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: props.users
    }
    that = this
  }


  render() {
    return (
      <div>{R.map(renderItem)(that.props.users)}</div>
    )
  }
}

const renderItem = (user) => <div className='list_item' key={user.id}>{user.name}
                              <button onClick={that.props.deleteUser.bind(that, user.id)}>X</button>
                            </div>

export default List
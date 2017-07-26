import React from 'react'
import R from 'ramda'
import {ListGroup, ListGroupItem, Button, Glyphicon} from 'react-bootstrap/lib'
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
      <ListGroup className='list'>{R.map(renderItem)(that.props.users)}</ListGroup>
    )
  }
}

const renderItem = (user) => <ListGroupItem href='#' key={user.id}>{user.name}
                              <Button className='delete_btn'
                                      onClick={that.props.deleteUser.bind(that, user.id)}
                                      bsStyle='danger'
                                      bsSize='xsmall'><Glyphicon glyph='remove'/></Button>
                            </ListGroupItem>

export default List
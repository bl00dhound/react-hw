import React from 'react'
import {FormGroup, InputGroup, FormControl, Button, Glyphicon} from 'react-bootstrap/lib'
import './form.css'


class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: props.users
    }
  }

  render() {
    return (
        <FormGroup className='add_form'>
          <InputGroup>
            <FormControl type='text'
               onChange={this.props.updateName}
               placeholder='enter name'/>
            <InputGroup.Button>
              <Button bsStyle='success' onClick={this.props.addUser}><Glyphicon glyph='plus'/></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      )
  }
}

export default Form
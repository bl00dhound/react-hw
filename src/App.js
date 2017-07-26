import React from 'react'
import './app.css'
import Form from './component/Form'
import List from './component/List'
import R from 'ramda'
//
// const title = (
//   <h3><Glyphicon glyph="globe" /> My first React-app</h3>
// )

let storeName = ''

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [{
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Jane',
      },
      {
        id: 3,
        name: 'Victor',
      }]
    }
  }

  updateName(event) {
    storeName = event.target.value
  }

  deleteUser(userId) {
    let tempUsers = R.reject(R.propEq('id', userId))(this.state.users)
    this.setState({users: tempUsers})
  }

  addUser() {
    let id = Date.now()
    let usersArray = this.state.users
    usersArray.push({
      id: id,
      name: storeName
    })
    this.setState({users: usersArray})
    console.log(this.state.users)             //todo remove
  }

  render() {
    return(
      <div className='app_block'>
        <Form updateName={this.updateName.bind(this)}
              addUser={this.addUser.bind(this)}
              users={this.state.users}/>
        <List users={this.state.users}
              deleteUser={this.deleteUser.bind(this)}/>
      </div>
    )

  }

  // render() {
  //   return (
  //     <Grid>
  //       <Row>
  //         <Col smOffset={2} sm={8}>
  //           <Panel header={title} bsStyle="primary">
  //             <Form users={this.state.users}/>
  //             {/*<List users={this.state.users}/>*/}
  //           </Panel>
  //         </Col>
  //       </Row>
  //     </Grid>
  //   )
  // }
}


export default App

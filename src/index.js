import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {IndexRoute, Route, Router, browserHistory} from 'react-router'


ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={App}/>
			{/*<Route path="/" component={List}/>*/}
			{/*<Route path="user" component={User}/>*/}
		</Route>
	</Router>),
	document.getElementById('root')
)

import React  from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainIcon from '../components/MainIcon'
import * as TodoActions from '../actions'

const App = ({todos, actions}) => (
  <div>
    <MainIcon todos={todos} actions={actions} />
  </div>
)



const mapStateToProps = state => (
    
{
  
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React from 'react'
import ListIcon from './ListIcon'


export default class MainIcon extends React.Component {
  
  

  render() {
   
    const { todos, actions } = this.props
    return (
      <div className="content">
        <section className="main">
          <ListIcon  todos={todos} actions={actions}/>
        </section>
        
      </div>
    );
  }
}

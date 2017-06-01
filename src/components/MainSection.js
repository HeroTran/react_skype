import React from 'react'
import ListIcon from './ListIcon'


export default class MainSection extends Component {
  
  constructor(props){
    super(props);
  }

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

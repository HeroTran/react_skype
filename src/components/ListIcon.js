import React from 'react'
import ItemIcon from './ItemIcon'
import IconSkype from './IconSkype'
import CheckBox from './CheckBox'
import ButtonShow from './ButtonShow'
import * as loopArray from '../util/function'







export default class ListIcon extends React.Component {

  constructor(props){
    super(props);
    
   
  }
  
 componentDidMount() {
   let self = this;
    fetch('http://stg-api.getfit.n4u.vn/api/skype')
      .then((res)=>res.json())
      .then((json)=>{
        console.log(self.props);
        self.props.actions.showListIcon(loopArray.loopArray(json.data));

      });
  }
  onClickCheckIcon = (idx) => {
    console.log(idx);
  }
  checkValueRadio = (event) => {
    this.props.actions.checkValueRadio(event);
  }
  showCode = () => {
    this.props.actions.showCode();
  }

  render() {
    const {todos, actions } = this.props
    return (
      <div>
        <div className="radio">
          <CheckBox 
              key={0}
              value={todos.x}
              onCheckValueRadio = {this.checkValueRadio}
              //onCheckValueRadio = {(event) => {actions.checkValueRadio(event)}}
           />
        </div>
        <ul className="Grid" key={0}>
           {
             
            todos.listIcon.map((icon, idx) => {
             return (
              <ItemIcon
                key={idx}
                idIcon={idx}
                icon={icon}
                onClickCheckIcon={() => {actions.onClickCheckIcon(idx)}}
               />

                                                         
             );
            })

          }
        </ul>
        <div className="box-ul">
          <ul className="list-icon" key={1}>
            {

              
              todos.listConverSkype.map((item, idx) =>
                  
                {
                  let name = 'parent_' + idx;
                  let parent_id = idx;
                return(
                  
                  <div key={idx} id={name}>
                  {item.map((iconSkype, jdx) =>{
                    return ( 
                        <IconSkype
                        key={jdx}
                        idIcon={jdx}
                        iconSkype={iconSkype}
                        onmousedownicon={() => {actions.onmousedown(parent_id,jdx)}}
                        onmouseupicon={() => {actions.onmouseup(parent_id,jdx)}}
                        onmouseovericon={() => {actions.onmouseover(parent_id,jdx)}}

                          />
                      );
                  })}
                  </div>
                )
                
              })

            }
          </ul>
        </div>
        <div className="section-button">
            <ButtonShow 
              key={0}
              valueCode={todos.valueCode}
              checkCode={todos.checkCode}
              onClickButtonShow={this.showCode}
            />
        </div>

      </div>
    );
  }
}

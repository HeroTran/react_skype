import React from 'react'
import ItemIcon from './ItemIcon'
import IconSkype from './IconSkype'
import CheckBox from './CheckBox'
import ButtonShow from './ButtonShow'
import { Button, Modal } from 'react-bootstrap';
import * as handlingArray from '../util/handlingArray'







export default class ListIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  
 componentDidMount() {
   let self = this;
    fetch('http://stg-api.getfit.n4u.vn/api/skype')
      .then((res)=>res.json())
      .then((json)=>{
        console.log(self.props);
        self.props.actions.showListIcon(handlingArray.loopArray(json.data));

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
  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }
  clickOk = () =>{
    this.setState({ showModal: false });
    this.props.actions.onClickOk();
  }

  render() {
    const {todos, actions } = this.props
    return (
      <div>
         <h2>You can choose 15x15 or 20x20</h2>
        <div className="radio">
          <CheckBox 
              key={0}
              value={todos.x}
              onCheckValueRadio={this.checkValueRadio}
              //onCheckValueRadio = {(event) => {actions.checkValueRadio(event)}}
           />
        </div>
        <h2>You can choose icon you want to draw</h2>
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
        <h2>You can draw</h2>
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
           <Button
              bsStyle="default"
              onClick={this.open}
            >
              Refresh Icon
            </Button>
            <ButtonShow 
              key={0}
              valueCode={todos.valueCode}
              checkCode={todos.checkCode}
              onClickButtonShow={this.showCode}
            />
           
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Do you want to refesh icon {todos.x} x {todos.y}</Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button onClick={this.clickOk}>Ok</Button>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
            
            
            
        </div>

      </div>
    );
  }
}

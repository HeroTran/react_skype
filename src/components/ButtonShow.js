import React from 'react'

export default class ButtonShow extends React.Component {
  
 
  
  

 
  
  render() {
    const {valueCode, onClickButtonShow,checkCode} = this.props;
    
    
    return (
      <div >
        <input className="btn btn-default" type="button" onClick={onClickButtonShow} value="Show Code"/>
        <div className="box-content-code">
          <textarea disabled={checkCode} value={valueCode} id="text-code">
          </textarea>
        </div>
      </div>
    );
  }
}

import React from 'react'

export default class ButtonShow extends React.Component {
  
  constructor(props){
    super(props);
    
  }
  
  

 
  
  render() {
    const {valueCode, onClickButtonShow,checkCode} = this.props;
    
    
    return (
      <div >
        <input type="button" onClick={onClickButtonShow} value="Show Code"/>
        <div className="box-content-code">
          <textarea disabled={checkCode} value={valueCode}>
          </textarea>
        </div>
      </div>
    );
  }
}

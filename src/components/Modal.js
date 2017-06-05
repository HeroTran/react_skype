import React from 'react'

export default class Modal extends React.Component {
  
 
  
  

 
  
  render() {
    const{onClickOk} = this.props;
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Do you want to refesh icon.</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={onClickOk}>OK</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

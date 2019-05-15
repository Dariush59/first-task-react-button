import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class BtstrpButton extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        show: false
      }
      this.handleShow = this.handleShow.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const {name, backgroundColor, color, closeName, acceptName, title } = this.props
      return (
        <>
          <Button 
            variant="primary" 
            onClick={this.handleShow.bind(this)}
            style={{
                backgroundColor:`${backgroundColor}`,
                color:`${color}`
            }}>
            {name}
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title ? title : 'Title'}</Modal.Title>
            </Modal.Header>
            <Modal.Body
            style={{
              backgroundColor:`${backgroundColor}`,
              color:`${color}`
            }}>
              {name} has been ckicked!!!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                {`${closeName ? closeName : 'Close'}`}
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                {`${acceptName ? acceptName : 'Okay'}`}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}
  
export default BtstrpButton;
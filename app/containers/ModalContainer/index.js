import React from 'react';

class ModalContainer extends React.Component {
    constructor() {
	super();
	
    }

    render() {
	<Modal show={this.props.showToggle} onHide={this.props.close}>
		<Modal.Header>
		<Modal.Title>Component Modal Title</Modal.Title>
	    <Modal.Body>
	    <p>Component Modal Body</p>
	    </Modal.Body>
	    </Modal.Header>
	    </Modal>
    }
}

export default ModalContainer;

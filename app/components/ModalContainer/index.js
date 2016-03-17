import React from 'react';
import { Modal } from 'react-bootstrap';

function ModalContainer(props) {
    return (
	    <section>
	    <Modal show={props.showToggle} onHide={props.close}>
	    <Modal.Header>
	    <Modal.Title>Component Modal Title</Modal.Title>
	    </Modal.Header>
	    <Modal.Body>
	    <span>Component Modal Body</span>
	    </Modal.Body>
	    </Modal>
	    </section>
    )

}

export default ModalContainer;

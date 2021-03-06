import React from 'react';
import {Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
    showModalAction
} from '../App/actions'

import showModalSelector from 'showModalSelector';
import ModalContainer from 'modalContainer';

class HomePage extends React.Component {
    constructor() {
	super();
    }

    close() {
	
    }
    
    render() {
	return (
		<Row className="show-grid">
	    	<Col md={6}>
		<button onClick={this.props._onShowModalAction}>
		<label>clicking this button should show Modal</label>
		</button>
		</Col>
		<ModalContainer showToggle={this.props.showModal} close={this.close} />

            </Row>
	)
    }
}

function mapDispatchToProps(dispatch) {
    return {
	_onShowModalAction: () => dispatch(showModalAction()),
	dispatch
    }
}

export default connect(createSelector(
    showModalSelector,
    (showModal) => ({showModal})
), mapDispatchToProps)(HomePage);

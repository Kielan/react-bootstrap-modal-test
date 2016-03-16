import {
    SHOW_MODAL
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    showModal: false
})

function homeReducer(state = initialState, action) {
    switch (action.type) {
    case SHOW_MODAL:
	return state.set('showModal', 'true');
    default:
	return state;
    }
}

export default homeReducer;

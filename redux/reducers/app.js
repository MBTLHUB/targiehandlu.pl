
import _pick from 'lodash/pick'

import {
	ROLE_SELECT,
  ROLE_RESET,
	CART_ITEM_ADD,
	CART_ITEM_REMOVE,
	CART_RESET
} from '../../components/redux/types'

const reducer = (state = {role : "", cart : {}}, action) => {

	switch (action.type)
	{

		case ROLE_SELECT:
			return {...state, role : action.role}
		break

		case ROLE_RESET:
			return {...state, role : ""}
		break

		case CART_ITEM_ADD:
			return {...state, cart : {...state.cart, [action.ticketId] : {quantity : action.quantity, formdata : action.formdata}}}
		break

		case CART_ITEM_REMOVE:
			return {...state, cart : _pick(state.cart, Object.keys(state.cart).filter(ticketId => action.ticketId != ticketId)) }
		break

		case CART_RESET:
			return {...state, cart : {}}
		break

		default:
			return state
	}
}


export default reducer;

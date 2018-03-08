


import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'



import {
  FormLabel,
  FormControl,
  FormGroup,
} from 'material-ui/Form';




//import {translate} from '../i18n'

import Ticket from './Ticket'

import {
  cartItemRemove as cartItemRemoveAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


const styles = (theme) => ({

  root : {

  },

});



class Cart extends React.PureComponent {

  componentDidMount()
  {
    const {resourceFetchRequest} = this.props;
    resourceFetchRequest("tickets", true);
  }

  render()
  {
    const { cart, tickets } = this.props;

    return (

      <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
      {
        tickets && Object.keys(cart).map(ticketId => <Ticket key={ticketId} ticket={tickets[ticketId]} />)
      }

      {/* <span onClick={this.addToCart}>DODAJ</span> grupa ticketow */}
     </FormGroup>
     </FormControl>
    )
  }

}

const enhance = compose(
//  translate,
//  withStyles(styles),
  connect(state => ({
    cart : state.app.cart,
    tickets : state.resources.tickets
    // formdata : state.resources.formdata
  }), {
    cartItemRemove : cartItemRemoveAction,
    resourceFetchRequest : resourceFetchRequestAction
  }
  )
)

export default enhance(Cart);

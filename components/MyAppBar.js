
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const Cart = dynamic(import('./CartButton'))

//import Cart from './CartContainer'

import {
  drawerShow as drawerShowAction,
  dialogShow as dialogShowAction
} from './redux/actions'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    cursor: 'pointer',
  },
  title: {
   cursor: 'pointer',
 },

 badge: {
  //  margin: theme.spacing.unit * 2,
  },

 subtitle: {
  fontWeight : 300
},
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ButtonAppBar(props) {

  const { classes, drawer, drawerShow, dialogShow, cart } = props;

  const noItems = Object.keys(cart).length;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          {/* <IconButton onClick={drawerShow} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}

          <Link href="/">
          <Typography component="a" variant="title" color="inherit" className={classes.flex}>
          Targi eHandlu <span className={classes.subtitle}>Kraków 25 kwietnia 2018</span>
          </Typography>
          </Link>

          {noItems > 0 ?

            <Cart count={noItems} />

            : null }

        </Toolbar>
      </AppBar>
    </div>
  );
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };



const enhance = compose(
  connect((state) => ({
    //drawer : state.drawer,
    cart : state.app.cart
  }), {
    drawerShow : drawerShowAction,
    dialogShow : dialogShowAction
  }),
  withStyles(styles)
)


export default enhance(ButtonAppBar);

import React from 'react';
import compose from 'recompose/compose'

import classNames from 'classnames'
import { withStyles } from 'material-ui/styles';


import Icon from 'material-ui-icons/Done';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import {translate} from '../i18n'


const styles = theme => ({

  container : {
    maxWidth : '100%',
  //  marginTop: 30
  },

  flexList : {
      display: 'flex',
      justifyContent : 'center', /*space-around space-between*/
      alignItems : 'flex-start',
      flexDirection : 'column',

      [theme.breakpoints.only('md')]: {
          marginTop : 10,
          flexDirection : 'row',
      },

  },

  flexListItem : {
      // display: 'flex',
      // alignItems: 'flex-start'
  },

  icon : {
    color : '#000000',
    width: 40,
    height : 40,
  },

});


const Benefits = ({classes, labels, translate}) => (

  <div className={ classes.container }>
    <List component="ul" className={classes.flexList}>
      {labels.map((label, i) => <ListItem className={classes.flexListItem} key={i}>
        <ListItemIcon><Icon className={ classes.icon }/></ListItemIcon>
        <ListItemText primary={translate(label)}  />
      </ListItem> )}
    </List>
  </div>
)

Benefits.defaultProps = {
  labels : []
}


const enhance = compose(
  translate,
  withStyles(styles, { name : "Benefits"}),
)

export default enhance( Benefits );

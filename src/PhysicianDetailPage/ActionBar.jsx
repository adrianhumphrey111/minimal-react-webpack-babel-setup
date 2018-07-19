import React from 'react';
import PropTypes from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import DeactiveIcon from '@material-ui/icons/Cancel'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  }
};

class ActionBAr extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Directory
            </Typography>
            <Button variant="contained" size="small" >
              <DeactiveIcon className={classes.iconSmall} />
                Deactive
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

ActionBAr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionBAr);
import React from 'react';
import PropTypes from 'prop-types';
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

const ActionBAr = (props) => {
  const { classes, user } = props;
  const directory = <a href="">Directory</a>
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {directory} / {`${user.firstName} ${user.lastName}`}
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

ActionBAr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionBAr);
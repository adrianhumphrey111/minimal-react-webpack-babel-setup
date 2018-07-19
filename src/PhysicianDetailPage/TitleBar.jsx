import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    textAlign: "center"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  }
};




class TitleBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
            onClick={this.handleToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Directory
            </Typography>
            <IconButton className={classes.menuButton} color="inherit" >
              <SearchIcon />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" >
              <ChatIcon />
            </IconButton>
          </Toolbar>
          <Drawer open={this.state.open} onClose={this.handleToggle}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleToggle}
            onKeyDown={this.handleToggle}
          >
          {sideList}
          </div>
          </Drawer>
        </AppBar>
      </div>
    );
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar);
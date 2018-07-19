import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    //TODO: Explain '&&' operator in React
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Notes" style={{color: "white"}}/>
            <Tab label="Messages" style={{color: "white"}}/>
            <Tab label="Biz Unit Procedures" style={{color: "white"}}/>
            <Tab label="Facilities " style={{color: "white"}}/>
            <Tab label="Preference Cards" style={{color: "white"}}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Notes Component</TabContainer>}
        {value === 1 && <TabContainer>Messages Component</TabContainer>}
        {value === 2 && <TabContainer>Biz Unit Procedures Component</TabContainer>}
        {value === 3 && <TabContainer>Facilities Component</TabContainer>}
        {value === 4 && <TabContainer>Preference Cards Component</TabContainer>}
        
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import PhysicianInfoTable from './PhysicianInfoTable'

const uuidv4 = require('uuid/v4');

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  card: {
    minWidth: 275,
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const createData = (details) => {
  let results = []
  for (let property in details) {
    if (details.hasOwnProperty(property)) {
      results.push({
        label: property,
        value: details[property],
        id: uuidv4()
      })
    }
  }
  return results
}

class PhysicianInfoCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
      details: createData(props.user.details)
    }
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleModalTextChange = (e, name, index) => {
    console.log(name)
    const newDetails = [...this.state.details]
    console.log(newDetails)
    newDetails[index].value = e.target.value
    console.log(newDetails)
    this.setState({details: newDetails})
  }


  render() {
    const { classes, user } = this.props;
    const details = [...this.state.details]
    console.log(details)

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton onClick={this.handleOpen}>
                <EditIcon />
              </IconButton>
            }
            title="Physician Details"
          />
          <PhysicianInfoTable details={this.state.details} />
        </Card>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            {details.map((detail, index) => {
              return (
                <TextField
                  id={detail.label}
                  label={detail.label}
                  className={classes.textField}
                  value={this.state.details[index].value}
                  onChange={(event) => this.handleModalTextChange(event, detail.label, index)}
                  margin="normal"
                />
              )
            })}
          </div>
        </Modal>
      </div>
    );
  }
}

PhysicianInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhysicianInfoCard);
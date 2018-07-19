import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const camelCaseToSpace = ( str ) => {
    return str.replace(/([A-Z])/g, (g) => ` ${g[0]}`).replace(/^\w/, c => c.toUpperCase());
}

const PhysicianInfoTable = (props) => {
  const { classes, details } = props;
    
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {details.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row" style={{ borderRight: '0.1em solid #80808080', padding: '0.5em' }}>
                  {camelCaseToSpace(n.label)}
                </TableCell>
                <TableCell >{n.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

PhysicianInfoTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhysicianInfoTable);
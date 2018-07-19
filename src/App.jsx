import React, { Component } from 'react';
import data from './mockdata'
import TitleBar from './PhysicianDetailPage/TitleBar'
import ActionBar from './PhysicianDetailPage/ActionBar'
import PhysicianInfoCard from './PhysicianDetailPage/PhysicianInfoCard'
import InformationGrid from './PhysicianDetailPage/InformationGrid'

import Typography from '@material-ui/core/Typography';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      user: data.user
    }
  }

  render() {
    const { user } = this.state
    return (
      <div style={{margin: 0}}>
        <TitleBar/>
        <ActionBar/>
        <div style={{margin: 30}}>
            <Typography variant="display2" >
                {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography variant="display1" >
                {user.isActive ? "Active" : "Inactive"}
            </Typography>
            <PhysicianInfoCard user={this.state.user}/>
            <InformationGrid/>
        </div>
      </div>
    );
  }
}

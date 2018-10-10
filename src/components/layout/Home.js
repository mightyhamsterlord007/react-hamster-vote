import React, { Component } from 'react'
import { HamsterList, User } from '../containers';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <User />
        <HamsterList />
      </React.Fragment>
    )
  }
}

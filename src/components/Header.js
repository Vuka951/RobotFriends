import React, { Component } from 'react'

export default class Header extends Component {
    shouldComponentUpdate() {
        return false;
    }
  render() {
    console.log("header")
    return (
        <h1 className="f1">RobotFriends</h1>
    )
  }
}

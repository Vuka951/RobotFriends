import React, { Component } from 'react'

class Scroll extends Component {
  render() {
    return (
      <div style={{overflowY: 'scroll', border: '2px solid black', maxHeight: '80vh'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Scroll;
import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }
  render() {
    return this.state.hasError ? (<h1>Ups something went wrong</h1>) : (this.props.children)
  }
}

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setSearchValue, getRobots} from './actions';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return <MainPage {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    searchvalue: state.searchRobots.searchvalue,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error
})

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (e) => dispatch(setSearchValue(e.target.value)),
    onGetRebots: () => dispatch(getRobots())
})
 

export default connect(mapStateToProps, mapDispatchToProps)(App);
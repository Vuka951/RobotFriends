import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import { setSearchValue, getRobots} from './actions';

class App extends Component {
    componentDidMount() {
        this.props.onGetRebots();
    }

  render() {
    const filteredRobots = this.props.robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(this.props.searchvalue.toLocaleLowerCase());
    })
    return this.props.isPending ? (<h1>Loading data</h1>)
    :(
        <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox onSearchChange={this.props.onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
            <CardList robots={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div>
    )
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
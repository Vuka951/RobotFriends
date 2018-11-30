import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
    state = {
        robots: robots,
        searchvalue: '',
    }
    onSearchChange = (e) => {
        this.setState({
            searchvalue: e.target.value,
        })
    }
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(this.state.searchvalue.toLocaleLowerCase());
    })
    return (
      <div className="tc">
        <h1>RobotFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;
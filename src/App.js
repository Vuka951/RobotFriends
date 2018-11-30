import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

class App extends Component {
    state = {
        robots: [],
        searchvalue: '',
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then( res => {
            return res.json();
        }).then(users => {
            this.setState({
                robots: users,
            })
        })
    }
    onSearchChange = (e) => {
        this.setState({
            searchvalue: e.target.value,
        })
    }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(this.state.searchvalue.toLocaleLowerCase());
    })
    return !this.state.robots.length ? (<h1>Loading data</h1>)
    :(
            <div className="tc">
              <h1 className="f1">RobotFriends</h1>
              <SearchBox onSearchChange={this.onSearchChange}/>
              <Scroll>
                <CardList robots={filteredRobots}/>
              </Scroll>
            </div>
          )
    }
  }

export default App;
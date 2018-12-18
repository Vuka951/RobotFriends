import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

class MainPage extends Component {
    componentDidMount() {
        this.props.onGetRebots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.props.searchvalue.toLocaleLowerCase());
        })
    }

  render() {
      const { onSearchChange, isPending } = this.props;
    return isPending ? (<h1>Loading data</h1>)
    :(
        <div className="tc">
        <Header/>
        <SearchBox onSearchChange={onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
            <CardList robots={this.filteredRobots()}/>
        </ErrorBoundry>
        </Scroll>
        </div>
    )
    }
}
 

export default MainPage;
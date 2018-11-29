import React, { Component } from 'react'
import Card from './Card';

class CardList extends Component {
  render() {
    const {robots} = this.props;
    return (
      <div>
        {robots.map((user) => {
        return <Card name={user.name} email={user.email} id={user.id} key={user.id}/>
      })}
      </div>
    )
  }
}

export default CardList;
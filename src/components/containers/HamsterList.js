import React, { Component } from 'react';
import { Hamster } from '../views';

import { generateVoteCount } from '../utils/randomNumGen';

const hamstersArray = [
  {
    id: 1,
    title: 'Hamster lord from East',
    description: 'These nuts',
    url: '#',
    votes: generateVoteCount(),
    avatarUrl: 'images/users/kobe.jpeg',
    hamsterImageUrl: 'images/hamsters/hamster-1.jpeg'
  },
  {
    id: 2,
    title: 'Hamster lord from South',
    description: 'These nuts',
    url: '#',
    votes: generateVoteCount(),
    avatarUrl: 'images/users/michael.jpeg',
    hamsterImageUrl: 'images/hamsters/hamster-2.jpeg'
  },
  {
    id: 3,
    title: 'Hamster lord from West',
    description: 'These nuts',
    url: '#',
    votes: generateVoteCount(),
    avatarUrl: 'images/users/kevin.jpeg',
    hamsterImageUrl: 'images/hamsters/hamster-3.jpeg'
  },
  {
    id: 4,
    title: 'Hamster lord from North',
    description: 'These nuts',
    votes: generateVoteCount(),
    url: '#',
    avatarUrl: 'images/users/russell.jpeg',
    hamsterImageUrl: 'images/hamsters/hamster-4.jpeg'
  }
];


class HamsterList extends Component {

  state = {
    hamsters: []
  }

  componentDidMount() {
    this.setState({
      hamsters: hamstersArray
    })
  }

  handleClickVote = (id) => {
    
     const nextVoteCount = this.state.hamsters.map(hamster => {
      if (hamster.id === id) {
        return Object.assign({}, hamster, {
          votes: hamster.votes + 1
        })
      } else {
        return hamster
      }
     });

     this.setState({
       hamsters: nextVoteCount
     });

  }

  render() {

    let showHamstersInfo = this.state.hamsters.map((hamster) => {
      return (
          <Hamster 
            key={`hamster-${hamster.id}`}
            id={hamster.id}
            title={hamster.title}
            description={hamster.description}
            votes={hamster.votes}
            url={hamster.url}
            avatarUrl={hamster.avatarUrl}
            hamsterImageUrl={hamster.hamsterImageUrl}
            handleClickVote={this.handleClickVote}
          />
      )
    })

    return (
     <div className='ui unstackable items'>
      {showHamstersInfo}
     </div>
    );
  }
}

export default HamsterList;
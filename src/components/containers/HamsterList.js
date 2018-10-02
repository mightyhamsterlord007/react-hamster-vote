import React, { Component } from 'react';
import { Hamster } from '../views';

import { generateVoteCount } from '../utils/randomNumGen';


class HamsterList extends Component {

  render() {

    const hamstersArray = [
      {
        id: 1,
        title: 'Hamster lord from East',
        description: 'These nuts',
        url: '#',
        avatarUrl: 'images/users/kobe.jpeg',
        hamsterImageUrl: 'images/hamsters/hamster-1.jpeg'
      },
      {
        id: 2,
        title: 'Hamster lord from South',
        description: 'These nuts',
        url: '#',
        avatarUrl: 'images/users/michael.jpeg',
        hamsterImageUrl: 'images/hamsters/hamster-2.jpeg'
      },
      {
        id: 3,
        title: 'Hamster lord from West',
        description: 'These nuts',
        url: '#',
        avatarUrl: 'images/users/kevin.jpeg',
        hamsterImageUrl: 'images/hamsters/hamster-3.jpeg'
      },
      {
        id: 4,
        title: 'Hamster lord from North',
        description: 'These nuts',
        url: '#',
        avatarUrl: 'images/users/russell.jpeg',
        hamsterImageUrl: 'images/hamsters/hamster-4.jpeg'
      }
    ];

    let showHamstersInfo = hamstersArray.map((hamster) => {
      return (
          <div key={hamster.id}>
              <img alt='' src={hamster.hamsterImageUrl} />
              <h1>{hamster.title}</h1>
              <span>{hamster.description}</span>
              <img alt='' src={hamster.avatarUrl} />
          </div>
      )
    })

    return (
     <div>
      {showHamstersInfo}
     </div>
    );
  }
}

export default HamsterList;
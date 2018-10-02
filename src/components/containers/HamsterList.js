import React, { Component } from 'react';
import { Hamster } from '../views';

import { generateVoteCount } from '../utils/randomNumGen';


class HamsterList extends Component {



  render() {
 
    return (
     <div>
      <Hamster />
     </div>
    );
  }
}

export default HamsterList;
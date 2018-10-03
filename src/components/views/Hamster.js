import React, { Component } from 'react'

class Hamster extends Component {

  handleHamsterVoteClick = (event) => {
    event.preventDefault();
    console.log(this.props)
    this.props.handleClickVote(this.props.id);
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.hamsterImageUrl} alt='' />
        </div>

        <div className='middle aligned content'>
          <div className='header'>
            <a href='/' onClick={this.handleHamsterVoteClick}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>

          <div className='description'>
            <a href='/'>
              {this.props.title}
            </a>

            <p>
              {this.props.description}
            </p>
          </div>
          
          <div className='extra'>
            <span>Submitted by:</span>
            <img 
              alt=''
              className='ui avatar image'
              src={this.props.avatarUrl}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Hamster;
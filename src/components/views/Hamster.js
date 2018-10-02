import React, { Component } from 'react'

class Hamster extends Component {
  
  render() {

  

    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.hamsterImageUrl} alt='' />
        </div>

        <div className='middle aligned content'>
          <div className='header'>
            <a href='/'>
              <i className='large caret up icon' />
            </a>
            50
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
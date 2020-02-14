import React, { Component } from 'react';
import styled from 'styled-components'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  render() { 
    return (
      <StyledHeader>
        <a className='title'>Get Service</a>
        <nav>
          <ol>
            <li>
              <a href=''>Sonic</a>
            </li>
            <li>
              <a href=''>Mazda5</a>
            </li>
          </ol>
        </nav>
        <div className='menu'>
          <div className='bars top'/>
          <div className='bars mid'/>
          <div className='bars bot'/>
        </div>
      </StyledHeader>
    )
  }
}
 
export default Header;

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: black;
  color: white;
  .title {
    font-family: Tesla;
    font-size: 20px;
    margin: 20px;
  }
  
  ol {
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-family: 'Nunito Sans', sans-serif;
    li a {
      margin: 0 25px;
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: grey;
      transition: color 300ms;
    }
  }
  .menu {
    height: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bars {
    width: 20px;
    height: 2px;
    background: white;

  }
`
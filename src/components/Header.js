import React, { Component } from 'react';
import styled from 'styled-components'
import SideNav from './SideNav'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sideShowing: false
     }
  }

  showSide = (loc) => {
    if (loc === 'button' || <div class='no-cover'></div>)
      this.setState({ sideShowing: !this.state.sideShowing })
  }

  render() { 
    const { sideShowing } = this.state
    return (
      <>
        <StyledHeader>
          <a className='title'>GET SERVICE</a>
          <nav>
            <ol>
              <li>
                <a href=''>Sonic</a>
              </li>
              <li>
                <a href=''>Mazda5</a>
              </li>
              <li>
                <a href=''>Add Vehicle</a>
              </li>
            </ol>
          </nav>
          <div
            onClick={() => this.showSide('button')}
            className={sideShowing ? 'close nav-cont' : 'menu nav-cont'}>
            <div className='bars top' />
            <div className='bars mid' />
            <div className='bars bot' />
          </div>
          <SideNav sideShowing={sideShowing} />
          <div
            onClick={e => this.showSide(e.target)}
            className={sideShowing ? 'grey-cover' : 'no-cover'}
          />
        </StyledHeader>
      </>
    )
  }
}
 
export default Header;

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212121;
  color: white;
  .title {
    position: absolute;
    left: 20px;
    top: 17px;
    font-family: Tesla;
    font-size: 20px;
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
  .nav-cont {
    position: absolute;
    top: 19px;
    height: 12px;
    width: 18px;
    transition: 300ms all;
    .bars {
      position: absolute;
      height: 2px;
      z-index: 4;
    }
    :hover {
      cursor: pointer;
    }
  }
  .menu {
    right: 26px;
    z-index: 4;
    .bars {
      width: 18px;
      background: white;
      transition: 300ms all;
    }
    .top {
      top: 0;
    }
    .mid {
      top: 50%;
      transform: translate(0, -50%);
    }
    .bot {
      bottom: 0;
    }
  }
  .close {
    right: 32px;
    display: flex;
    z-index: 4;
    .bars {
      position: absolute;
      width: 20px;
      height: 2px;
      background: #212121;
      transition: 300ms all;
    }
    .top {
      top: 0;
      left: 0;
      transform: rotate(45deg) translate(35%);
    }
    .mid {
      background: #f3f3f3;
      z-index: 3;
    }
    .bot {
      bottom: 0;
      left: 0;
      transform: rotate(-45deg) translate(35%);
    }
  }
  .no-cover {
    display: none;
  }
  .grey-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    animation: 300ms linear 0s 1 normal forwards showGrey;
  }
  @keyframes showGrey {
    0% {
      display: none;
    }
    1% {
      display: initial;
      background: rgba(0, 0, 0, 0);
    }
    100% {
      display: initial;
      background: rgba(34, 34, 34, 0.25);
    }
  }
`
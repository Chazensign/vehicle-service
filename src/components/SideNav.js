import React from 'react';
import styled from 'styled-components'

const SideNav = (props) => {
  return (
  <WhiteSide className={props.sideShowing ? 'out' : 'in' }>
    <nav>
      <ol>
        <li>OIL</li>
        <li>WIPERS</li>
        <li>AIR FILTER</li>
        <li>TIRES</li>
        <li>ALIGNMENT</li>
        <li>CABIN FILTER</li>
        <li>SERPENTINE BELT</li>
        <li>TIMING BELT</li>
        <li>TRANSMISSION</li>
        <li>SPARK PLUGS</li>
      </ol>
    </nav>
    </WhiteSide>
  )
}
 
export default SideNav;

const WhiteSide = styled.aside`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 200px;
  height: 100vh;
  padding: 20px 20px 20px;
  background: #f3f3f3;
  overflow: hidden;
  z-index: 3;

  &.out {
    right: 0;
    transition: 300ms all;
  }
  &.in {
    right: -200px;
    transition: 150ms all;
  }
  nav {
    height: 100%;
    width: 100%;
  }
  ol {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin-top: 0;
    color: black;
    li {
      width: 100%;
      height: 100%;
      padding: 15px;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: 'Nunito Sans', sans-serif;
      letter-spacing: 1px;
      border-bottom: 1px solid lightgrey;
    }
  }
`
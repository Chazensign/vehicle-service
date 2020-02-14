import React, { Component } from 'react';
import styled from 'styled-components'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledHeader>
        <nav></nav>
      </StyledHeader>
     );
  }
}
 
export default Header;

const StyledHeader = styled.header`

`
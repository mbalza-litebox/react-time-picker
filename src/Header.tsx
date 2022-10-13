import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

const StyledHeader = styled.div`
  padding: 24px;
  text-align: center;
`;

class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { text } = this.props;

    return <StyledHeader>{text}</StyledHeader>;
  }
}

export default Header;

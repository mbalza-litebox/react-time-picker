import React, { Component } from 'react';

type Props = {
  text: string;
};

class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { text } = this.props;

    return <p>{text}</p>;
  }
}

export default Header;

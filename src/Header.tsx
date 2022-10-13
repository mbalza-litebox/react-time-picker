import React, { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default Header;

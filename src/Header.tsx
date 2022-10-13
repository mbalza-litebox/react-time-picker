import React, { Component, ReactNode } from 'react';

type Props = {
  prefixCls: string;
  children: ReactNode;
};

class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { prefixCls, children } = this.props;

    return <div className={`${prefixCls}-header`}>{children}</div>;
  }
}

export default Header;

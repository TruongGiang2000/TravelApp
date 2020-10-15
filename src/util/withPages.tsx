import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
export const withPages = (Component) => {
  class WithPages extends PureComponent<any, any> {
    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateFromProps = (state: any) => ({
    language: state.system.language,
  });

  return connect(mapStateFromProps)(WithPages);
};

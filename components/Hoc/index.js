import React from 'react';

const withLocales = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
        secretToLife={42}
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};

export default withLocales;

import React from 'react';
// React Native Localization
import LocalizedStrings from 'react-localization';
import stringsList from '../../locales'
const strings = new LocalizedStrings(stringsList);

//! HOC wrapper to add strings to components

export default  withLocales = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
        strings={strings}
        changeState={this.changeState}
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};


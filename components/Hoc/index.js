import React from 'react';
// React Native Localization
import LocalizedStrings from 'react-localization';
import stringsList from '../../locales'
const strings = new LocalizedStrings(stringsList);

const withLocales = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
        strings={strings}
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};

export default withLocales;

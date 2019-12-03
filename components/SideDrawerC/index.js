import React, { Component } from 'react'
import {View,Text} from 'react-native'

import Drawer from 'react-native-drawer'

export class SideDrawerC extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      content={<ControlPanel />}
      >
        <MainView />
    </Drawer>
    )
  }
}
export default SideDrawerC
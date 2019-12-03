import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import AppBarHeader from '../AppBarHeaderC'
import { withNavigation } from 'react-navigation';
import Calender from '../CalenderC'
import Colors from '../../Themes/Colors'


const DayRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const WeekRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const MonthRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} >
    <Calender/>
  </View>
);
class TabMenuC extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'day', title: 'Day' },
      { key: 'week', title: 'Week' },
      { key: 'month', title: 'Month' },
    ],
  };

  render() {
    return (
      <>
      <AppBarHeader title="Reports" />
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          day: DayRoute,
          week: WeekRoute,
          month:MonthRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
       
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={this._renderLabel}
            getLabelText={({ route: { title } }) => title}
            indicatorStyle={styles.indicator}
            tabStyle={styles.tabStyle}
            style={{backgroundColor:Colors.primary}}
          />
        )}
      />
      </>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default withNavigation(TabMenuC)
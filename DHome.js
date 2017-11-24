import React, { PureComponent } from 'react';
import {AppRegistry, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Reserve from './reserve.js';
import Detail from './detail.js';
//import io.realm.react.RealmReactPackage from '';


//const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;
const FirstRoute = () => <Detail/>;
const SecondRoute = () => <Reserve/>;
export default class TabViewExample extends PureComponent {
static navigationOptions = {
        title : 'ShinKanZen',
    };

  state = {
    index: 0,
    routes: [
    
      { key: '1', title: 'DETAIL' , },
      { key: '2', title: 'RESERVE' },
    //{ key: '3', title: 'AVIALABLE' },
    ],

  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  //'3': ThirdRoute,
  });

  render() {
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      
      <TabViewAnimated
        style={[styles.container,]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange} 
        />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  paddingTop:0,
  backgroundColor:'white'
  },
});


AppRegistry.registerComponent('DHome', () => DHome);

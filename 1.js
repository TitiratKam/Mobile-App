import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Reserve from './reserve.js';
import Detail from './detail.js';

const FirstRoute = () => <Detail/>;
const SecondRoute = () => <Reserve/>;
//const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;

export default class TabViewExample extends PureComponent {


  state = {   ------
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
    return (
      <TabViewAnimated
        style={[styles.container,]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop:25,
  backgroundColor:'white'
  },
});
import React from 'react';
import { StatusBar, TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DismissKeyboard from 'dismissKeyboard';
import Home from './Home.js';
import DHome from './DHome.js';
import RDetail from './RDetail.js';
import PD from './PD.js';
import detail from './detail.js';
import reserve from './reserve.js';

//import io.realm.react.RealmReactPackage from '';

const nativeshop = StackNavigator({
  Home: {screen: Home},
  PD: {screen: PD},
  DHome: {screen: DHome},
  detail: {

    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: detail,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    //path: 'res/:title',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
    

  },
  reserve: {screen: reserve},
  RDetail: {screen: RDetail},
});
//const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;

export default nativeshop;

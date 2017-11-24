import React from 'react';
import {AppRegistry, StatusBar, TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DismissKeyboard from 'dismissKeyboard';
//import io.realm.react.RealmReactPackage from '';


//const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;

export default class PD1 extends React.Component {
    static navigationOptions = {
        title : 'PD1',
    };

  render() {
    const {params} = this.props.navigation.state;
    return (
            <View>
            <Text>Hello from PD</Text>
            <Text>{params.cat}</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
    },
    navigationBar: {
        backgroundColor: 'rgba(175, 214, 240,0.0)',
    },
    navigationBarText: {
        color: 'rgba(255, 255, 255,0.8)',
        padding: 10,
        fontSize: 15
    },
    titleText: {
        fontSize: 20,
        paddingTop: 5
    }
});

AppRegistry.registerComponent('PD1', () => PD1);
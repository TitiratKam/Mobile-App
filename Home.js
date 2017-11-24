import React from 'react';
import {Button,AppRegistry, StatusBar, TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DismissKeyboard from 'dismissKeyboard';
import Home from './Home.js';
import DHome from './DHome.js';
import RDetail from './RDetail.js';
//import io.realm.react.RealmReactPackage from '';


//const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;

export default class App extends React.Component {
    static navigationOptions = {
        title : 'Home',
    };

  render() {
            const {navigate} = this.props.navigation;
    return (
            <View style={styles.container}>
            <Text>Hello home</Text>

            

            <Button title='shinkanZen'
            onPress={ () => navigate('detail',{title:'ShinKanZen'})}
            />
            </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        alignItems:'center'
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

AppRegistry.registerComponent('home', () => home);
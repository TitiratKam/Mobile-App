import React from 'react';
import {
 AppRegistry, StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity ,StatusBar
,Content,ScrollView,Picker,DatePickerIOS,} from 'react-native';
//import res from './res.json';
import { StackNavigator } from 'react-navigation';
import PopupDialog from 'react-native-popup-dialog';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker';

export default class List extends React.Component {
  static navigationOptions = {
        title : 'Detail',
    };

  setCurrentReadOffset = (event) => {
    console.log(event.nativeEvent.contentOffset.y);
  }
  booking(){

  }
  
  constructor(props){
    super(props);
    this.state = {


    }
      //this.onDateChange = this.onDateChange.bind(this);
	
  }
	
	
  render(){
    const {params} = this.props.navigation.state;
    return(
	
      <View style={styles.container}>
      <StatusBar

          backgroundColor="red"

        />

        <ScrollView contentContainerStyle={styles.body}>
      

        <Image style={styles.img} source={require('./SKZ/shin.jpg')}/>

       
        </ScrollView>
		
      </View>
    );
  }
}
//export default List;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:0,
    borderWidth:1,
    paddingVertical:20,
  },
  img:{
    width:300,
    height:300,
    opacity:0.8,
	margin:10,
  },
  img1:{
    width:100,
    height:100,
  },
  subbody: {
	paddingTop:15
  },
  subhead: {
  padding:5,
  backgroundColor:'#0056d7',
  },
  s1: {
    margin : 10,
  padding:15,
  backgroundColor:'#333333',
  flexDirection:'row',
  },
  s2: {
    margin : 10,
  padding:15,
  backgroundColor:'#336633',
  flexDirection:'row',
  },
  s3: {
  margin : 10,
  padding:15,
  backgroundColor:'#CC6666',
  flexDirection:'row',
  },
  s4: {
    margin : 10,
  padding:15,
  backgroundColor:'#FF6633',
  },
  name: {
    textAlign:'center',
	fontSize:30,
  },
  res: {
    textAlign:'center',
  fontSize:30,
  color:'white'
  },
  hdetail:{
    textAlign:'right',
    color:'white',
    fontSize:15,
    padding:5
  },
  db:{
    flex:1
  },
  detail:{
	  textAlign:'right',
    color:'white',
    fontSize:13,
  }
 
});


AppRegistry.registerComponent('RDetail', () => RDetail);
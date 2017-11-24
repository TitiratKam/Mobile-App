import React from 'react';
import {
  StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity ,StatusBar
,Content,ScrollView,Picker,DatePickerIOS} from 'react-native';
//import res from './res.json';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker'
//import TimePicker from 'react-native-datepicker'
import TimePicker from 'react-native-simple-time-picker';

export default class List extends React.Component {


  setCurrentReadOffset = (event) => {
    console.log(event.nativeEvent.contentOffset.y);
  }
  booking(){

  }
  
  constructor(props){
    super(props);
    this.state = {
	  isDateTimePickerVisible: false,
      amount: 0,
      i:0,
	  selectedHours: 0,
	  selectedMinutes: 0,
	  date:"2016-05-15",
      time:
        ['8:00','8:30','9.00','9.30','10.00','10.30','11.00'],
      //  date: new Date(),
      //  timeZoneOffsetInHours: (-1)*(new Date()).getTimezoneOffset()/60

    }
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.plusTime = this.plusTime.bind(this);
    this.minusTime = this.minusTime.bind(this);
      //this.onDateChange = this.onDateChange.bind(this);
	
  }
	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicked = (date) => {
		console.log('A date has been picked: ', date);
		this._hideDateTimePicker();
		this.setState({date : date});
	};
  plus(){
    this.setState({amount : this.state.amount+1});
  }
  minus(){
    //this.setState({amount : this.state.amount-1});
	if (this.state.amount > 0){
	this.setState({amount : this.state.amount-1});
	}
	else {
	this.setState({amount : 0});
  }
  }
  plusTime(){
    this.setState({i : this.state.i+1});
  }
  minusTime(){
    this.setState({i : this.state.i-1});
  }
	
  render(){
	 const { selectedHours, selectedMinutes } = this.state;
    let i =0;
    return(
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.body}>
		
        <Image style={styles.img} source={require('./image/shin1.jpg')}/>
        <View style={styles.subbody}>
          <Text style={styles.name}>Shinkanzen</Text>
        </View>
        <View style={styles.subpeo}>
            <View style={styles.tt}>
              <Text style={styles.people}>How Many Dinner? </Text>
              <Text style={styles.dinner}>{this.state.amount} PEOPLE </Text>
            </View>
            <TouchableOpacity style={styles.button}  onPress={this.minus}>
            <Text style={styles.tb}>-</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={this.plus}>
          <Text style={styles.tb}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subpeo}>
          <View style={styles.tt}>
          <Text style={styles.people}>During Time </Text>
		  <Text style={styles.dinner}>{this.state.time[this.state.i]} </Text>
          
          </View>
          <TouchableOpacity style={styles.button} onPress={this.minusTime}>
          <Text style={styles.tb}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.plusTime}>
          <Text style={styles.tb}>+</Text>
          </TouchableOpacity>
        </View>
		
        <View style={styles.subpeo1}>
		
          <View style={styles.tt1}>
          <Text style={styles.people}>Pick a Date </Text>
          </View>
		  
          
		  
		  <View style={styles.tt2}>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2100-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
	 
	  
	  
      </View>
		  
        </View>
		
		<View style={styles.bb}>
        <Text>{selectedHours}:{selectedMinutes}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
      </View>
		
        <TouchableOpacity style={styles.bb}>
        <Text style={styles.tbooking}>BOOK THE TABLE</Text>
        </TouchableOpacity>
		
        </ScrollView>
		
      </View>
    );
  }
}
//export default List;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:62,
    borderWidth:1,
    paddingVertical:20,
  },
  img:{
    width:320,
    height:180,
    opacity:0.8,
  },
  subbody: {
    borderWidth:1,
    height:50,
    margin:5,
    borderRadius:15,
  },
  name: {
    textAlign:'center'
  },
  subpeo:{
    borderWidth:1,
    height:75,
    margin:5,
    flexDirection:'row',
  },
  subpeo1:{
    borderWidth:1,
    height:60,
    margin:5,
    flexDirection:'row',
  },
  people:{
    padding:10,
  },
  button:{
    borderWidth:1,
    height:50,
    width:50,
    borderRadius:35,
    //justifyContent:'flex-end',
    marginLeft:20,
    marginTop:10,
    //backgroundColor:'#568e8f',
    borderColor:'#568e8f',
  },
  tb:{
    textAlign:'center',
    fontSize:30
  },
  tt:{

    width:150,
  },
  tt1:{

    width:95,
  },
  tt2:{

    padding:5,
  },
  dinner:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:20,
  },
  bb:{
    borderWidth:1,
    backgroundColor:'white',
    height:30,
    margin:10,
    borderRadius:10,
  },
  tbooking:{
    fontSize:10,
    textAlign:'center',
    padding:5,
    color:'black',
    fontWeight:'bold',
  },
  pick: {
    borderWidth:1,
    backgroundColor:'white',
    height:30,
    width:80,
    marginLeft:50,
    margin:10,
    borderRadius:10,
  },
  tp:{
    textAlign:'center',
    padding:10,
  }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { StackNavigator } from 'react-navigation';
import { AboutText1,AboutText2,AboutText3,About1} from './common/constants_titel';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
 export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
    };
    
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      // alert(date)
      let newdate =''+date+'';
      let time = newdate.slice(16,24)
      alert(time)
      this._hideDateTimePicker();
    };

  render() {
    return (
      <View style={{flex:1,marginTop:20}}>
        <View style={{flexDirection:'row',backgroundColor:'#4FA4FF',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity 
                onPress={()=>{
                  // this.props.navigation.state.params.callback(url);
                  this.props.navigation.goBack();
                  }}>
                  <Image source={require('./image/backm.png')} style={{height:25,width:25,marginLeft:8}}/>
                </TouchableOpacity>
                <View style={styles.topView}>
                      <Text style={styles.topText}>{About1}</Text>
                      
                </View>
                <View style={{height:50,width:38,alignItems:'center',justifyContent:'center',flexDirection:'row'}} >
                </View>
               
            </View>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              {AboutText1}
            </Text>
            <Text style={styles.welcome}>
            {AboutText2}
            </Text>
            <Text style={styles.welcome}>
            {AboutText3}
            </Text>
            
          
          </View>
      </View>
    );
  }
}
const MyApp = StackNavigator({
    // 对应界面名称
    About: {
        screen: About,
        navigationOptions:{
            headerTitle:'详情',
            headerBackTitle:null,
        }
    },
   
}, {
    headerMode: 'screen',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  welcome: {
    fontSize: 14,
    // textAlign: 'center',
    margin: 10,
    marginTop:20,
  },
  instructions: {
    textAlign: 'center',
    color: '#b3b3b3',
    marginBottom: 5,
  },
  topView:{
    height:50,
    width:width-60,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#4FA4FF',
    
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#F6FCFF',
    paddingLeft:20,
  },
  Touchable:{
    justifyContent:'center',
    alignItems:'center',
    width:30,height:50,
  },
});
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Calendar, CalendarList, Agenda,LocaleConfig } from 'react-native-calendars';
import { NavigationActions, } from 'react-navigation';

import { Level,Calender1} from './common/constants_titel';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
LocaleConfig.locales['fr'] = {
  monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
 
  dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六']
};

LocaleConfig.defaultLocale = 'fr';
import { getItem, saveItem} from './common/AsyncStorage';
 class Calender extends Component {
     constructor(props) {
        super(props);
        this.state = {
          minday:'',
          today:'',
          selected:'',
          level1:1,


        };
        this.onDayPress = this.onDayPress.bind(this);
      }
  componentWillMount() {
    var promise = saveItem("one", '3', () => { }).then((result) => {
          let newDate = new Date();
          let newDay = newDate.toJSON();
          let thisday = newDay.slice(0,10);
          let days = -3;
          let newMinDate = new Date();
          newMinDate.setDate(newMinDate.getDate()+days); 
          let mDay = newMinDate.toJSON();
          let minday = mDay.slice(0,10);
          // console.log('====================================');
          // console.log(newMinDate);
          // console.log(minday)
          // console.log('====================================');
          this.setState({today:thisday,minday:minday})
            var promise = getItem("level").then((result) => {
              
              this.setState({level1:parseInt(result)})
            }).catch((error) => {
              console.error(new Error("失败"));
            })
          // alert('1')
        }).catch((error) => {
          console.error(new Error("失败"));
        })
  }
  componentDidMount() {
  //   var promise = getItem("level").then((result) => {
  //   LocaleConfig.locales['fr'] = {
  //     monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
  //     monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  //     dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  //     dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六']
  //   };
    
  //   LocaleConfig.defaultLocale = 'fr';
  // }).catch((error) => {
  //   console.error(new Error("失败"));
  // })
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
            <View style={{flexDirection:'row',backgroundColor:'#4FA4FF',}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>{Calender1}</Text>
                      
                </View>
                <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}} 
                      
                      ><Image source={require('./image/level.png')} style={{height:12,width:15,marginRight:2}}/><Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}
                >{Level}{this.state.level1}</Text></View>
            </View>
        
        <Calendar
        minDate={this.state.minday}
        maxDate={this.state.today}
        onDayPress={this.onDayPress}
        style={styles.calendar}
        hideExtraDays
        
      />
       
       
      </ScrollView>
      
    );
  }
  onDayPress(day) {
    let tday = day.timestamp;
    var promise = saveItem("Calenderday", day.dateString, () => { }).then((result) => {
      var promise = saveItem("texinput1", '0', () => { }).then((result) => {
        var promise = saveItem("texinput2", '0', () => { }).then((result) => {
        var promise = saveItem("Calender", tday.toString(), () => { }).then((result) => {
          // console.log(day.timestamp-28800000+1)
          const { navigate } = this.props.navigation;
          navigate('Roots');
        }).catch((error) => {
          console.error(new Error("失败"));
        })
      }).catch((error) => {
        console.error(new Error("失败"));
      })
    }).catch((error) => {
      console.error(new Error("失败"));
    })
    }).catch((error) => {
        console.error(new Error("失败"));
    })
  }
}




const styles = StyleSheet.create({
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topView:{
    height:50,
    width:width-50,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#4FA4FF'
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#F6FCFF',
    paddingLeft:20,
  },
});
export default Calender
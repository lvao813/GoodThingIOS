import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  Linking,
  Alert,
  NativeModules,
  Modal,
  TouchableOpacity,

} from 'react-native';
import {  List } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Activity from './common/ModalActivity';
// import * as WeChat from 'react-native-wechat';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { toastLong} from './common/ToastUtils';
import { NavigationActions } from 'react-navigation';
import { toDipsHeight} from './common/PixelRatioUtils';
import { AboutPath} from './common/constants_test';
import { Setting1,Time,About1,Suggestions,Developer,RateUs,Wechat1,Microblogging,Friends,ChangTime,Level,
  WachatTitle,Description,WachatEr,EXPTitle,Modal3Happ,ModalOK,Modal2Happ,Modal2Msg} from './common/constants_titel';
import { getItem,saveItem} from './common/AsyncStorage';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const Item = List.Item;
const Brief = Item.Brief;



 class Settings extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
           value: false,
        disabled: false,
        changeTxt:'是否接受通知？',
        activtityVisible:false,
        isDateTimePickerVisible: false,
        timepicker:'',
        level1:1,
        level:1,
        modalVisible2:false,
        modalVisible1:false,
        
       
        };
        // WeChat.registerApp('wx6000a418f168ac83');
        
      }
      componentWillMount() {
        var promise = getItem("swith").then((result) => {
           if(result==null){

           }else{
             if(result=='1'){
               let swith = true;
              this.setState({
                value:swith,
                changeTxt:'接受通知'
              });
             }
           
              var promise = getItem("time12").then((result) => {
                if(result==null){
                  // alert('1')
                }else{
                  // alert(result)
                  this.setState({timepicker:result})
                }
                
            }).catch((error) => {
              console.error(new Error("失败"));
            })
          }
            var promise = getItem("level").then((result) => {
                this.setState({level1:parseInt(result)})
                
            }).catch((error) => {
              console.error(new Error("失败"));
            })
      }).catch((error) => {
        console.error(new Error("失败"));
      })
        

      }
      _friends(){
        var promise = getItem("friends").then((result) => {
          // alert(parseInt(result))
          let nu = parseInt(result)+1;
          // alert(nu)

          var promise = saveItem("friends", nu.toString(), () => { }).then((result) => {
            
          }).catch((error) => {
            console.error(new Error("失败"));
          })
        }).catch((error) => {
          console.error(new Error("失败"));
        })
      }
      _alert(exp){
        Alert.alert(
          EXPTitle,
          '+'+exp+' exp',
          [
            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }

   _Link(Url) {
    // alert('1')
    // 打开外部URL链接

    //  alert(Url)
    Linking.canOpenURL(Url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + Url);
      } else {
        return Linking.openURL(Url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
      console.log( date);

      // alert(date.toJSON())
      let nowtime = date.toJSON()
      let year = nowtime.slice(0,4)
      let months = nowtime.slice(5,7)
      let day = nowtime.slice(8,10)
      // alert(year+'-'+months+'-'+day)
      let newdate =''+date+'';
      let time = newdate.slice(16,24)
      let hour = time.slice(0,2)
      let mm = time.slice(3,5)
      let ss = time.slice(6,9)
      // alert(hour+'-'+mm+'-'+ss)
      if(months.slice(0,1)==0){
        months = months.slice(1,2)
      }
      if(hour.slice(0,1)==0){
        hour = hour.slice(1,2)
      }
      if(mm.slice(0,1)==0){
        mm = mm.slice(1,2)
      }
      if(ss.slice(0,1)==0){
      ss = ss.slice(1,2)
      }
      // console.log(months+hour+mm+ss)
      var promise = saveItem("time12", time, () => { }).then((result) => {
        this.setState({timepicker:time});
        this._hideDateTimePicker();
        // NativeModules.MyNativeModule.showTime( year,months,day,hour,mm,ss)
        
      }).catch((error) => {
        console.error(new Error("失败"));
      })
      

      this.setState({timepicker:time});
      this._hideDateTimePicker();
      
    };

  _alert(exp){
    Alert.alert(
      'Congratulations to gain experience',
      '+'+exp+' exp',
      [
        
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  exp(){
    var promise = getItem("exp").then((result) => {
      let exp = parseInt(result)+50;
        
        var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
          this._alert(50)

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      
    }).catch((error) => {
      console.error(new Error("失败"));
    })

  }     
  // _weixin(){
    
  //   WeChat.isWXAppInstalled()
  //   .then((isInstalled) => {
  //     if (isInstalled) {
        
  //      var promise =  WeChat.shareToSession({
  //         title:WachatTitle,
  //         description: Description,
  //         // thumbImage: 'http://img.mp.sohu.com/upload/20170624/13254199b97140f380ba30d670abd0c8_th.png',
  //         type: 'news',
  //         webpageUrl: 'https://www.vloveapp.com/'
  //       }).then((result) =>{
  //         this.setState({modalVisible2:true})
  //       }).catch((error) => {
  //         // toastLong('请点击发送')
          
  //       });
  //     } else {
  //       toastLong(WachatEr)
  //       // this.setState({modalVisible2:true})
        
        
        
  //     }
  //   });
  // }
  _swith(value){
    // alert(value)
    let swvalue = value
    // alert('1')
    if(value){
      swvalue = '1'
      // alert(value)
    }else{
      swvalue = '0'
    }
    var promise = saveItem("swith", swvalue, () => { }).then((result) => {
        this.setState({
            value:value,
            changeTxt:value?'接受通知':'关闭通知'
        });
      
    }).catch((error) => {
      console.error(new Error("失败"));
    })
        
  }
  _level(exp){
    // alert(exp);
    let ex;
    let ext;
      if(0<exp&&exp<50){
        ext=50-exp;
        ex=exp/50;
        this.setState({level:1})
      }else if(49<exp&&exp<100){
        ext=100-exp;
        ex=(exp-50)/50;
        this.setState({level:2})
        
      }else if(99<exp&&exp<200){
        ext=200-exp;
        ex=(exp-100)/100;
        this.setState({level:3})
      }else if(199<exp&&exp<350){
        ext=350-exp;
        ex=(exp-200)/150;
        this.setState({level:4})
      }else if(349<exp&&exp<550){
        ext=550-exp;
        ex=(exp-350)/200;
        this.setState({level:5})
      }else if(549<exp&&exp<800){
        ext=800-exp;
        ex=(exp-550)/250;
        this.setState({level:6})
      }else if(799<exp&&exp<1100){
        ext=1100-exp;
        ex=(exp-800)/300;
        this.setState({level:7})
      }else if(1099<exp&&exp<1450){
        ext=1450-exp;
        ex=(exp-1100)/350;
        this.setState({level:8})
      }else if(1449<exp&&exp<1850){
        ext=1850-exp;
        ex=(exp-1450)/400;
        this.setState({level:9})
      }else if(1849<exp&&exp<2300){
        ext=2300-exp;
        ex=(exp-1850)/450;
        this.setState({level:10})
      }else if(exp==0){
        ext=50-exp;
        ex=exp/50;
        this.setState({level:1})
      }else {
        ext=2800-exp;
        ex=(exp-2300)/500;
        this.setState({level:11})
      }
        
  }
  _chelik1(){
    let level1 = this.state.level; 
    this.setState({modalVisible1:!this.state.modalVisible1})
    var promise = saveItem("level", level1.toString(), () => { }).then((result) => {
      // alert(parseInt(result))
      // alert('ok')
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
          NavigationActions.navigate({routeName: 'Roots'})
          ]
      })
      
      this.props.navigation.dispatch(resetAction);
    }).catch((error) => {
      console.error(new Error("失败"));
    })
     
  }
  _chelik(){
    this.setState({modalVisible2:false,modalVisible1:false})
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
      NavigationActions.navigate({routeName: 'Roots'})
      ]
  })
  
  this.props.navigation.dispatch(resetAction);
  }
  _upLeve(){
    var promise = getItem("exp").then((result) => {
      let exp = parseInt(result)+50;
          this._level(exp)
        var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
          this._friends()
          if(this.state.level==this.state.level1){
            this._chelik()
          }else{
            this.setState({modalVisible2:false,modalVisible1:true})
          }
          
        }).catch((error) => {
          console.error(new Error("失败"));
        })
      
    }).catch((error) => {
      console.error(new Error("失败"));
    })
  }

  render() {
   
    return (
      <View style={{backgroundColor:'#FAFAFA',marginTop:20}}>
        <View style={{flexDirection:'row',backgroundColor:'#4FA4FF'}}>
                <View style={styles.topView}>
                    <Text style={styles.topText}>{Setting1}</Text>
                      
                </View>
                <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}} 
                      
                      ><Image source={require('./image/level.png')} style={{height:12,width:15,marginRight:2}}/><Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}
                >{Level}{this.state.level1}</Text></View>
        </View>
        <View style={{height:10}}></View>
      <List  className="my-list">
        <Item   extra={<Switch value={this.state.value} onValueChange={(value)=>{this._swith(value) }}/>}>{Time}</Item>
        {this.state.value?
          <Item extra={this.state.timepicker} arrow="horizontal" multipleLine='true' onClick={this._showDateTimePicker }>{ChangTime}</Item>
          :<View></View>}
        
      </List>
      <View style={{height:10}}></View>
      <List  className="my-list2">
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {const { navigate } = this.props.navigation;
 +              navigate('About');} }>{About1}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('mailto:info@vloveapp.com')}}>{Suggestions}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('mailto:info@vloveapp.com')}}>{Developer}</Item>
      </List>
      <View style={{height:10}}></View>
      <List className="my-list4">
      <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>{RateUs}</Item>
      </List>
      <View style={{height:10}}></View>
      <List className="my-list3">
          
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('http://weibo.com/p/1006066366532562/home?profile_ftype=1&is_all=1#_0')}}>{Microblogging}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('http://www.vloveapp.com/')}}>{Wechat1}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {
            // this._weixin()
          } }>{Friends}</Item>
      </List>
      
        
      <Activity visible={this.state.activtityVisible} />
          <DateTimePicker
          mode='time'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          />
          <Modal
              visible={this.state.modalVisible2}
              animationType={'fade'}
              transparent = {true}
              onRequestClose={()=> {}}
          >
              <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.4)'}} >
                  <View style={{backgroundColor:'#fff',height:250,width:width-130,borderRadius:10}}>
                      <View style={{flex:6,borderColor:'#333',borderBottomWidth:toDipsHeight(1),justifyContent:'center',alignItems:'center'}}>
                          <Text style={{color:'#4fa4ff',fontSize:16,marginBottom:40}}>{Modal3Happ}</Text>
                          <Text style={{fontSize:35,fontWeight:'bold',color:'#4fa4ff'}}>+ 50xp</Text>
                          
                          
                      </View>
                      <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',}} onPress={()=>{this._upLeve()}}>
                          <Text style={{color:'#4fa4ff',fontSize:16,fontWeight:'bold'}}>{ModalOK}</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </Modal>
          <Modal
          visible={this.state.modalVisible1}
          animationType={'fade'}
          transparent = {true}
          onRequestClose={()=> {}}
          >
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.4)'}} >
              <View style={{backgroundColor:'#fff',height:250,width:width-130,borderRadius:10}}>
                  <View style={{flex:6,borderColor:'#333',borderBottomWidth:toDipsHeight(1),justifyContent:'center',alignItems:'center'}}>
                      <Text style={{color:'#4fa4ff',fontSize:16,}}>{Modal2Msg}</Text>
                      <Text style={{color:'#4fa4ff',fontSize:16,}}>{Modal2Happ}</Text>
                      <Text style={{fontSize:35,fontWeight:'bold',color:'#4fa4ff'}}>Level {this.state.level}!</Text>
                      
                      
                  </View>
                  <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',}} onPress={()=>{this._chelik1()}}>
                      <Text style={{color:'#4fa4ff',fontSize:16,fontWeight:'bold'}}>{ModalOK}</Text>
                  </TouchableOpacity>
              </View>
          </View>
          </Modal>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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
export default Settings
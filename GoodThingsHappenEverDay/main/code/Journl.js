import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { InputItem } from 'antd-mobile';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import { toastLong } from './common/ToastUtils';
import { HTEDJurnal } from './common/constants';
import {
  Jurnal1, Today, ThingsToday, onPassIn, EXPTitle, Level, WachatEr, WachatNull, Modal2Happ, Modal2Msg, ModalDay, ModalGoal,
  ModalST, ModalStaek, ModalOK, Modal3Happ, Modal4Happ
} from './common/constants_titel';
import * as WeChat from 'react-native-wechat';
import { NavigationActions } from 'react-navigation';
import { toDipsHeight } from './common/PixelRatioUtils'


const weChatAppId = 'wx6000a418f168ac83';
import { getItem, saveItem } from './common/AsyncStorage'
class Journl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput1: '',
      textInput2: '',
      textInput3: '',
      image1: false,
      image2: false,
      image3: false,
      BottomHeight: false,
      ban1: true,
      ban4: false,
      ban3: false,
      keyarry: '',
      Test1: '',
      dayArry: [],
      lkayArry: [],
      dayYMD: '',
      dayDate: '',
      NU: 0,
      textSt1: 0,
      exp: 0,
      Calenderday: '',
      datetime: 0,
      leftban: true,
      rightban: false,
      level1: 1,
      level: 1,
      InupLen1: 100,
      InupLen2: 100,
      InupLen3: 100,
      InupLen1Ban: false,
      InupLen2Ban: false,
      InupLen3Ban: false,
      modalVisible: false,
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      streak: 0,
      exp2: 0,



    };
    WeChat.registerApp('wx6000a418f168ac83');
  }
  componentWillMount() {
    // var promise = getItem("NaverAsk").then((result) => {

    //     if(result=='1'){

    //     }else{
    //         Alert.alert(
    //             '是否登陆？',
    //             '登陆之后可以保存数据，避免数据丢失',
    //             [
    //               {text: '不再提示', onPress: () => {this._NaverAsk()}},
    //               {text: '登陆', onPress: () => {this._ononLine()}, style: 'cancel'},
    //               {text: '取消', onPress: () => console.log('OK Pressed')},
    //             ],
    //             { cancelable: false }
    //           )
    //     }

    //   }).catch((error) => {
    //     // console.log('1');
    //   })

    var promise = getItem("keyarry1").then((result) => {

      var promise = getItem("Calenderday").then((result) => {

        let YMD = result;
        var promise = getItem("Calender").then((result) => {

          let nTime = new Date(new Date().setHours(0, 0, 0, 0))
          let newtime = Date.parse(nTime) + 28800000;
          let timess = parseInt(result) + 1


          let newDate = new Date(newtime);
          let newDay = newDate.toJSON();
          let tday = newDay.slice(0, 10)//yy-mm-dd格式时间

          let unixTimestamp = new Date(parseInt(result));
          let yday = unixTimestamp.toJSON();
          let thisday = yday.slice(0, 10);



          if (parseInt(result) > 0) {//某一天

            if (thisday == tday) {

              this.setState({ dayDate: parseInt(result), textSt1: 0, exp: 10, Calenderday: tday })
              this._makeUp(parseInt(result))
            } else {

              let Calenderint = parseInt(result);
              let lastday = 86400000 * 2;
              let newCalenderint = Calenderint - 86400000;
              let lastdaytime = newtime - lastday;
              if (Calenderint < lastdaytime) {
                this.setState({ dayDate: parseInt(result), textSt1: 1, exp: 5, Calenderday: thisday, rightban: true, leftban: false })
                this._makeUp(parseInt(result))
              } else {
                this.setState({ dayDate: parseInt(result), textSt1: 1, exp: 5, Calenderday: thisday, rightban: true })
                this._makeUp(parseInt(result))
              }

            }

          } else if (parseInt(result) == 0) {//今天

            this.setState({ dayDate: newtime, textSt1: 0, exp: 10, NU: 3, Calenderday: tday });
            this._makeUp(newtime);

          } else if (result == null) {//第一次登陆且是今天

            this.setState({ dayDate: newtime, textSt1: 0, exp: 10, NU: 3, Calenderday: tday });
            this._makeUp(parseInt(newtime));
          } else {

            this.setState({ dayDate: newtime, textSt1: 0, exp: 10, NU: 3, Calenderday: tday });
            this._makeUp(parseInt(newtime));
          }


        }).catch((error) => {

        })
      }).catch((error) => {

      })

      this.setState({ keyarry: JSON.parse(result) })

    }).catch((error) => {

    })



  }
  componentWillUnmount() {


  }
  componentDidMount() {
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0, 10)
    //当天凌晨的毫秒数
    let nTime = new Date(new Date().setHours(0, 0, 0, 0))
    let newtime = Date.parse(nTime);
    var promise = getItem("streak1").then((result) => {
      this.setState({ streak: parseInt(result) })
      var promise = getItem("level").then((result) => {
        this.setState({ level1: parseInt(result) })

        var promise = getItem("Calenderday").then((result) => {

          let keyin = this.state.dayArry;

          var promise = getItem("leftday").then((result) => {

            this.setState({ datetime: result })

            var promise = getItem("texinput2").then((result) => {

              var promise = getItem("texinput2").then((result) => {

                if (this.state.dayArry == '') {

                  this._filling1(this.state.dayArry)


                } else {

                  this._filling1(this.state.dayArry)
                }
                var promise = getItem("tomorrow").then((result) => {

                  let nTime = new Date(new Date().setHours(0, 0, 0, 0));
                  let newtime = Date.parse(nTime);

                  let tinput = newtime + 86400000;


                  if (newtime == parseInt(result)) {//判断间隔天数

                    var promise = saveItem("tomorrow", tinput.toString(), () => { }).then((result) => {
                      var promise = getItem("streak1").then((result) => {

                        let streak1 = parseInt(result);
                        let streak = parseInt(result);

                        if (streak1 < 30) {
                          if (streak1 % 3 == 0 && streak1 % 30 != 0) {

                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result) + 10;

                              var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {


                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })

                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          } else if (streak1 % 5 == 0 && streak1 % 10 != 0 && streak1 % 15 != 0 && streak1 % 20 != 0 && streak1 % 25 != 0 && 30) {
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result) + 20;

                              var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {


                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })

                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          } else if (streak1 % 7 == 0 && streak1 % 14 != 0 && streak1 % 21 != 0 && streak1 % 28 != 0) {
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result) + 30;

                              var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {


                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })

                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          } else if (streak1 % 14 == 0 && streak1 % 28 != 0) {
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result) + 50;

                              var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {


                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })

                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          } else if (streak1 % 30 == 0 && streak1 != 0) {
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result) + 100;

                              var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {

                                // alert(100)
                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })

                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })

                          } else if (streak1 == 0) {
                          }
                        } else {
                          var promise = getItem("exp").then((result) => {
                            let exp = parseInt(result) + 5;

                            var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {

                              // alert(5)
                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })

                          }).catch((error) => {
                            console.error(new Error("失败"));
                          })
                        }
                        var promise = saveItem("streak1", streak.toString(), () => { }).then((result) => {

                          var promise = getItem("longstreak1").then((result) => {
                            // alert(result)
                            if (parseInt(result) < streak) {
                              var promise = saveItem("longstreak1", streak.toString(), () => { }).then((result) => {
                                var promise = getItem("daythings").then((result) => {
                                  // alert(result)

                                  let streak1 = 0;
                                  var promise = saveItem("daythings", streak1.toString(), () => { }).then((result) => {


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
                          }).catch((error) => {
                            console.error(new Error("失败"));
                          })
                        }).catch((error) => {
                          console.error(new Error("失败"));
                        })
                      }).catch((error) => {

                      })
                    }).catch((error) => {

                    })
                  } else if (tinput == parseInt(result)) {//今天第二次进入

                    this.setState({ NU: 1 })
                  } else {
                    let streak = 0;
                    var promise = saveItem("streak1", streak.toString(), () => { }).then((result) => {
                      var promise = getItem("daythings").then((result) => {

                        let streak1 = 0;
                        var promise = saveItem("daythings", streak1.toString(), () => { }).then((result) => {


                        }).catch((error) => {
                          console.error(new Error("失败"));
                        })

                      }).catch((error) => {
                        console.error(new Error("失败"));
                      })
                    }).catch((error) => {

                    })
                  }

                }).catch((error) => {
                  // console.log('1');
                })
              }).catch((error) => {
                // console.log('1');
              })
            }).catch((error) => {
              // console.log('1');
            })
          }).catch((error) => {
            // console.log('1');
          })
        }).catch((error) => {
          // console.log('1');
        })
      }).catch((error) => {
        // console.log('1');
      })
    }).catch((error) => {
      // console.log('1');
    })
  }
  _makeUp(day) {
    // alert(day)
    // 
    let endday = day + 86400000;
    let keyarry = this.state.keyarry;

    for (let i in this.state.keyarry) {

      if (keyarry[i] > day && keyarry[i] < endday) {

        var promise = getItem(keyarry[i]).then((result) => {
          this.state.dayArry.push(result)
          this.state.lkayArry.push(keyarry[i])

        }).catch((error) => {

        })

      }

    }

  }
  _filling() {


    if (this.state.dayArry[0].slice(0, 10) == '') {

    } else if (this.state.dayArry[0].slice(0, 10) == null) {

    } else {
      this.setState({ textInput1: this.state.dayArry[0].slice(11), image1: true, ban4: true })
      if (this.state.dayArry[1].slice(0, 10) == '') {

      } else if (this.state.dayArry[1].slice(0, 10) == null) {

      } else {
        this.setState({ textInput2: this.state.dayArry[1].slice(11), image2: true, ban3: true })
        if (this.state.dayArry[2].slice(0, 10) == '') {

        } else if (this.state.dayArry[2].slice(0, 10) == null) {

        } else {
          this.setState({ textInput3: this.state.dayArry[2].slice(11), ban1: false, ban4: false, ban3: false, image3: true })
        }
      }
    }
  }
  _ononLine() {
    toastLong('跳转到登陆页')
  }
  _NaverAsk() {
    var promise = saveItem("NaverAsk", '1', () => { }).then((result) => {
      toastLong('修改成功')
    }).catch((error) => {
      console.error(new Error("失败"));
    })
  }
  _EXPUP() {
    var promise = getItem("exp").then((result) => {
      let exp = parseInt(result) + 20;

      var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {




        this.setState({ modalVisible2: true })

      }).catch((error) => {
        console.error(new Error("失败11"));
      })

    }).catch((error) => {
      console.error(new Error("失败10"));
    })
  }
  _alert(exp) {
    Alert.alert(
      EXPTitle,
      '+' + exp + ' exp',
      [

        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }
  textI1(date) {

    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0, 10)//yy-mm-dd格式时间
    let timestamp = Date.parse(new Date());//毫秒时间戳
    let AsyncStorageKey = '' + timestamp + ''
    let input = this.state.textInput1
    let Dayinput = thisday + '-' + '1';

    if (this.state.textInput1 == '') {
      this.setState({ image1: false, InupLen1Ban: false })
    } else {








      var promise = saveItem("texinput1", input, () => { }).then((result) => {
        var promise = getItem("daythings").then((result) => {
          let daythings = parseInt(result) + 1;

          var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
            this.setState({ ban4: true, InupLen1Ban: false });

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
  textI2(date) {

    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0, 10)//yy-mm-dd格式时间
    let timestamp = Date.parse(new Date());//毫秒时间戳
    let AsyncStorageKey = '' + timestamp + ''
    let input = this.state.textInput2

    if (this.state.textInput2 == '') {
      this.setState({ image2: false, InupLen2Ban: false })
    } else {

      var promise = saveItem("texinput2", input, () => { }).then((result) => {
        var promise = getItem("daythings").then((result) => {
          let daythings = parseInt(result) + 1;

          var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
            this.setState({ ban3: true, InupLen2Ban: false })

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

  _textI3(date) {

    let newDate = new Date();
    let newDay = newDate.toJSON();
    let tday = newDay.slice(0, 10)//yy-mm-dd格式时间
    let timestamp = date + 1;//毫秒时间戳

    let unixTimestamp = new Date(timestamp);
    let yday = unixTimestamp.toJSON();
    let thisday = yday.slice(0, 10);

    let AsyncStorageKey = '' + timestamp + ''
    let input1 = thisday + '-' + this.state.textInput1


    if (this.state.textInput3 == '') {
      this.setState({ image3: false, BottomHeight: false, InupLen3Ban: false })
    } else {

      var promise = saveItem(AsyncStorageKey, input1, () => { }).then((result) => {
        this.state.keyarry.push(AsyncStorageKey)
        this.setState({ ban1: false, Test1: AsyncStorageKey });
        var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
          //input2
          let newDate1 = new Date();
          let newDay1 = newDate1.toJSON();
          let thisday1 = thisday
          let timestamp1 = date + 100;
          let AsyncStorageKey = '' + timestamp1 + ''
          let input2 = thisday1 + '-' + this.state.textInput2
          var promise = saveItem(AsyncStorageKey, input2, () => { }).then((result) => {
            // alert(timestamp1)
            this.state.keyarry.push(AsyncStorageKey)
            this.setState({ ban4: false, Test1: AsyncStorageKey });
            var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
              //input3
              let newDate2 = new Date();
              let newDay2 = newDate2.toJSON();
              let thisday2 = thisday
              let timestamp2 = date + 200;
              let AsyncStorageKey = '' + timestamp2 + ''
              let input3 = thisday + '-' + this.state.textInput3

              var promise = saveItem(AsyncStorageKey, input3, () => { }).then((result) => {
                this.setState({ ban3: false, BottomHeight: false, InupLen3Ban: false });
                this.state.keyarry.push(AsyncStorageKey);

                var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
                  var promise = saveItem("texinput3", input3, () => { }).then((result) => {
                    // alert(this.state.keyarry)

                    if (this.state.textSt1 == 0) { this._streak(this.state.textSt1) }

                    var promise = getItem("exp").then((result) => {
                      let exp = parseInt(result) + this.state.exp;

                      var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                        if (this.state.exp == 10) {
                          this._streakDays(this.state.streak)
                        } else if (this.state.exp == 5) {
                          this.setState({ modalVisible3: true })
                        } else {
                          this.setState({ modalVisible3: true })
                        }





                      }).catch((error) => {
                        console.error(new Error("失败11"));
                      })

                    }).catch((error) => {
                      console.error(new Error("失败10"));
                    })

                  }).catch((error) => {
                    console.error(new Error("失败9"));
                  })

                }).catch((error) => {
                  console.error(new Error("失败8"));
                })

              }).catch((error) => {
                console.error(new Error("失败7"));
              })

            }).catch((error) => {
              console.error(new Error("失败6"));
            })
          }).catch((error) => {
            console.error(new Error("失败5"));
          })

        }).catch((error) => {
          console.error(new Error("失败4"));
        })

      }).catch((error) => {
        console.error(new Error("失败3"));
      })





    }


  }
  _streak(date) {
    if (date == 0) {
      var promise = getItem("streak1").then((result) => {
        // alert(date)


        let streak = parseInt(result) + 1;
        var promise = saveItem("streak1", streak.toString(), () => { }).then((result) => {
          this.setState({ streak: streak })
        }).catch((error) => {
          console.error(new Error("失败"));
        })
      }).catch((error) => {
        console.error(new Error("失败"));
      })
    }
  }
  _filling1(data) {


    if (data == null) {

    } else if (data == '') {

      var promise = getItem("texinput1").then((result) => {

        if (result !== '0') {
          this.setState({
            textInput1: result, textInput2: '', textInput3: '', image1: true, image2: false, image3: false,
            ban1: true, ban4: true, ban3: false,
          })
          var promise = getItem("texinput2").then((result) => {
            if (result !== '0') {
              this.setState({
                textInput2: result, textInput3: '', image1: true, image2: true, image3: false,
                ban1: true, ban4: true, ban3: false,
              })
            } else {
              this.setState({
                textInput2: '', textInput3: '', image2: false, image3: false,
                ban1: true, ban4: false, ban3: false,
              })
            }

          }).catch((error) => {
            console.error(new Error("失败"));
          })
        } else if (result == '0') {
          this.setState({
            textInput1: '', textInput2: '', textInput3: '', image1: false, image2: false, image3: false,
            ban1: true, ban4: false, ban3: false,
          })
        } else {

          this.setState({
            textInput1: '', textInput2: '', textInput3: '', image1: false, image2: false, image3: false,
            ban1: true, ban4: false, ban3: false,
          })
        }

      }).catch((error) => {
        console.error(new Error("失败"));
      })
    } else {

      if (data[0].slice(0, 10) == '') {

      } else if (data[0].slice(0, 10) == null) {

      } else {
        this.setState({ textInput1: data[0].slice(11), image1: true, ban4: true })
        if (data[1].slice(0, 10) == '') {

        } else if (data[1].slice(0, 10) == null) {

        } else {
          this.setState({ textInput2: data[1].slice(11), image2: true, ban3: true })
          if (data[2].slice(0, 10) == '') {

          } else if (data[2].slice(0, 10) == null) {

          } else {
            this.setState({ textInput3: data[2].slice(11), ban1: false, ban4: false, ban3: false, image3: true })
          }
        }
      }
    }
  }
  _makeUp1(day) {

    let endday = day + 86400000;
    let keyarry = this.state.keyarry;

    let daysArry = [];
    var promise = getItem("streak1").then((result) => {

      for (let i in this.state.keyarry) {

        if (keyarry[i] > day && keyarry[i] < endday) {

          var promise = getItem(keyarry[i]).then((result) => {
            daysArry.push(result)

          }).catch((error) => {

          })

        }

      }


      var promise = getItem("streak1").then((result) => {

        this._filling1(daysArry)
        var promise = getItem("streak1").then((result) => {


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
  _leftbotton() {
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let tday = newDay.slice(0, 10)//yy-mm-dd格式时间
    //传入的时间
    let nTime = new Date(new Date().setHours(0, 0, 0, 0))
    let newtime = Date.parse(nTime) + 28800000;
    var promise = saveItem("texinput1", '0', () => { }).then((result) => {
      var promise = saveItem("texinput2", '0', () => { }).then((result) => {
        var promise = getItem("Calender").then((result) => {
          let Calenderint = parseInt(result);

          if (parseInt(result) == 0) {
            Calenderint = newtime
          } else {
            Calenderint = parseInt(result)
          }
          var promise = getItem("leftday").then((result) => {


            let testtime = newtime - parseInt(result);

            let lastday = 86400000 * 2;
            let newCalenderint = Calenderint - 86400000;
            let lastdaytime = newtime - lastday;

            if (Calenderint < lastdaytime) {

              this.setState({ leftban: false })
            } else {

              let leftbo = Calenderint - 86400000;
              var promise = saveItem("Calender", leftbo.toString(), () => { }).then((result) => {
                let unixTimestamp = new Date(leftbo);
                let yday = unixTimestamp.toJSON();
                let thisday = yday.slice(0, 10);
                if (leftbo < lastdaytime) {
                  this.setState({ dayDate: leftbo, textSt1: 1, exp: 5, Calenderday: thisday, leftban: false })
                  this._makeUp1(leftbo)
                } else {
                  this.setState({ dayDate: leftbo, textSt1: 1, exp: 5, Calenderday: thisday, rightban: true, })
                  this._makeUp1(leftbo)
                }



                var promise = getItem("leftday").then((result) => {

                }).catch((error) => {
                  console.error(new Error("失败"));
                })
              }).catch((error) => {
                console.error(new Error("失败"));
              })
            }


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
  _rightbotton() {
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let tday = newDay.slice(0, 10)//yy-mm-dd格式时间
    //传入的时间
    let nTime = new Date(new Date().setHours(0, 0, 0, 0))
    let newtime = Date.parse(nTime) + 28800000;
    var promise = saveItem("texinput1", '0', () => { }).then((result) => {
      var promise = saveItem("texinput2", '0', () => { }).then((result) => {
        var promise = getItem("Calender").then((result) => {
          let Calenderint = parseInt(result)
          if (parseInt(result) == 0) {
            Calenderint = newtime
          }
          var promise = getItem("leftday").then((result) => {

            let testtime = this.state.dayDate + 86400000;

            let lastday = 86400000 * 2;

            let lastdaytime = Calenderint - lastday

            if (Calenderint == newtime) {

              this.setState({ rightban: false });
            } else if (Calenderint > newtime) {

            } else {

              let leftbo = Calenderint + 86400000;
              var promise = saveItem("Calender", leftbo.toString(), () => { }).then((result) => {
                let unixTimestamp = new Date(leftbo);
                let yday = unixTimestamp.toJSON();
                let thisday = yday.slice(0, 10);
                if (leftbo == newtime) {
                  this.setState({ dayDate: leftbo, textSt1: 0, exp: 10, Calenderday: thisday, rightban: false })
                  this._makeUp1(leftbo)
                } else {
                  this.setState({ dayDate: leftbo, textSt1: 1, exp: 5, Calenderday: thisday, leftban: true })
                  this._makeUp1(leftbo)
                }


                var promise = getItem("leftday").then((result) => {


                }).catch((error) => {
                  console.error(new Error("失败"));
                })
              }).catch((error) => {
                console.error(new Error("失败"));
              })
            }


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
  _weixin1(text) {
    let text1 = text+'                                                                    '+'https://www.vloveapp.com/'
    if (text == '') {
      toastLong(WachatNull)
    } else {
      WeChat.isWXAppInstalled()
        .then((isInstalled) => {
          if (isInstalled) {
            var promise = WeChat.shareToTimeline({  title:'记录美好的一天',
            description: text1,
           
            type: 'text',
           
          }).then((result) => {



              this._EXPUP()
            }).catch((error) => {

              // toastLong(error.message);
            });
          } else {
            toastLong(WachatEr);
            // this._EXPUP()

          }
        });
    }

  }
  _today() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Roots' })
      ]
    })

    this.props.navigation.dispatch(resetAction);
  }
  _ChangInput1(Text) {
    let inttext = Text;
    this.setState({ textInput1: Text, InupLen1: 100 - inttext.length })

  }
  _ChangInput2(Text) {
    let inttext = Text;
    this.setState({ textInput2: Text, InupLen2: 100 - inttext.length })

  }
  _ChangInput3(Text) {
    let inttext = Text;
    this.setState({ textInput3: Text, InupLen3: 100 - inttext.length })

  }
  _level(exp) {
    // alert(exp);
    let ex;
    let ext;
    if (0 < exp && exp < 50) {
      ext = 50 - exp;
      ex = exp / 50;
      this.setState({ level: 1 })
    } else if (49 < exp && exp < 100) {
      ext = 100 - exp;
      ex = (exp - 50) / 50;
      this.setState({ level: 2 })

    } else if (99 < exp && exp < 200) {
      ext = 200 - exp;
      ex = (exp - 100) / 100;
      this.setState({ level: 3 })
    } else if (199 < exp && exp < 350) {
      ext = 350 - exp;
      ex = (exp - 200) / 150;
      this.setState({ level: 4 })
    } else if (349 < exp && exp < 550) {
      ext = 550 - exp;
      ex = (exp - 350) / 200;
      this.setState({ level: 5 })
    } else if (549 < exp && exp < 800) {
      ext = 800 - exp;
      ex = (exp - 550) / 250;
      this.setState({ level: 6 })
    } else if (799 < exp && exp < 1100) {
      ext = 1100 - exp;
      ex = (exp - 800) / 300;
      this.setState({ level: 7 })
    } else if (1099 < exp && exp < 1450) {
      ext = 1450 - exp;
      ex = (exp - 1100) / 350;
      this.setState({ level: 8 })
    } else if (1449 < exp && exp < 1850) {
      ext = 1850 - exp;
      ex = (exp - 1450) / 400;
      this.setState({ level: 9 })
    } else if (1849 < exp && exp < 2300) {
      ext = 2300 - exp;
      ex = (exp - 1850) / 450;
      this.setState({ level: 10 })
    } else if (exp == 0) {
      ext = 50 - exp;
      ex = exp / 50;
      this.setState({ level: 1 })
    } else {
      ext = 2800 - exp;
      ex = (exp - 2300) / 500;
      this.setState({ level: 11 })
    }

  }
  _upLeve() {
    var promise = getItem("exp").then((result) => {
      let exp = parseInt(result);
      this._level(exp)
      var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
        if (this.state.level == this.state.level1) {
          this._chelik()
        } else {
          this.setState({ modalVisible: false, modalVisible2: false, modalVisible3: false, modalVisible1: true })
        }

      }).catch((error) => {
        console.error(new Error("失败"));
      })

    }).catch((error) => {
      console.error(new Error("失败"));
    })
  }


  _chelik() {
    this.setState({ modalVisible: false, modalVisible2: false, modalVisible3: false })
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Roots' })
      ]
    })

    this.props.navigation.dispatch(resetAction);
  }
  _chelik1() {
    let level1 = this.state.level;
    this.setState({ modalVisible1: !this.state.modalVisible1 })
    var promise = saveItem("level", level1.toString(), () => { }).then((result) => {

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Roots' })
        ]
      })

      this.props.navigation.dispatch(resetAction);
    }).catch((error) => {
      console.error(new Error("失败"));
    })

  }

  _streakDays(days) {

    let streak1 = days

    if (streak1 < 30 && streak1 > 0) {

      if (streak1 % 3 == 0 && streak1 % 30 != 0) {

        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 10;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {

            this.setState({ exp2: 10, modalVisible: true })
          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      } else if (streak1 % 5 == 0 && streak1 % 10 != 0 && streak1 % 15 != 0 && streak1 % 20 != 0 && streak1 % 25 != 0 && 30) {
        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 20;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {

            this.setState({ exp2: 20, modalVisible: true })
          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      } else if (streak1 % 7 == 0 && streak1 % 14 != 0 && streak1 % 21 != 0 && streak1 % 28 != 0) {
        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 30;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
            this.setState({ exp2: 30, modalVisible: true })

          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      } else if (streak1 % 14 == 0 && streak1 % 28 != 0) {
        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 50;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
            this.setState({ exp2: 50, modalVisible: true })

          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      } else if (streak1 % 30 == 0 && streak1 != 0) {
        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 100;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
            this.setState({ exp2: 100, modalVisible: true })

          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })

      } else if (streak1 == 0) {

      } else if (streak1 < 3 && streak1 > 0) {

        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 1;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
            this.setState({ exp2: 1, modalVisible: true })
            // alert(5)
          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      } else {
        var promise = getItem("exp").then((result) => {
          let exp = parseInt(result) + 1;

          var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
            this.setState({ exp2: 1, modalVisible: true })

          }).catch((error) => {
            console.error(new Error("失败"));
          })

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      }
    } else {

      var promise = getItem("exp").then((result) => {
        let exp = parseInt(result) + 5;

        var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
          this.setState({ exp2: 5, modalVisible: true })

        }).catch((error) => {
          console.error(new Error("失败"));
        })

      }).catch((error) => {
        console.error(new Error("失败"));
      })
    }

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', backgroundColor: '#4FA4FF' }}>
          <View style={styles.topView}>
            <Text style={styles.topText}>{Jurnal1}</Text>

          </View>
          <View style={{ height: 50, width: 40, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}

          ><Image source={require('./image/level.png')} style={{ height: 12, width: 15, marginRight: 2 }} /><Text style={{ textAlign: 'center', fontSize: 12, color: '#F6FCFF' }}
          >{Level}{this.state.level1}</Text></View>
        </View>
        <View style={{ flexDirection: 'row', height: 80, width: width, backgroundColor: '#fff' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {this.state.leftban ?

              <TouchableOpacity onPress={() => { this._leftbotton() }}><Image source={require('./image/back.png')} style={{ height: 30, width: 30, }}></Image></TouchableOpacity>
              : <View style={{ height: 30, width: 30, }} />
            }
          </View>
          <View style={{ flex: 3, }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
              <Text style={{ color: '#4FA4FF', fontWeight: 'bold' }}>{this.state.Calenderday}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ color: '#4FA4FF', fontWeight: 'bold' }}>{ThingsToday}</Text>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
            {this.state.rightban ?
              <TouchableOpacity onPress={() => { this._rightbotton() }}><Image source={require('./image/more.png')} style={{ height: 30, width: 30, }}></Image></TouchableOpacity>
              : <View style={{ height: 30, width: 30, }} />
            }
          </View>

        </View>
        <View style={styles.inputView}>

          <View style={styles.inputViewRight}>
            <TextInput
              style={styles.TextInputStyle}
              // defaultValue='45641611'
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={20}
              maxLength={100}
              placeholder={onPassIn}
              autoCapitalize='sentences'
              clearButtonMode='never'
              editable={this.state.ban1}//如果值为假，文本是不可编辑，默认值为真
              onChangeText={(Text) => { this._ChangInput1(Text) }}
              value={this.state.textInput1}
              returnKeyType="join"
              onChange={() => { }}//当文本框内容变化时调用此回调函数
              onFocus={() => { this.setState({ image1: true, InupLen1Ban: true }) }}//当文本框获得焦点的时候调用此回调函数
              onBlur={() => { this.textI1(this.state.textSt1) }}//当文本框失去焦点的时候调用此回调函数
              onEndEditing={() => { }}//结束编辑时，调用回调函数
            ></TextInput>

          </View>
          <View style={{ height: 30, width: width - 50, flexDirection: 'row' }}>
            <View style={{ width: 30, height: 30, justifyContent: 'flex-end' }}>
              {this.state.InupLen1Ban ?
                <Text style={{ fontSize: 10, color: '#b3b3b3', marginLeft: 8, marginBottom: 5, textAlign: 'center' }}>{this.state.InupLen1}</Text>
                : <View></View>
              }
            </View>
            <View style={{ width: width - 80, height: 30, alignItems: 'flex-end' }}>
              {this.state.image1 ?
                <TouchableOpacity style={styles.leftImageBottom}
                  onPress={() => { this._weixin1(this.state.textInput1) }}
                >
                  <Image style={{ height: 30, width: 35, resizeMode: 'cover' }} source={require('./image/wechat.png')}></Image>
                </TouchableOpacity>
                : <View style={styles.leftImageBottom} />
              }
            </View>
          </View>
        </View>
        <View style={styles.inputView}>


          <View style={styles.inputViewRight}>
            <TextInput
              style={styles.TextInputStyle}
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={20}
              maxLength={100}
              placeholder={onPassIn}
              autoCapitalize='sentences'
              clearButtonMode='never'
              editable={this.state.ban4}//如果值为假，文本是不可编辑，默认值为真
              returnKeyType="join"
              value={this.state.textInput2}
              onChangeText={(Text) => { this._ChangInput2(Text) }}//当文本框内容变化时调用此回调函数
              onFocus={() => { this.setState({ image2: true, InupLen2Ban: true }) }}//当文本框获得焦点的时候调用此回调函数
              onBlur={() => { this.textI2(this.state.textSt1) }}//当文本框失去焦点的时候调用此回调函数
              onEndEditing={() => { }}//结束编辑时，调用回调函数
            ></TextInput>
          </View>
          <View style={{ height: 30, width: width - 50, flexDirection: 'row' }}>
            <View style={{ width: 30, height: 30, justifyContent: 'flex-end' }}>
              {this.state.InupLen2Ban ?
                <Text style={{ fontSize: 10, color: '#b3b3b3', marginLeft: 8, marginBottom: 5, textAlign: 'center' }}>{this.state.InupLen2}</Text>
                : <View></View>
              }
            </View>
            <View style={{ width: width - 80, height: 30, alignItems: 'flex-end' }}>
              {this.state.image1 ?
                <TouchableOpacity style={styles.leftImageBottom}
                  onPress={() => { this._weixin1(this.state.textInput2) }}
                >
                  <Image style={{ height: 30, width: 35, resizeMode: 'cover' }} source={require('./image/wechat.png')}></Image>
                </TouchableOpacity>
                : <View style={styles.leftImageBottom} />
              }
            </View>
          </View>
        </View>
        <View style={styles.inputView} >

          <View style={styles.inputViewRight} >
            <TextInput
              style={styles.TextInputStyle}
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={20}
              maxLength={100}
              placeholder={onPassIn}
              autoCapitalize='sentences'
              clearButtonMode='never'
              editable={this.state.ban3}//如果值为假，文本是不可编辑，默认值为真
              returnKeyType="join"
              value={this.state.textInput3}
              onChangeText={(Text) => { this._ChangInput3(Text) }}//当文本框内容变化时调用此回调函数
              onFocus={() => { this.setState({ image3: true, BottomHeight: true, InupLen3Ban: true }) }}//当文本框获得焦点的时候调用此回调函数
              onBlur={() => { this._textI3(this.state.dayDate) }}//当文本框失去焦点的时候调用此回调函数
              onEndEditing={() => { }}//结束编辑时，调用回调函数
            ></TextInput>
          </View>
          <View style={{ height: 30, width: width - 50, flexDirection: 'row' }}>
            <View style={{ width: 30, height: 30, justifyContent: 'flex-end' }}>
              {this.state.InupLen3Ban ?
                <Text style={{ fontSize: 10, color: '#b3b3b3', marginLeft: 8, marginBottom: 5, textAlign: 'center' }}>{this.state.InupLen3}</Text>
                : <View></View>
              }
            </View>
            <View style={{ width: width - 80, height: 30, alignItems: 'flex-end' }}>
              {this.state.image1 ?
                <TouchableOpacity style={styles.leftImageBottom}
                  onPress={() => { this._weixin1(this.state.textInput3) }}
                >
                  <Image style={{ height: 30, width: 35, resizeMode: 'cover' }} source={require('./image/wechat.png')}></Image>
                </TouchableOpacity>
                : <View style={styles.leftImageBottom} />
              }
            </View>
          </View>

        </View>
        {this.state.BottomHeight ?
          <View style={{ height: 80 }}></View>
          : <View></View>

        }
        <Modal
          visible={this.state.modalVisible}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => { }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }} >
            <View style={{ backgroundColor: '#fff', height: 250, width: width - 130, borderRadius: 10 }}>
              <View style={{ flex: 6, borderColor: '#333', borderBottomWidth: toDipsHeight(1), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, }}>{ModalST}</Text>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#4fa4ff' }}>1</Text>
                <Text style={{ color: '#4fa4ff', fontSize: 16, }}>{ModalDay}</Text>
                <Text style={{ color: '#4fa4ff', fontSize: 16, }}>{ModalGoal}+{this.state.exp}xp</Text>
                <Text style={{ color: '#4fa4ff', fontSize: 16, }}>{ModalStaek}{this.state.streak}{ModalDay}：+{this.state.exp2}xp</Text>
              </View>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => { this._upLeve() }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, fontWeight: 'bold' }}>{ModalOK}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible1}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => { }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }} >
            <View style={{ backgroundColor: '#fff', height: 250, width: width - 130, borderRadius: 10 }}>
              <View style={{ flex: 6, borderColor: '#333', borderBottomWidth: toDipsHeight(1), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, }}>{Modal2Msg}</Text>
                <Text style={{ color: '#4fa4ff', fontSize: 16, }}>{Modal2Happ}</Text>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#4fa4ff' }}>Level {this.state.level}!</Text>


              </View>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => { this._chelik1() }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, fontWeight: 'bold' }}>{ModalOK}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible2}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => { }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }} >
            <View style={{ backgroundColor: '#fff', height: 250, width: width - 130, borderRadius: 10 }}>
              <View style={{ flex: 6, borderColor: '#333', borderBottomWidth: toDipsHeight(1), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, marginBottom: 40 }}>{Modal3Happ}</Text>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#4fa4ff' }}>+ 20xp</Text>


              </View>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => { this._upLeve() }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, fontWeight: 'bold' }}>{ModalOK}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible3}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => { }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }} >
            <View style={{ backgroundColor: '#fff', height: 250, width: width - 130, borderRadius: 10 }}>
              <View style={{ flex: 6, borderColor: '#333', borderBottomWidth: toDipsHeight(1), justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: '#4fa4ff', fontSize: 16, marginBottom: 40 }}>{Modal4Happ}</Text>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#4fa4ff' }}>+ {this.state.exp}xp</Text>


              </View>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => { this._upLeve() }}>
                <Text style={{ color: '#4fa4ff', fontSize: 16, fontWeight: 'bold' }}>{ModalOK}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    height: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputView: {
    height: (height - 290) / 3,
    flex: 1,
    backgroundColor: '#fff',
    margin: 25,
    marginBottom: 3,
    marginTop: 20,


    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#666',
    shadowOpacity: 1,
    shadowRadius: 2




  },
  inputViewLeft: {
    flex: 2,
    // backgroundColor:'#245634',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputViewRight: {
    flex: 4,
    // backgroundColor:'#465456'
    // alignItems:'flex-start'
  },
  leftImage: {
    height: 50,
    width: 50,
  },
  leftImageTop: {
    height: 24,
    flex: 1,
    marginBottom: 5,
  },
  leftImageBottom: {
    height: 30, width: 30,

  },
  TextInputStyle: {
    // flex:1,
    padding: 10,
    paddingBottom: 0,
    // width:200,
    textAlignVertical: 'top',//改变编辑框的初始位置
    // fontSize:20,
    fontWeight: 'bold',

  }, topView: {
    height: 50,
    width: width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4FA4FF'
  },
  topText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F6FCFF',
    paddingLeft: 20,
  }
});
export default Journl
import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile';
import Calender from './Calender';
import History from './History';
import Journl from './Journl';
import Settings from './Settings';
import Profile from './Profile';
// import JPushModule from 'jpush-react-native';
import {Calender2,Calender3,History2,History3,Jurnal2,Jurnal3,Profile2,Profile3,Settings2,Settings3 } from './common/constants';
import { Calender1,Jurnal1,Setting1,Profile1,History1} from './common/constants_titel';
export default class Roots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'greenTab',
            hide: true
        };
    }
    componentDidMount() {
        // JPushModule.addReceiveNotificationListener((map) => {
        // //   alert('1')
        //     // console.log("alertContent: " + map.alertContent);
        //     // console.log("extras: " + map.extras);
        //     // var extra = JSON.parse(map.extras);
        //     // console.log(extra.key + ": " + extra.value);
        // });
      }
      componentDidMount() {
        // JPushModule.addReceiveOpenNotificationListener((map) => {
        //        alert('Opening notification!');
        //         console.log("map.extra: " + map.key);
        //     });
    }
    componentWillUnmount() {
        // console.log("Will clear all notifications");
        // JPushModule.clearAllNotifications();
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    renderContent(pageText) {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar
                    placeholder="搜索"
                    showCancelButton
                />
                <Text onPress={() => navigate('Info', { name: 'Jane' })} arrow="horizontal" style={{ margin: 50 }}>点击查看-{pageText}</Text>
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#ccc"
                hidden={this.state.hide}
            >
                <TabBar.Item
                    title={Calender1}
                    // badge={2}
                    icon={{uri:Calender2,scale:2}}
                    selectedIcon={{uri:Calender3,scale:2}}
                    iconStyle={{width:20,height:20}}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    <Calender navigation={this.props.navigation} />
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri:History2,scale:2}}
                    selectedIcon={{uri:History3,scale:2}}
                    iconStyle={{width:20,height:20}}
                    title={History1}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                     <History navigation={this.props.navigation} />
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri:Jurnal2,scale:2}}
                    selectedIcon={{uri:Jurnal3,scale:2}}
                    iconStyle={{width:20,height:20}}
                    title={Jurnal1}
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => this.onChangeTab('greenTab')}
                >
                    <Journl navigation={this.props.navigation} />
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri:Profile2,scale:2}}
                    selectedIcon={{uri:Profile3,scale:2}}
                    iconStyle={{width:20,height:20}}
                    title={Profile1}
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    <Profile navigation={this.props.navigation}/>
                </TabBar.Item>
                 <TabBar.Item
                    icon={{uri:Settings2,scale:2}}
                    selectedIcon={{uri:Settings3,scale:2}}
                    iconStyle={{width:20,height:20}}
                    title={Setting1}
                    selected={this.state.selectedTab === 'blackTab'}
                    onPress={() => this.onChangeTab('blackTab')}
                >
                     <Settings navigation={this.props.navigation} />
                </TabBar.Item>
            </TabBar>
        );
    }
}
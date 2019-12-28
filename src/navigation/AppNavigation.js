import Category from '../screens/Category';
import SearchScreen from '../screens/SearchScreen';
import OffersScreen from '../screens/OffersScreen';
import ReservationScreen from '../screens/ReservationScreen';
import MoreScreen from '../screens/MoreScreen';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import React, { Component } from 'react';

import { AsyncStorage } from 'react-native';
import LoginForm from '../screens/LoginForm-Screen';
import ForgetPass from '../screens/ForgetPassScreen';
import { fromLeft, fromRight, fromBottom } from 'react-navigation-transitions';
import SignUp from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import Splash from '../screens/splash';
import { connect } from 'react-redux';

// import styles from './styles';

class AppNavigation extends Component {
    state = {
        direction: AsyncStorage.getItem('direction', (err, res) => {
            this.state.direction = res;
        }),
    };


    render() {
        const loginStack = createStackNavigator(
            {
                login: { screen: LoginForm },
                forgetPass: { screen: ForgetPass },
            },
            {
                mode: 'modal',
                headerMode: 'none',
            }
        );
        const signUpStack = createStackNavigator(
            {
                logStack: {
                    screen: loginStack,
                    navigationOptions: () => ({
                        header: null,
                    }),
                },
                SignUp,
            },
            {
                transitionConfig: () =>
                    this.state.direction === 'LTR'
                        ? fromLeft(300)
                        : fromRight(300),
            }
        );

        /*        const homeStk=createStackNavigator({
                           hm:{screen:HomeScreen,navigationOptions:()=>({
                                   headerTitle:'Home',
                                   headerLeft:()=><Icon name={'rowing'}/>
                               })},
                          details:{screen:Details,navigationOptions:()=>({
                                  headerTitle:'BallroomCard Details',
                                  gesturesEnabled:true
                              })}

                      },{
                          headerMode:'float',
                          headerTransitionPreset:'fade-in-place',
                          transitionConfig:()=>flipX(3000),
                      });*/

        const homeStack = createStackNavigator(
            {
                category: { screen: Category },
                tab: {
                    screen: createBottomTabNavigator(
                        {
                            home: { screen: HomeScreen },
                            search: { screen: SearchScreen },
                            offers: { screen: OffersScreen },
                            reserve: { screen: ReservationScreen },
                            more: { screen: MoreScreen },
                        },
                        {
                            tabBarOptions: {
                                style: {
                                    backgroundColor: this.props.theme
                                        .SECONDARY_BACKGROUND_COLOR,
                                },
                                labelStyle: {
                                    fontSize: 18,
                                    color: '#777',
                                },
                                activeBackgroundColor: '#999',
                                inactiveTintColor: '#000',
                                activeTintColor: '#eee',


                            },
                        }
                    ),
                },
            },
            {
                initialRouteName: 'category',
                defaultNavigationOptions: {
                    header: null,
                },
                transitionConfig: () =>
                    this.state.direction === 'LTR'
                        ? fromLeft(300)
                        : fromRight(300),
            }
        );

        const appSwitch = createSwitchNavigator(
            {
                splash: { screen: Splash },
                sign: { screen: signUpStack },
                homeStack,
            },
            {
                initialRouteName: 'splash',
            }
        );

        const AppNavigator = createAppContainer(appSwitch);
        return <AppNavigator />;
    }
}
const mapStateToProps = state => {
    return {
        theme: state.Theme.theme,
    };
};
export default connect(mapStateToProps)(AppNavigation);

import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';
import Reactotron from 'reactotron-react-native'
import i18n from "../localization/i18n";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class OffersScreen extends Component {
    static navigationOptions=({navigation})=>({
        tabBarLabel:(navigation)=>(<Text style={{alignSelf:'center',color:navigation.tintColor}}>{i18n.t('navigation.tab.offersTab')}</Text>),
        tabBarIcon: (navigation) => <Icon name={'sale'} color={navigation.tintColor} size={30}/>,
    });


    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>
                   Offers Screen....
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});
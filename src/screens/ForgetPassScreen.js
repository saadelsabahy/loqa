import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';

// import styles from './styles';

class ForgetPass extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>ForgetPass Screen ....</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '70%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cda',
    },
});

export default ForgetPass;

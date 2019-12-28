import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Btn extends Component {
    render() {
        const {
            title,
            titleStyle,
            type,
            containerStyle,
            buttonStyle,
            otherProps,
        } = this.props;
        return (
            <View>
                <Button
                    title={title}
                    titleStyle={titleStyle}
                    type={type}
                    containerStyle={[
                        styles.buttonContainerStyle,
                        containerStyle,
                    ]}
                    buttonStyle={[styles.buttonStyle, buttonStyle]}
                    {...otherProps}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: '90%',
    },
});

import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome5'

class FormInput extends Component {
    render() {
        const {
            labelText,
            labelStyle,
            placeholder,
            placeholderColor,
            value,
            onTextChange,
            containerStyle,
            inputContainerStyle,
            inputStyle,
            iconComponent,
            secureTextEntry,
            prop,
            type
        }=this.props;

        return (
            <View>
                <Input
                    label={labelText}
                    labelStyle={[styles.labelStyle,labelStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor}
                    value={value}
                    onChange={onTextChange}
                    containerStyle={[styles.ContainerStyle,containerStyle]}
                    inputContainerStyle={[styles.inputContainerStyle,inputContainerStyle]}
                    inputStyle={[styles.inputStyle,inputStyle]}
                    leftIcon={iconComponent}
                    secureTextEntry={secureTextEntry}
                    keyboardType={type}
                    {...prop}
                />
            </View>

        );
    }
}
const styles=StyleSheet.create({

    ContainerStyle:{
        display:'flex',
        width:'100%'
    },
    inputContainerStyle:{
        backgroundColor:'#ddd',
        padding:5
    },
    inputStyle:{
        padding:5
    },
    labelStyle:{
        alignSelf:'flex-start',
        marginBottom:5
    },
});

export {FormInput};
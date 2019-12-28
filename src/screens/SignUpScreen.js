import React, { Component } from 'react';

import {View, StyleSheet, Text, KeyboardAvoidingView, Dimensions, Alert} from 'react-native';
import {FormInput} from '../components'
import Icon from "react-native-vector-icons/FontAwesome5";
import {Button} from "react-native-elements";
import { connect } from 'react-redux'
import validator from "validator";
import { emailChange,passwordChange,handleAlertPressing } from "../actions";
import { signUserUp } from "../actions";
import AlertComponent from "../components/Alert";

// import styles from './styles';

class SignUp extends Component {
    state={
        viewMode:Dimensions.get('window').height > 500 ? 'portrait': 'landscape',
        focused:false,
        errorMail:false,
        errorPass:false,
        errorMessageMail:'',
        errorMessagePass:'',
    };
    handleEmailChange=(email)=>{
        this.props.emailChange(email.nativeEvent.text);
        if ( ! validator.isEmail(this.props.email)){
            this.setState({errorMail:true,errorMessageMail:'Must be valid email'})
        }else {
            this.setState({errorMail:false,errorMessageMail:''})
        }
    };
    handlePasswordChange=(password)=>{
        this.props.passwordChange(password.nativeEvent.text);
        if ( ! validator.isLength(this.props.password,{min:8,max:31})){
            this.setState({errorPass:true,errorMessagePass:'Must be at least 8 characters'})
        }else {
            this.setState({errorPass:false,errorMessagePass:''})
        }

    };
    handleSignUp=()=>{
        const {email,password}=this.props;
        this.props.signUserUp(email,password);
    };
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.mainContainer}>
                <View>
                    {
                        this.props.showAlert===true ? <AlertComponent/> : null
                    }
                </View>
                <View>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>

                <View style={{alignSelf:'center',width:'90%'}}>
                    <View>
                        <FormInput
                            labelText={'Email'}
                            labelStyle={styles.labelStyle}
                            placeholder={'example@email.com'}
                            placeholderColor={'#0C3877'}
                            value={this.props.email}
                            onTextChange={this.handleEmailChange}
                            containerStyle={styles.inputWrapperStyle}
                            inputContainerStyle={
                            this.state.errorMail===false ? styles.inputContainerStyle
                                :[styles.inputContainerStyle,styles.inputContainerErrorStyle]
                        }
                            inputStyle={styles.inputStyle}
                            iconComponent={
                            <Icon name={'envelope'} style={styles.inputIconStyle}/>
                        }
                            type={'email-address'}
                            prop={
                                {
                                    errorMessage: this.state.errorMessageMail,
                                    errorStyle:styles.errorStyle,
                                }

                            }
                        />
                    </View>

                    <View>
                        <FormInput
                            labelText={'Password'}
                            labelStyle={styles.labelStyle}
                            placeholder={'Enter Your Password'}
                            placeholderColor={'#0C3877'}
                            value={this.props.password}
                            onTextChange={this.handlePasswordChange}
                            containerStyle={styles.inputWrapperStyle}
                            inputContainerStyle={
                                this.state.errorPass===false ? styles.inputContainerStyle
                                    :[styles.inputContainerStyle,styles.inputContainerErrorStyle]
                            }
                            inputStyle={styles.inputStyle}
                            iconComponent={
                                <Icon name={'key'} style={styles.inputIconStyle}/>
                            }
                            secureTextEntry
                            type={'default'}
                            prop={
                                {
                                    errorMessage: this.state.errorMessagePass,
                                    errorStyle:styles.errorStyle,
                                }

                            }
                        />
                    </View>
                </View>

                <View>
                    <Button
                        title={'Sign Up'}
                        buttonStyle={{width:'70%',alignSelf:'center',borderRadius: 10,padding:7,backgroundColor:'#fff'}}
                        titleStyle={{color:'#0C3877',fontSize:20}}
                        onPress={this.handleSignUp}
                        loading={this.props.loading}
                        loadingProps={{animating:true,color:'#0C3877',size:'large'}}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Button disabled={true} title={"Already have account ?"} type={'clear'} but disabledTitleStyle={{color:'#ddd'}}/>
                    <Button
                        title={'Login'}
                        type={'clear'}
                        titleStyle={{color:'#c5cae9'}}
                        onPress={()=>this.props.navigation.navigate('login')}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#0C3877'
    },
    signUpText:{
        color:'#fff',
        fontSize:25,
        fontWeight:'400'
    },
    labelStyle:{
        color:'#fff',
        marginLeft:10
    },
    inputWrapperStyle:{
        marginBottom:5,
    },
    inputContainerStyle:{
        backgroundColor:'#fff',
        borderRadius:10,
    },
    inputContainerErrorStyle:{
        borderWidth: 2,
        borderColor:'red'
    },
    inputStyle:{
        color:'#0C3877',
    },
    inputIconStyle:{
        color:'#0C3877',
        fontSize:30
    },
});
const mapStateToProps = (state) => {
    return (
        {
            email: state.Auth.email,
            password: state.Auth.password,
            loading: state.Auth.spinner,
            showAlert: state.Auth.showAlert,
            title: state.Auth.title,
            message: state.Auth.message
        }
    )
};
export default connect (mapStateToProps,{emailChange,passwordChange,signUserUp,handleAlertPressing}) (SignUp);
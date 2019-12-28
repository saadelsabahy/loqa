import React, { Component } from 'react';
import {
    Dimensions,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { FormInput } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Button } from 'react-native-elements';
import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { emailChange, passwordChange, signUserIn } from '../actions';
import { connect } from 'react-redux';
import validator from 'validator';
import AlertComponent from '../components/Alert';

class LoginForm extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        viewMode:
            Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
        focused: false,
        errorMail: false,
        errorPass: false,
        errorMessageMail: '',
        errorMessagePass: '',
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.changeOrientation);
    }

    changeOrientation = dims => {
        this.setState({
            viewMode:
                Dimensions.get('window').height > 500
                    ? 'portrait'
                    : 'landscape',
        });
    };

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.changeOrientation);
    }

    handleFocusing = () => {
        this.setState({ focused: true });
    };

    handleBluring = () => {
        this.setState({ focused: false });
    };
    handleEmailChange = email => {
        this.props.emailChange(email.nativeEvent.text);
        if (!validator.isEmail(this.props.email)) {
            this.setState({
                errorMail: true,
                errorMessageMail: 'Must be valid email',
            });
        } else {
            this.setState({ errorMail: false, errorMessageMail: '' });
        }
    };
    handlePasswordChange = password => {
        this.props.passwordChange(password.nativeEvent.text);
        if (!validator.isLength(this.props.password, { min: 8, max: 31 })) {
            this.setState({
                errorPass: true,
                errorMessagePass: 'Must be at least 8 characters',
            });
        } else {
            this.setState({ errorPass: false, errorMessagePass: '' });
        }
    };
    handleLogin = () => {
        const { email, password } = this.props;
        this.props.signUserIn(email, password, () =>
            this.props.navigation.navigate('homeStack')
        );
    };

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <SafeAreaView style={styles.mainContainer}>
                    <StatusBar
                        backgroundColor="#0C3877"
                        barStyle="light-content"
                    />
                    <View>
                        {this.props.showAlert === true ? (
                            <AlertComponent />
                        ) : null}
                    </View>

                    <View style={styles.headerContainer}>
                        <View style={styles.headerIconContainer}>
                            <Text style={styles.headerTextStyle}>Login</Text>
                            {this.state.viewMode === 'landscape' ||
                            this.state.focused === true ? null : (
                                <Icon
                                    name={'sign-in-alt'}
                                    style={styles.Icon}
                                    size={50}
                                />
                            )}
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.viewInputsStyle}>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <View>
                                    <FormInput
                                        labelText={'Email'}
                                        labelStyle={styles.labelStyle}
                                        placeholder={'example@email.com'}
                                        placeholderColor={'#0C3877'}
                                        value={this.props.email}
                                        onTextChange={this.handleEmailChange}
                                        containerStyle={
                                            styles.inputWrapperStyle
                                        }
                                        inputContainerStyle={
                                            this.state.errorMail === false
                                                ? styles.inputContainerStyle
                                                : [
                                                      styles.inputContainerStyle,
                                                      styles.inputContainerErrorStyle,
                                                  ]
                                        }
                                        inputStyle={styles.inputStyle}
                                        iconComponent={
                                            <Icon
                                                name={'envelope'}
                                                style={styles.inputIconStyle}
                                            />
                                        }
                                        type={'email-address'}
                                        prop={{
                                            onFocus: this.handleFocusing,
                                            onBlur: this.handleBluring,
                                            errorMessage: this.state
                                                .errorMessageMail,
                                            errorStyle: styles.errorStyle,
                                        }}
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
                                        containerStyle={
                                            styles.inputWrapperStyle
                                        }
                                        inputContainerStyle={
                                            this.state.errorPass === false
                                                ? styles.inputContainerStyle
                                                : [
                                                      styles.inputContainerStyle,
                                                      styles.inputContainerErrorStyle,
                                                  ]
                                        }
                                        inputStyle={styles.inputStyle}
                                        iconComponent={
                                            <Icon
                                                name={'key'}
                                                style={styles.inputIconStyle}
                                            />
                                        }
                                        secureTextEntry
                                        type={'default'}
                                        prop={{
                                            onFocus: this.handleFocusing,
                                            onBlur: this.handleBluring,
                                            errorMessage: this.state
                                                .errorMessagePass,
                                            errorStyle: styles.errorStyle,
                                        }}
                                    />
                                </View>
                            </View>

                            <View
                                style={{ flex: 0.5, justifyContent: 'center' }}>
                                <View>
                                    <Button
                                        title={'Login'}
                                        buttonStyle={{
                                            width: '70%',
                                            alignSelf: 'center',
                                            borderRadius: 10,
                                            padding: 7,
                                            backgroundColor: '#fff',
                                        }}
                                        titleStyle={{
                                            color: '#0C3877',
                                            fontSize: 20,
                                        }}
                                        onPress={this.handleLogin}
                                        loading={this.props.loading}
                                        loadingProps={{
                                            animating: true,
                                            color: '#0C3877',
                                            size: 'large',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.footerContainer}>
                        <View style={styles.viewButtonStyle}>
                            <View>
                                <Button
                                    title={'Forget Password ?'}
                                    type={'clear'}
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            'forgetPass'
                                        )
                                    }
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                disabled={true}
                                title={"Don't have account ?"}
                                type={'clear'}
                                but
                                disabledTitleStyle={{ color: '#ddd' }}
                            />
                            <Button
                                title={'Sign Up'}
                                type={'clear'}
                                titleStyle={{ color: '#c5cae9' }}
                                onPress={() =>
                                    this.props.navigation.navigate('SignUp')
                                }
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        justifyContent: 'space-between',
        backgroundColor: '#0C3877',
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        /*marginTop: this.state.keyboardShowed === true ? -this.state.heightKeyboard : 0*/
    },
    headerTextContainerStyle: {
        flex: 1,
    },
    headerTextStyle: {
        fontSize: hpd(7),
        fontWeight: '400',
        color: '#fff',
    },
    headerIconContainer: {
        flex: 1,
        alignSelf: 'center',
    },
    Icon: {
        color: '#ddd',
        alignSelf: 'center',
    },

    formContainer: {
        flex: 3,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    viewInputsStyle: {
        flex: 5,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    viewButtonStyle: {
        flex: 0.5,
        justifyContent: 'space-evenly',
    },
    labelStyle: {
        color: '#fff',
        marginLeft: 10,
    },
    inputWrapperStyle: {
        marginBottom: 5,
    },
    inputContainerStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    inputContainerErrorStyle: {
        borderWidth: 2,
        borderColor: 'red',
    },
    inputStyle: {
        color: '#0C3877',
    },
    inputIconStyle: {
        color: '#0C3877',
        fontSize: 30,
    },

    footerContainer: {
        flex: Dimensions.get('window').height > 500 ? 0.8 : 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    errorStyle: {
        color: 'red',
    },
});
const mapStateToProps = state => {
    return {
        email: state.Auth.email,
        password: state.Auth.password,
        loading: state.Auth.spinner,
        showAlert: state.Auth.showAlert,
        title: state.Auth.title,
        message: state.Auth.message,
    };
};

export default connect(
    mapStateToProps,
    { emailChange, passwordChange, signUserIn }
)(LoginForm);

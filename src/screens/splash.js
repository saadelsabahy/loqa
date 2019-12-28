import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    AsyncStorage,
    I18nManager,
} from 'react-native';
import splashImage from '../../assets/splash.jpg';
import { connect } from 'react-redux';

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        setTimeout(async () => {
            await AsyncStorage.getItem('token', (err, token) =>
                this.props.navigation.navigate(token ? 'homeStack' : 'sign')
            );
        }, 500);
    }

    render() {
        return (
            <ImageBackground source={splashImage} style={styles.splashImage} />
        );
    }
}

const styles = StyleSheet.create({
    splashImage: {
        width: '100%',
        height: '100%',
    },
});
const mapStateToProps = state => {
    return {
        direction: state.Localization.RTL,
    };
};

export default connect(mapStateToProps)(Splash);

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Btn from '../components/Button';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');
import Reactotron from 'reactotron-react-native';
import i18n from '../localization/i18n';

export default class Category extends Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        try {
            await Font.loadAsync({
                cairo_regular: require('../../assets/fonts/Cairo-Light.ttf'),
                cairo_bold: require('../../assets/fonts/Cairo-Black.ttf'),
            });
            this.setState({ fontLoaded: true });
        } catch (e) {
            Reactotron.log('fontErorr', e);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {this.state.fontLoaded === true ? (
                    <LinearGradient
                        colors={['#1CB5D4', '#162F71']}
                        style={styles.gradientStyle}>
                        <View style={styles.buttonMainContainer}>
                            <Btn
                                title={i18n.t('categoryButtons.ballRoomButton')}
                                titleStyle={styles.buttonTitle}
                                type={'outline'}
                                buttonStyle={styles.buttonStyle}
                                otherProps={{
                                    onPress: () =>
                                        this.props.navigation.navigate('tab'),
                                }}
                            />
                        </View>

                        <View style={styles.buttonMainContainer}>
                            <Btn
                                title={i18n.t('categoryButtons.restButton')}
                                titleStyle={styles.buttonTitle}
                                type={'outline'}
                                buttonStyle={styles.buttonStyle}
                            />
                        </View>
                    </LinearGradient>
                ) : (
                    <Text>Font not loaded...</Text>
                )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    gradientStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonMainContainer: {
        display: 'flex',
        width: '100%',
        marginTop: 5,
        marginBottom: 10,
    },
    buttonTitle: {
        color: '#fff',
        fontFamily: 'cairo_regular',
        fontSize: 45,
    },
    buttonStyle: {
        width: '70%',
        backgroundColor: 'transparent',
        padding: 4,
        borderWidth: 3,
        borderColor: '#fff',
    },
});

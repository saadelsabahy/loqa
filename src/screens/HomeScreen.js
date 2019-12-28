import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, ScrollView } from 'react-native';
import i18n from '../localization/i18n';
import { Button } from 'react-native-elements';
import { changeLanguageArabic } from '../actions/LocalizationAction';
import { togglingTheme } from '../actions/ThemeAction';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends Component {
    state = {
        Theme: this.props.theme,
        direction: AsyncStorage.getItem('direction', (err, res) => {
            this.state.direction = res;
        }),
    };
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: navigation => (
            <Text
                style={{
                    alignSelf: 'center',
                    color: navigation.tintColor,
                }}>
                {i18n.t('navigation.tab.homeTab')}
            </Text>
        ),
        tabBarIcon: navigation => (
            <Icon name={'home'} color={navigation.tintColor} size={40} />
        ),
    });
    changeLanguage = (lang, dir) => {
        this.props.changeLanguageArabic(lang, dir);
    };
    changeTheme = () => {
        this.props.togglingTheme();
    };

    render() {
        return (
            <View
                style={[
                    styles.mapContainer,
                    {
                        backgroundColor: this.props.theme
                            .PRIMARY_BACKGROUND_COLOR,
                    },
                ]}>
                <Button
                    title={'arabic'}
                    onPress={() => this.changeLanguage('ar', 'RTL')}
                />
                <Button
                    title={'english'}
                    onPress={() => this.changeLanguage('en', 'LTR')}
                />
                <Button
                    title={'go to forget'}
                    onPress={() => this.props.navigation.navigate('category')}
                />
                <Button
                    title={'log out'}
                    onPress={() => {
                        AsyncStorage.removeItem('token', () =>
                            this.props.navigation.navigate('login')
                        );
                    }}
                />
                <Button title={'Change theme'} onPress={this.changeTheme} />
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: 'red',
                        width: 200,
                        height: 1000,
                    }}>
                    <Text style={{ alignSelf: 'flex-end' }}>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                    <Text>hello</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const mapStateToProps = state => {
    return {
        theme: state.Theme.theme,
    };
};

export default connect(
    mapStateToProps,
    { changeLanguageArabic, togglingTheme }
)(HomeScreen);

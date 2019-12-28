import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Reactotron from 'reactotron-react-native';
import i18n from '../localization/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik, Field, ErrorMessage } from 'formik';
import { Input, Button } from 'react-native-elements';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required()
        .label('Email'),
    password: Yup.string()
        .required()
        .label('Password')
        .min(6, 'too short')
        .max(10, 'too long'),
});

export default class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: navigation => (
            <Text style={{ alignSelf: 'center', color: navigation.tintColor }}>
                {i18n.t('navigation.tab.searchTab')}
            </Text>
        ),
        tabBarIcon: navigation => (
            <Icon name={'map-search'} color={navigation.tintColor} size={30} />
        ),
    });
    emailComponent = ({ form }) => {
        return (
            <Input
                style={{
                    width: '90%',
                    marginVertical: 20,
                }}
                /*  inputContainerStyle={{
                    borderBottomColor:
                        !form.errors['email'] && !form.touched['email']
                            ? '#000'
                            : '#f00',
                }} */
                placeholder="email"
                onChangeText={form.handleChange('email')}
                onFocus={() => form.setFieldTouched('email')}
                onBlur={form.handleBlur('email')}
                errorMessage={form.touched.email && form.errors.email}
            />
        );
    };

    passwordComponent = ({ form, field }) => {
        console.log(form.touched, form.errors);

        return (
            <Input
                style={{ width: '90%', marginVertical: 20 }}
                placeholder="password"
                onChangeText={form.handleChange('password')}
                errorMessage={form.touched.password && form.errors.password}
                onFocus={() => form.setFieldTouched('password')}
            />
        );
    };
    submit = values => {
        alert(JSON.stringify(values));
        console.log(values);
    };
    render() {
        return (
            <View style={styles.mainContainer}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => alert(JSON.stringify(values))}
                    validationSchema={validationSchema}>
                    {({ touched, errors, isSubmitting, handleSubmit }) => (
                        <React.Fragment>
                            <Field
                                name="email"
                                component={this.emailComponent}
                                formikKey={'email'}
                            />

                            <Field
                                name="password"
                                component={this.passwordComponent}
                                formikKey={'password'}
                            />

                            <Button title="submit" onPress={handleSubmit} />
                        </React.Fragment>
                    )}
                </Formik>
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

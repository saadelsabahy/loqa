import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { ScreenOrientation } from 'expo';
import firebase from 'firebase';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';

if (__DEV__) {
	import('./ReactotronConfig').then(() =>
		console.log('Reactotron Configured')
	);
}

class App extends Component {
	async componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyB5gN9cDVqIEPWoopB0k00cOQ4NSnbRLn4',
			authDomain: 'loqa-auth.firebaseapp.com',
			databaseURL: 'https://loqa-auth.firebaseio.com',
			projectId: 'loqa-auth',
			storageBucket: '',
			messagingSenderId: '933401172528',
			appId: '1:933401172528:web:b6c7a17e5a6714d0',
		});
		await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
	}

	render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<View style={styles.container}>
						<StatusBar translucent={true} backgroundColor={'#162F71'} />
						<AppNavigation />
					</View>
				</PersistGate>
			</Provider>
			/* <View style={styles.container}>
                <StyledCard />
            </View>*/
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		/* alignItems: 'center',
        justifyContent: 'center',*/
		backgroundColor: '#eee',
	},
});

export default App;

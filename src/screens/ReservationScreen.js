import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Reactotron from 'reactotron-react-native';
import i18n from '../localization/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment';

const format = 'YYYY-MM-DD';
const today = moment().format(format);
const maxDate = moment()
	.add(30, 'days')
	.format(format);

export default class ReservationScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		tabBarLabel: navigation => (
			<Text style={{ alignSelf: 'center', color: navigation.tintColor }}>
				{i18n.t('navigation.tab.reservationTab')}
			</Text>
		),
		tabBarIcon: navigation => (
			<Icon
				name={'file-document-box'}
				color={navigation.tintColor}
				size={30}
			/>
		),
	});
	initialState = {
		[today]: { disabled: false },
	};

	constructor() {
		super();

		this.state = {
			markedDates: this.initialState,
		};
	}

	onDaySelect = day => {
		const selectedDay = moment(day.dateString).format(format);

		let marked = true;
		let selected = true;
		let selectedColor = '#00f';
		if (this.state.markedDates[selectedDay]) {
			marked = !this.state.markedDates[selectedDay].marked;
			selected = !this.state.markedDates[selectedDay].selected;
		}

		const updatedMarkedDates = {
			...this.state.markedDates,
			[selectedDay]: { marked, selected, selectedColor },
		};

		return this.setState({ markedDates: updatedMarkedDates });
	};
	onAddAppointmentPressed = () => {
		let selectedDayes = [];
		Object.entries(this.state.markedDates).map(item => {
			if (item[1]['marked']) {
				selectedDayes.push(item);
			}
		});
		console.log('selected...', [...selectedDayes]);
	};
	render() {
		return (
			<View style={styles.mainContainer}>
				<Calendar
					minDate={today}
					maxDate={maxDate}
					onDayPress={this.onDaySelect}
					markedDates={this.state.markedDates}
				/>
				<Button title='calender' onPress={this.onAddAppointmentPressed} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingTop: 20,
	},
});

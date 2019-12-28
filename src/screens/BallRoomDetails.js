import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

// import styles from './styles';

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen..</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import SwipeableRating from "react-native-swipeable-rating";

class InfoCard extends Component {
  render() {
    const {
      mainContainerStyle,
      cardContainerStyle,
      cardWrapperStyle,
      contentContainerStyle,
      textContainerStyle,
      reviewContainerStyle,
      buttonContainerStyle,
      cardProps,
      ratingProps,
      textProps,
      textChildren,
      buttonProps
    } = this.props;
    return (
      <View style={[styles.mainContainer, mainContainerStyle]}>
        <Card
          containerStyle={[styles.cardContainer, cardContainerStyle]}
          wrapperStyle={[styles.cardWrapper, cardWrapperStyle]}
          imageWrapperStyle={[styles.imageWrapper]}
          {...cardProps}
        >
          <View style={[styles.contentContainer, contentContainerStyle]}>
            <View style={[styles.textContainer, textContainerStyle]}>
              <Text {...textProps}>{textChildren}</Text>
            </View>
            <View style={[styles.reviewContainer, reviewContainerStyle]}>
              <SwipeableRating {...ratingProps} />
            </View>

            <View style={[styles.buttonContainer, buttonContainerStyle]}>
              <Button {...buttonProps} />
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 280
  },
  cardContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: "100%",
    borderWidth: 0
  },
  cardWrapper: {
    justifyContent: "center",
    flex: 1,
    padding: 0,
    margin: 0
  },
  imageWrapper: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 0
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  reviewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export { InfoCard };

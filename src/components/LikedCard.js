//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { imageBorderRadius } from "../base";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

// create a component
const CategoryCard = ({ item }) => {
  return (
    <View>
      <TouchableOpacity
        // delayPressIn={20}
        style={{
          marginBottom: 12,
          borderRadius: imageBorderRadius,
        }}
      >
        <Image source={item.image} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "900",
    position: "absolute",
    color: "white",
    bottom: 0,
    right: 0,
    padding: 10,
    paddingRight: 17,
    zIndex: 1,
  },
  lg: {
    position: "absolute",
    height: 120,
    width: "100%",
    borderRadius: imageBorderRadius,
  },
  imageStyle: {
    width: "auto",
    height: 120,
    borderRadius: imageBorderRadius,
  },
});

//make this component available to the app
export default CategoryCard;

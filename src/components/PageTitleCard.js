//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { appPaddingHorizontal, baseStyle } from "../base";

// create a component
const PageTitleCard = ({ title, text }) => {
  return (
    <View>
      <Text style={baseStyle.heading}>{title}</Text>
      <Text
        style={{
          fontSize: 14,
          color: "white",
          opacity: 0.5,
          marginTop: -14,
          paddingHorizontal: appPaddingHorizontal,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default PageTitleCard;

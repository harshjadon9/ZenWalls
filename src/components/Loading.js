//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primary } from "../base";

// create a component
const Loading = ({ visible }) => {
  return (
    <View style={visible == false ? { display: "none" } : {}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 900,
          color: primary,
          width: "100%",
          textAlign: "center",
          paddingVertical: 50,
        }}
      >
        Loading...
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Loading;

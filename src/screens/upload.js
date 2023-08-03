//import liraries
import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PageTitleCard from "../components/PageTitleCard";
import { appPaddingHorizontal } from "../base";

// create a component
const Upload = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={tailwind("pt-2")}></View> */}
        <View style={{ height: 10 }}></View>
        <PageTitleCard
          title={"Upload"}
          text={"Share your art with the world"}
        />
        <View style={{ height: 30 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: appPaddingHorizontal,
  },
});

//make this component available to the app
export default Upload;

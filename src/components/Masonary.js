//import liraries
import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import CardItem from "./CardItem";
import { Context } from "../contexts/StateProvider";
import Loading from "./Loading";

// create a component
const Masonary = ({ data, navigation, loadingVisible = true }) => {
  const { pageLoading } = useContext(Context);
  // console.log(data);
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <CardItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={() => {
          // console.log("the end");
        }}
        onEndReachedThreshold={0.9}
      />

      {/* always loading visiable */}
      <Loading visible={loadingVisible} />

      {/* <Loading visible={pageLoading} /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  row: {
    flex: 1,
    gap: 10,
    width: "100%",
    justifyContent: "center",
  },
});

//make this component available to the app
export default Masonary;

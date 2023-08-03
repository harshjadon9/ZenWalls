//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from './Icon';

// create a component
const TopSubHeader = ({
  navigation,
  screen = 'null',
  payload = 'null',
  pop = 'null',
}) => {
  //   const item = payload.item;
  //   console.log(item);
  return (
    <View
      style={{
        height: 90,
        // backgroundColor: "red",
        zIndex: 4,
        position: 'absolute',
        width: '100%',
      }}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => {
          if (pop != 'null') {
            navigation.pop(pop);
            // navigation.navigate('',screen, params:item);
          }
          navigation.goBack();
        }}>
        <Icon iconName={'arrow-back'} size={40} strokeWidth="2" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuIcon, {right: 0, marginRight: 20}]}>
        <Icon iconName={'dots'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 20,
    position: 'absolute',
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 50,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});

//make this component available to the app
export default TopSubHeader;

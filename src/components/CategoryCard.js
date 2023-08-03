//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {imageBorderRadius} from '../base';
// import {LinearGradient} from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

// create a component
const CategoryCard = ({item}) => {
  return (
    <View>
      <TouchableOpacity
        delayPressIn={40}
        style={{
          marginBottom: 20,
          borderRadius: imageBorderRadius,
        }}>
        <Image source={item.image} style={styles.imageStyle} />
        <Text style={styles.title}>{item.title}</Text>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,0.0)',
            // "rgba(0,0,0,0.0)",
            // "rgba(0,0,0,0.0)",
            'black',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.lg}></LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '900',
    position: 'absolute',
    color: 'white',
    bottom: 0,
    right: 0,
    padding: 10,
    paddingRight: 17,
    zIndex: 1,
  },
  lg: {
    position: 'absolute',
    height: 120,
    width: '100%',
    borderRadius: imageBorderRadius,
  },
  imageStyle: {
    width: 'auto',
    height: 120,
    borderRadius: imageBorderRadius,
  },
});

//make this component available to the app
export default CategoryCard;

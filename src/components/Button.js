//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from './Icon';
import {
  background,
  backgroundDark,
  buttonBorderRadius,
  primary,
  touchableOpacity,
} from '../base';

// create a component
const MyButton = ({icon, iconSize = 24, title, width, type, onPress, size}) => {
  let backgroundColor = 'black';
  let color = 'white';

  let fontSize = 20;
  let paddingVertical = 16;
  let paddingHorizontal = 25;

  if (size == 'small') {
    fontSize = 15;
    paddingVertical = 10;
    paddingHorizontal = 12;
    width = 100;
  } else {
  }

  if (type == 'minimal') {
    backgroundColor = '';
    color = primary;
  }
  if (type == 'primary') {
    backgroundColor = primary;
    color = background;
  }
  if (type == 'secondary') {
    backgroundColor = backgroundDark;
    color = primary;
  }
  function funIcon() {
    if (icon == 'heart') {
      return <Icon iconName={icon} strokeColor={color} size={iconSize} />;
    }
    if (icon == 'image') {
      return <Icon iconName={icon} strokeColor={color} size={iconSize} />;
    } else {
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={touchableOpacity}
      delayPressIn={40}
      onPress={onPress}
      style={[
        styles.button,
        {
          width: width,
          backgroundColor: backgroundColor,
          color: color,
          paddingVertical: paddingVertical,
          paddingHorizontal: paddingHorizontal,
        },
      ]}>
      {/* {funIcon()} */}
      {size == 'small' ? (
        ''
      ) : (
        <Icon iconName={icon} strokeColor={color} size={iconSize} />
      )}

      <Text
        style={{
          color: color,
          fontSize: fontSize,
          fontWeight: 900,
          marginLeft: size == 'small' ? 0 : 10,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: "red",
    borderRadius: buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyButton;

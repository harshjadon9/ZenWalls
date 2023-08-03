import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const appName = 'ZenWalls';
export const primary = '#FFC506';
export const background = '#1B2228';
export const backgroundDark = '#13171A';
export const imageBorderRadius = 8;

export const appPaddingVertical = 0;
export const appPaddingHorizontal = 14;

export const buttonBorderRadius = 20;

export const touchableOpacity = 0.7;

export const baseStyle = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 900,
    paddingHorizontal: appPaddingHorizontal,
    paddingBottom: 20,
    paddingTop: 20,
  },
});

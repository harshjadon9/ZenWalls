//import liraries
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {View, Text, StyleSheet, Modal} from 'react-native';
import MyButton from './Button';
import {backgroundDark, baseStyle, windowWidth} from '../base';

// create a component
const MyModal = ({
  title,
  text,
  modalVisible,
  button1Title,
  button1OnPress,
  button2Title,
  button2OnPress,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[baseStyle.heading, {paddingTop: 0, paddingLeft: 0}]}>
            {title}
          </Text>
          <Text style={[styles.text, {paddingTop: 0}]}>{text}</Text>

          <View style={{height: 30}} />
          {button2Title ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: 60,
              }}>
              <MyButton
                title={button1Title}
                type={'secondary'}
                size={'small'}
                onPress={button1OnPress}
              />
              <MyButton
                title={button2Title}
                type={'primary'}
                size={'small'}
                onPress={button2OnPress}
              />
            </View>
          ) : (
            <View style={{alignItems: 'flex-end'}}>
              <MyButton
                title={button1Title}
                type={'primary'}
                size={'small'}
                onPress={button1OnPress}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  centeredView: {
    // position: "absolute",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: -22,
    // backgroundColor: "rgba(29, 34, 38, 0.4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: backgroundDark,
    borderRadius: 20,
    padding: 30,
    // paddingHorizontal: 35,
    // paddingVertical: 20,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
  },
  text: {color: 'white', opacity: 0.8},
});

//make this component available to the app
export default MyModal;

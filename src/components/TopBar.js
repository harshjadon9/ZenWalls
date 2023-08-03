import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View, Share} from 'react-native';
// import { useTailwind } from "tailwind-rn";
import Icon from './Icon';
import {background, primary} from '../base';

const TopBar = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'XYZ app name \nasd\n app link: https://play.google.com/store/apps/details?id=xyz.zedler.patrick.doodle',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  // const tailwind = useTailwind();
  const nav = useNavigation();
  return (
    <View
      style={{
        backgroundColor: background,
        paddingTop: 64,
        paddingHorizontal: 20,
        paddingBottom: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            nav.toggleDrawer();
          }}>
          <Icon iconName={'menu'} size={24} />
        </TouchableOpacity>
        <View style={{marginLeft: 24}}></View>
        <View style={{flexGrow: 1}}></View>

        <Text
          style={{
            fontWeight: 900,
            color: 'white',
            fontSize: 22,
            textAlign: 'center',
          }}>
          Zen
        </Text>
        <Text
          style={{
            color: primary,
            fontWeight: 900,
            fontSize: 22,
            textAlign: 'center',
          }}>
          Walls
        </Text>
        <View style={{flexGrow: 1}}></View>

        <View style={{flexDirection: 'row'}}></View>
        {/* <Icon iconName={"share"} size={24} /> */}
        <View style={{width: 24}}></View>
        <TouchableOpacity onPress={onShare}>
          <Icon iconName={'share'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
  // return (
  //   <View style={[tailwind("bg-[#1B2228] pt-16 px-5 pb-4")]}>
  //     <View style={tailwind("flex flex-row items-center")}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           nav.toggleDrawer();
  //         }}
  //       >
  //         <Icon iconName={"menu"} size={24} />
  //       </TouchableOpacity>
  //       <View style={tailwind("ml-6")}></View>
  //       <View style={tailwind("flex-1")}></View>

  //       <Text style={tailwind("font-bold text-white text-xl text-center")}>
  //         Wall
  //       </Text>
  //       <Text
  //         style={[
  //           tailwind("font-bold text-xl text-center"),
  //           { color: primary },
  //         ]}
  //       >
  //         sssss
  //       </Text>
  //       <View style={tailwind("flex-1")}></View>
  //       {/* <Icon iconName={"share"} size={24} /> */}
  //       <View style={tailwind("w-6")}></View>
  //       <Icon iconName={"share"} size={24} />
  //     </View>
  //   </View>
  // );
};

export default TopBar;

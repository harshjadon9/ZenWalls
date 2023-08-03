import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import {backgroundDark, primary} from '../base';
import { Context } from '../contexts/StateProvider';


export default function BannerSlider({navigation, item}) {
  const {sliderQuality} = useContext(Context);
  // const lg = () => {
  //   return (
  //     <LinearGradient
  //       colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.0)", "white"]}
  //       style={{
  //         position: "absolute",
  //         height: 200,
  //         width: 200,
  //         justifyContent: "center",
  //         alignItems: "center",
  //         alignSelf: "center",
  //         transform: [{ rotate: "180deg" }],
  //       }}
  //     ></LinearGradient>
  //   );
  // };
  // console.log(windowWidth);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={40}
      onPress={() => {
        // console.log(navigation);
        navigation.navigate('wallpaperss', {
          screen: 'wallpaper',
          params: item,
        });
      }}>
      {/* <View
        style={{
          height: 400,
          width: 360,
          // justifyContent: "center",
          zIndex: 1,
          marginLeft: -22,
        }}
      >
        <Image
          source={item.image}
          // blurRadius={10}
          style={{
            position: "absolute",
            width: 320,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            // bottom: 0,
          }}
        />

        <LinearGradient
          colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.0)", "white"]}
          // start={[0.9, 1]}
          style={{
            position: "absolute",
            height: 400,
            width: 360,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            transform: [{ rotate: "0deg" }],
          }}
        ></LinearGradient>
        <LinearGradient
          colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.0)", "white"]}
          // start={[0.9, 1]}
          style={{
            position: "absolute",
            height: 400,
            width: 360,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            transform: [{ rotate: "90deg" }],
          }}
        ></LinearGradient>
        <LinearGradient
          colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.0)", "white"]}
          // start={[0.9, 1]}
          style={{
            position: "absolute",
            height: 400,
            width: 360,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            transform: [{ rotate: "180deg" }],
          }}
        ></LinearGradient>
        <LinearGradient
          colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.0)", "white"]}
          // start={[0.9, 1]}
          style={{
            position: "absolute",
            height: 400,
            width: 360,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            transform: [{ rotate: "270deg" }],
          }}
        ></LinearGradient>
      </View> */}
      <Image
        source={
          item.title != 'Loading...'
            ? {uri: `${item.preview}${sliderQuality}`}
            : require('../../assets/logo.png')
        }
        style={{
          // position: "absolute",
          width: 300,
          height: 180,
          borderRadius: 10,
          opacity: 1,
          shadowColor: 'black',
          backgroundColor: backgroundDark,
          // top: 110,
          // borderColor: "red",
          // borderWidth: 2,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          color: item.title == 'Loading...' ? primary : 'white',
          fontWeight: 900,
          position: 'absolute',
          fontSize: 20,
          width: 300,
          top: 75,
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

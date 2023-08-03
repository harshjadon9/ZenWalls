//import liraries
import React, {useContext, useEffect, useMemo, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from './Icon';
// import { useTailwind } from "tailwind-rn";
import {Dimensions} from 'react-native';
import {backgroundDark, imageBorderRadius} from '../base';
import {Context} from '../contexts/StateProvider';

// import { Shadow } from "react-native-shadow-2";
// import { BlurView } from "@react-native-community/blur";

// create a component
const CardItem = ({item, navigation}) => {
  // const tailwind = useTailwind();
  const windowWidth = Dimensions.get('window').width;
  const [liked, setLiked] = useState(false);

  const {likeunlike, likeCheck, masonryCardQuality} = useContext(Context);

  const randomBool = Math.random() < 0.5;

  function likeIcon() {
    if (liked == true) {
      // return <Icon iconName={"heartFilled"} fill="none" size={22} />;
      return <Icon iconName={'heart'} fill="white" size={22} />;
    } else {
      return <Icon iconName={'heart'} size={22} />;
    }
  }
  async function likedcheck() {
    setLiked(await likeCheck(item.id));
  }
  useEffect(() => {
    likedcheck();
  }, [item]);

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
      }}
      key={item.id}
      style={{
        marginTop: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          backgroundColor: 'grey',
          borderColor: 'white',
          borderWidth: 1,
          opacity: 0.6,
          padding: 3,
          margin: 9,
          paddingHorizontal: 12,
          borderRadius: 12,
        }}>
        <Text style={{fontSize: 11, color: 'white'}}>New</Text>
      </View>
      <Image
        // source={{
        //   uri: 'https://ik.imagekit.io/88eyqmazimp/wallpapers/wallpaper-j35orm-451844.jpg',
        // }}
        source={{
          uri: `${item.preview}${masonryCardQuality}`,
        }}
        style={{
          //   height: Math.floor(Math.random() * (280 - 150 + 1) + 150),
          height: 260,
          width: windowWidth / 2 - 15,
          borderRadius: imageBorderRadius,
          alignSelf: 'stretch',
          backgroundColor: backgroundDark,
        }}
        resizeMode="cover"
      />
      <TouchableOpacity
        activeOpacity={0.6}
        delayPressIn={40}
        onPress={async () => {
          setLiked(await likeunlike(item));
        }}
        style={{
          marginTop: 8,
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: 10,
          justifyContent: 'center',
          flex: 1,
          flexDirection: 'row',
        }}>
        {likeIcon()}

        <Text
          style={{
            color: 'white',
            marginLeft: 5,
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 1,
          }}>
          {item.download}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default CardItem;

import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {background, backgroundDark, primary} from '../base';
import Icon from './Icon';
import MyModal from './Modal';

const CustomDrawer = props => {
  const [aboutMe, setAboutMe] = useState(false);

  let iconSize = 25;
  let iconColor = primary;

  function sideLinks({title, text, icon, navigate}) {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate(navigate)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon iconName={icon} size={iconSize} strokeColor={iconColor} />
          <View>
            <Text style={styles.bottomLink}>{title}</Text>
            <Text style={styles.bottomLinkText}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: backgroundDark}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: background}}>
        {/* <View style={{height: 200}} /> */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            margin: 30,
            marginTop: 60,
          }}>
          <Text style={{fontWeight: 900, color: 'white'}}>v</Text>
          <Text style={{fontWeight: 900, color: primary}}>0.0.1</Text>
        </View>
        <View style={{alignItems: 'center', marginVertical: 50}}>
          <Icon
            iconName={'logo'}
            size={60}
            viewBox="0 0 70 74"
            strokeWidth="0"
            fill={primary}
          />
          {/* <View style={{flexDirection: 'row', marginTop: 10}}>
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
          </View> */}
        </View>
        {/* <View style={{ padding: 20 }}>
          <Image
            source={require("../../assets/images/user.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              //   fontFamily: "Roboto-Medium",
              marginBottom: 5,
            }}
          >
            John Doe
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                // fontFamily: "Roboto-Regular",
                marginRight: 5,
              }}
            >
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </View> */}
        {/* </ImageBackground> */}
        <View
          style={{
            flex: 1,
            backgroundColor: backgroundDark,
            paddingTop: 30,
            padding: 30,
            gap: 25,
          }}>
          {/* <DrawerItemList {...props} /> */}
          {sideLinks({
            title: 'Home',
            text: 'Find Trending Wallpapers',
            icon: 'home',
            navigate: 'Home',
          })}
          {sideLinks({
            title: 'Popular',
            text: 'Best Wallpapers Ever',
            icon: 'flame',
            navigate: 'Popular',
          })}
          {sideLinks({
            title: 'Categories',
            text: 'Explore 250+ Categories',
            icon: 'shuffle',
            navigate: 'Explore',
          })}
          {sideLinks({
            title: 'Liked',
            text: 'Your Liked Wallpapers',
            icon: 'heart',
            navigate: 'Liked',
          })}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 30,
          // borderTopWidth: 1,
          // borderTopColor: "#ccc",
          backgroundColor: background,
          gap: 25,
        }}>
        <TouchableOpacity onPress={() => {}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              iconName="star"
              size={iconSize}
              strokeColor={iconColor}
              fill={iconColor}
            />
            <View>
              <Text style={styles.bottomLink}>Rate Us</Text>
              <Text style={styles.bottomLinkText}>Your feedback matters</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAboutMe(true);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon iconName="smile" size={iconSize} strokeColor={iconColor} />
            <View>
              <Text style={styles.bottomLink}>About Me</Text>
              <Text style={styles.bottomLinkText}>The Developer</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <MyModal
        title="The Developer"
        text={
          'Hello user,\nI am very happy to see you using my app, thank you for that. I am a college student and i enjoy making cool stuff like this ;). This app might have bugs, please leave your feedback on the store to let me know.\n\nThats all, have a good day :)'
        }
        modalVisible={aboutMe}
        button1Title="Close"
        button1OnPress={() => setAboutMe(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomLink: {
    color: 'white',
    fontSize: 17,
    // fontFamily: "Roboto-Medium",
    marginLeft: 10,
    fontWeight: 900,
  },
  bottomLinkText: {
    color: 'white',
    fontSize: 13,
    // fontFamily: "Roboto-Medium",
    opacity: 0.5,
    marginLeft: 10,
    fontWeight: 400,
  },
});

export default CustomDrawer;

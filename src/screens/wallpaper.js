//import liraries
import React, {useContext, useEffect, useState} from 'react';
// import { getColors } from "react-native-image-colors";

import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  appName,
  background,
  backgroundDark,
  buttonBorderRadius,
  imageBorderRadius,
  primary,
  touchableOpacity,
  windowWidth,
} from '../base';
// import {LinearGradient} from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../components/Icon';
import MyButton from '../components/Button';
import MyModal from '../components/Modal';
import {Context} from '../contexts/StateProvider';
import TopSubHeader from '../components/TopSubHeader';

// const useImageColors = () => {
//   const [colors, setColors] = React.useState(null);

//   React.useEffect(() => {
//     const url = "https://i.imgur.com/68jyjZT.jpg";

//     getColors(url, {
//       fallback: "#228B22",
//       cache: true,
//       key: url,
//     }).then(setColors);
//   }, []);

//   return colors;
// };

// create a component
const Wallpaper = ({navigation, route}) => {
  const detailIconSize = 18;
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [downloadModalVisible, setdownloadModalVisible] = useState(false);

  const {likeunlike, likeCheck, wallpaperPreviewQuality} = useContext(Context);

  const item = route.params;
  console.log(item);
  const [liked, setLiked] = useState(false);
  function likeIcon() {
    if (liked == true) {
      // return <Icon iconName={"heartFilled"} fill="none" size={22} />;
      return <Icon iconName={'heart'} fill="white" size={30} />;
    } else {
      return <Icon iconName={'heart'} size={30} />;
    }
  }

  async function likedcheck() {
    setLiked(await likeCheck(item.id));
  }
  useEffect(() => {
    likedcheck();
  }, [item]);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        // hidden={true}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <TopSubHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* main wallpaper */}
        <View
          style={{
            // justifyContent: "center",
            // width: "100%",
            alignSelf: 'center',
            height: 680,
          }}>
          <View style={{height: 80}}></View>
          <Image
            source={{uri: `${item.preview}${wallpaperPreviewQuality}`}}
            style={styles.image}
          />
          <Image
            source={{uri: `${item.preview}${wallpaperPreviewQuality}`}}
            blurRadius={30}
            style={styles.imageBack}
          />

          {/* Bottom */}

          <LinearGradient
            colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', background]}
            // start={[0.9, 1]}
            style={styles.lg}></LinearGradient>

          {/* top */}

          <LinearGradient
            colors={[
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              background,
            ]}
            start={{x: 0.5, y: 1}}
            end={{x: 0.5, y: 0}}
            style={styles.lg}></LinearGradient>

          {/* Right */}

          <LinearGradient
            colors={[
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              background,
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.lg}></LinearGradient>

          {/* Left */}

          <LinearGradient
            colors={[
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              background,
            ]}
            start={{x: 1, y: 0.5}}
            end={{x: 0, y: 0.5}}
            style={styles.lg}></LinearGradient>

          {/* <Text style={{ color: "white", fontSize: 20 }}>
            {route.params.title}
          </Text> */}
        </View>
        <View style={{marginTop: -50}}></View>
        <View
          style={{
            paddingHorizontal: 40,
          }}>
          {/* user profile */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              // justifyContent: "s",
            }}>
            <Image
              source={{uri: `${item.preview}${wallpaperPreviewQuality}`}}
              style={styles.avatar}></Image>
            <View style={{width: 12}} />
            <View>
              <Text style={styles.username}>{appName}</Text>
              <Text style={styles.usertext}>The Wallpaper App</Text>
            </View>
            <View style={{flex: 1}} />
            <TouchableOpacity
              activeOpacity={touchableOpacity}
              delayPressIn={40}
              onPress={async () => {
                setLiked(await likeunlike(item));
              }}>
              {/* <Icon iconName={"heart"} size={29} /> */}
              {likeIcon()}
            </TouchableOpacity>
          </View>
          <View style={{height: 40}} />

          {/* buttons */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MyButton
              icon={'download'}
              title="Save"
              width={(windowWidth - 100) / 2}
              type={'secondary'}
              onPress={() => {}}
            />
            <MyButton
              icon={'image'}
              title="Set"
              width={(windowWidth - 100) / 2}
              type={'primary'}
              onPress={() => {
                navigation.navigate('AnimationPage', {item, location: 'home'});
              }}
            />
          </View>

          {/* details */}
          <View style={{height: 40}} />
          <View
            style={{
              backgroundColor: backgroundDark,
              // height: 100,
              borderRadius: buttonBorderRadius,
              paddingVertical: 30,
              paddingHorizontal: 20,
              gap: 18,
            }}>
            <View style={styles.detailBoxRow}>
              <View style={styles.detailBoxCell}>
                <Icon
                  iconName={'download'}
                  strokeColor={primary}
                  size={detailIconSize}
                />
                <Text style={styles.detailBoxText}>{item.download}</Text>
              </View>
              <View style={styles.detailBoxCell}>
                <Icon
                  iconName={'heart'}
                  strokeColor={primary}
                  size={detailIconSize}
                />
                <Text style={styles.detailBoxText}>{item.likes}</Text>
              </View>
            </View>
            <View style={styles.detailBoxRow}>
              <View style={styles.detailBoxCell}>
                <Icon
                  iconName={'resolution'}
                  strokeColor={primary}
                  size={detailIconSize}
                />
                <Text style={styles.detailBoxText}>
                  {item.width} x {item.height}
                </Text>
              </View>
              <View style={styles.detailBoxCell}>
                <Icon
                  iconName={'folder'}
                  strokeColor={primary}
                  size={detailIconSize}
                />
                <Text style={styles.detailBoxText}>{item.fileSize}</Text>
              </View>
            </View>
            <View style={styles.detailBoxRow}>
              <TouchableOpacity
                style={styles.detailBoxCell}
                onPress={() => {
                  setUserModalVisible(true);
                }}>
                <Icon
                  iconName={'alert'}
                  strokeColor={primary}
                  size={detailIconSize}
                />
                <Text
                  style={[
                    styles.detailBoxText,
                    {textDecorationLine: 'underline'},
                  ]}>
                  User Uploaded
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.detailBoxCell}
                onPress={() => {
                  setReportModalVisible(true);
                }}>
                <Icon
                  iconName={'report'}
                  strokeColor={primary}
                  size={detailIconSize}
                />
                <Text
                  style={[
                    styles.detailBoxText,
                    {textDecorationLine: 'underline'},
                  ]}>
                  Report
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* modal */}
        <MyModal
          title="Report"
          text="Please mail us at xyz@gmail.com, and we are sorry for any inconvenience the art or the app caused you"
          modalVisible={reportModalVisible}
          button1Title="Okay"
          button1OnPress={() => setReportModalVisible(false)}
          // button2Title="Submit"
          // button2OnPress={() => setReportModalVisible(false)}
        />
        <MyModal
          title="User Uploaded Content"
          text="This content is uploaded by one of our app users, if you are owener of the content, please contact us at xyz@gmail.com. The content shall and must be only used for personal purpose and should not be shared to others."
          modalVisible={userModalVisible}
          button1Title="Okay"
          button1OnPress={() => setUserModalVisible(false)}
          // button2Title="Okay"
          // button2OnPress={() => setUserModalVisible(false)}
        />
        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    width: windowWidth - 70,
    height: 500,
    borderRadius: imageBorderRadius + 5,
    // borderColor: "green",
    // borderWidth: 2,
    zIndex: 2,
    backgroundColor: backgroundDark,
  },
  imageBack: {
    position: 'absolute',
    width: windowWidth,
    height: 650,
    left: -30,
    borderRadius: imageBorderRadius,
    // borderColor: "red",
    // borderWidth: 2,
    top: 0,
    zIndex: 1,
  },
  lg: {
    position: 'absolute',
    height: 650,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    transform: [{rotate: '0deg'}],
    zIndex: 1,
    top: 0,
    // borderColor: "red",
    // borderWidth: 2,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderColor: primary,
    borderWidth: 2,
    backgroundColor: backgroundDark,
  },
  username: {
    fontSize: 18,
    fontWeight: 900,
    color: 'white',
  },
  usertext: {
    fontSize: 12,
    // fontWeight: 900,
    color: 'white',
    opacity: 0.5,
  },
  detailBoxRow: {
    flexDirection: 'row',
    // justifyContent: "space-between",
  },
  detailBoxCell: {
    // flex: 1,
    flexDirection: 'row',
    gap: 8,
    width: '64%',
  },
  detailBoxText: {fontSize: 13, color: 'white', fontWeight: 500},
});

//make this component available to the app
export default Wallpaper;

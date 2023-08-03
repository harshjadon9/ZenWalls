//import liraries
import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  NativeModules,
} from 'react-native';
import {primary} from '../base';
import {Context} from '../contexts/StateProvider';
const {WallpaperMod} = NativeModules;
import RNFetchBlob from 'rn-fetch-blob';

import {Dimensions} from 'react-native';

const AnimationPage = ({navigation, route}) => {
  // const [setting, setSetting] = useState(true);
  const {downloadQuality} = useContext(Context);
  const payload = route.params;
  // const image =
  //   'https://images.unsplash.com/photo-1686610620643-0ba20d31b6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

  // let imgUrl =
  //   'https://static.scientificamerican.com/sciam/cache/file/EAF12335-B807-4021-9AC95BBA8BEE7C8D_source.jpg';

  const window = Dimensions.get('window');
  const width = window.width * window.scale;
  const height = window.height * window.scale;
  const ar = (width / height).toFixed(2);

  const urlDownload = `${payload.item.preview}${downloadQuality}?tr=ar-${ar}-1,w-${width}`;

  async function setWallpaper() {
    console.log(width, height, ar);
    console.log(urlDownload);

    // let dirs = RNFetchBlob.fs.dirs;
    // const android = RNFetchBlob.android;

    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      appendExt: 'jpg',
      // path: '/storage/emulated/0/Download',
      // path: dirs.DCIMDir,
    })
      .fetch('GET', urlDownload, {
        //some headers ..
      })
      .then(async res => {
        // android.actionViewIntent(res.path(), 'image/png');
        let base64Str = res.base64();
        // the temp file path
        console.log('The file saved to ', res.path(), '\n');

        WallpaperMod.Print(await base64Str, status => {
          console.log(`✅ status = ${status}`);
          navigation.navigate('success', {item: payload.item});
        });
      });

    // WallPaperManager.setWallpaper(
    //   {
    //     uri: `${payload.item.preview}${downloadQuality}`,
    //     screen: payload.location,
    //   },
    //   res => {
    //     // setSetting(false);
    //     console.log(res);
    //     navigation.navigate('success', {item: payload.item});
    //   },
    // );
  }

  useEffect(() => {
    setWallpaper();
  }, []);

  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      {/* <Text>AnimationPage</Text> */}
      {/* <Image source={require("../../assets/loading.gif")} /> */}
      {/* {setting == true ? <ActivityIndicator color={primary} size={30} /> : ''} */}
      <ActivityIndicator color={primary} size={30} />
      <Text
        style={{
          width: 250,
          textAlign: 'center',
          marginTop: 30,
          opacity: 0.7,
          color: 'white',
        }}>
        Please wait while we download and set your wallpaper
      </Text>
      {/* <Button
        title="Set Wallpaper"
        onPress={() => {
          // downloadFile();
        }}
      /> */}
      {/* <Button
        title="Set Wallpaper"
        onPress={
          () => {
            dow();
          }
          // setWallpaper();
          // checkPermission
        }
      /> */}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default AnimationPage;

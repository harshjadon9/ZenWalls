//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyButton from '../components/Button';
import TopSubHeader from '../components/TopSubHeader';

// create a component
const SuccessPage = ({navigation, route}) => {
  const payload = route.params;
  console.log(payload.item);
  return (
    <View style={{flex: 1}}>
      <TopSubHeader
        navigation={navigation}
        // payload={{item: payload.item}}
        pop="1"
      />
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 900,
            color: 'white',
            fontSize: 22,
          }}>
          Success ✨
        </Text>
        <Text
          style={{
            width: 200,
            textAlign: 'center',
            marginTop: 30,
            opacity: 0.7,
            color: 'white',
          }}>
          Go have a look at your homescreen 👀
        </Text>
        {/* <View style={{position: 'absolute', bottom: 90, opacity: 1}}>
          <MyButton
            title={'go back'}
            type={'minimal'}
            onPress={() => {}}
            size={'small'}
          />
        </View> */}
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SuccessPage;

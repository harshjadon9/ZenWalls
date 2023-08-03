//import liraries
import React, {useContext, useEffect, useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import PageTitleCard from '../components/PageTitleCard';
import CardItem from '../components/CardItem';
import {FlatList} from 'react-native';
import Masonary from '../components/Masonary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../contexts/StateProvider';
import Icon from '../components/Icon';

// create a component
const LikedPage = ({navigation}) => {
  const [likedData, setLikedData] = useState();

  const {likedWalls, clearLiked, getLiked} = useContext(Context);

  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={tailwind("pt-2")}></View> */}
        <PageTitleCard
          title={'Liked'}
          text={'All your liked walls are here.'}
        />
        {/* <Button
          title="Clear"
          onPress={() => {
            clearLiked();
          }}
        />
        <Button
          title="show"
          onPress={() => {
            getLiked();
          }}
        /> */}
        <View style={{height: 30}}></View>
        {likedWalls == '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 140,
              opacity: 0.4,
            }}>
            <Icon
              iconName={'heart-broken'}
              size={100}
              strokeWidth="1.5"
              // opacity={0.5}
            />
            <Text style={{color: 'white'}}>
              You havn't liked anything yet :{'('}
            </Text>
          </View>
        ) : (
          ''
        )}
        <Masonary
          data={likedWalls}
          navigation={navigation}
          loadingVisible={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default LikedPage;

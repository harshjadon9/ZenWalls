//import liraries
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {
  appPadding,
  appPaddingHorizontal,
  appPaddingVertical,
  baseStyle,
} from '../base';
import PageTitleCard from '../components/PageTitleCard';
import Masonary from '../components/Masonary';
import MyScrollView from '../components/MyScrollView';
import {Context} from '../contexts/StateProvider';

// create a component
const Popular = ({navigation, route}) => {
  const {fetchData} = useContext(Context);

  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const type = 'popular';

  useEffect(() => {
    // Fetch initial page of data
    fetchData(limit, currentPage, type).then(data => {
      setData(data);
      // console.log();
      setCurrentPage(currentPage + 1);
    });
  }, []);

  const ViewRefresh = fun => {
    setCurrentPage(2);
    setData();
    fetchData(limit, currentPage, type).then(data => {
      setData(data);
      fun();
    });
  };
  const ViewPaginate = fun => {
    fetchData(limit, currentPage, type).then(newdata => {
      // console.log(data);
      setData([...data, ...newdata]);
      setCurrentPage(currentPage + 1);
      fun();
    });
  };

  return (
    <SafeAreaView style={{}}>
      <MyScrollView ViewRefresh={ViewRefresh} ViewPaginate={ViewPaginate}>
        {/* <View style={tailwind("pt-2")}></View> */}
        {/* <View style={{ height: 10 }}></View> */}
        <PageTitleCard
          title={'Popular'}
          text={'The most popular wallpapers on the web.'}
        />

        <View style={{height: 30}}></View>

        <Masonary data={data} navigation={navigation} />
      </MyScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Popular;

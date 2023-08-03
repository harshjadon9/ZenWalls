//import liraries
import React, {useCallback, useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import {View, Text, StyleSheet, RefreshControl} from 'react-native';
import StateProvider, {Context} from '../contexts/StateProvider';
import {primary} from '../base';

// create a component
const MyScrollView = ({children, ViewRefresh, ViewPaginate}) => {
  const {pageLoading, setPageLoading, hideBottomNav, setHideBottomNav} =
    useContext(Context);

  const [refreshing, setRefreshing] = useState(false);
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const onScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - (100 || 0);

    if (dif < 0) {
      setHideBottomNav(true);
    } else {
      setHideBottomNav(false);
    }

    // console.log(hideBottomNav);
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    ViewRefresh(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[primary]}
          progressBackgroundColor={'white'}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      onScroll={event => {
        onScroll(event);
        if (isCloseToBottom(event.nativeEvent)) {
          // enableSomeButton();
          if (pageLoading == true) {
            // console.log("loading");
          } else {
            setPageLoading(true);

            ViewPaginate(() => setPageLoading(false));
            // setPageLoading(false);
          }
        }
      }}
      scrollEventThrottle={400}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MyScrollView;

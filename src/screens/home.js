import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
// import { useTailwind } from "tailwind-rn";
// import TopBar from "../components/TopBar";
import Carousel, {Pagination} from 'react-native-snap-carousel';
// import { Dimensions } from "react-native";
import BannerSlider from '../components/BannerSlider';
// import MasonryList from "@react-native-seoul/masonry-list";
import CardItem from '../components/CardItem';
import {
  appPaddingHorizontal,
  appPaddingVertical,
  baseStyle,
  primary,
  showTabBar,
  windowWidth,
} from '../base';
import Masonary from '../components/Masonary';
import Loading from '../components/Loading';
import MyButton from '../components/Button';
import {Context} from '../contexts/StateProvider';
import MyScrollView from '../components/MyScrollView';
import PageTitleCard from '../components/PageTitleCard';

const Home = ({navigation, route}) => {
  const {fetchData, fetchExtra} = useContext(Context);

  const renderBanner = ({item, index}) => {
    return <BannerSlider item={item} navigation={navigation} />;
  };

  const [data, setData] = useState();
  const [extra, setExtra] = useState([
    {
      id: '1',
      title: 'Loading...',
      // image: require('../../assets/images/game5.jpg'),
      // like: 4532,
    },
    {
      id: '1',
      title: 'Loading...',
      // image: require('../../assets/images/game5.jpg'),
      // like: 4532,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const type = 'explore';

  useEffect(() => {
    // Fetch initial page of data
    fetchExtra().then(data => {
      setExtra(data);
    });
    fetchData(limit, currentPage, type).then(data => {
      setData(data);
      setCurrentPage(currentPage + 1);
    });
  }, []);

  useEffect(() => {}, []);

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

  const [index, setIndex] = useState(1);
  function pagination() {
    // const { activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={4}
        activeDotIndex={index}
        containerStyle={{marginBottom: -39, marginTop: -18}}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          // marginHorizontal: 8,
          backgroundColor: 'white',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  return (
    <SafeAreaView style={{}}>
      <MyScrollView ViewRefresh={ViewRefresh} ViewPaginate={ViewPaginate}>
        <Text style={baseStyle.heading}>Top Picks</Text>

        <Carousel
          data={extra}
          renderItem={renderBanner}
          sliderWidth={windowWidth}
          itemWidth={300}
          firstItem={1}
          style={{
            shadowColor: 'red',
            borderColor: 'green',
            borderWidth: 2,
          }}
          onSnapToItem={index => setIndex(index)}
        />
        {/* {pagination()} */}

        <Text style={baseStyle.heading}>Trending</Text>
        <Masonary data={data} navigation={navigation} />
      </MyScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default Home;

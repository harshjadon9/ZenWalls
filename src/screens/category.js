//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import PageTitleCard from '../components/PageTitleCard';
import CardItem from '../components/CardItem';
import CategoryCard from '../components/CategoryCard';
import {appPaddingHorizontal} from '../base';

const categories = [
  {
    id: '1',
    title: 'Cyberpunk',
    image: require('../../assets/images/game1.jpeg'),
  },
  {
    id: '2',
    title: 'Anime',
    image: require('../../assets/images/game3.jpeg'),
  },
  {
    id: '3',
    title: 'Nature',
    image: require('../../assets/images/game4.png'),
  },
  {
    id: '4',
    title: 'Girls',
    image: require('../../assets/images/game6.jpeg'),
  },
  {
    id: '5',
    title: 'Minimal',
    image: require('../../assets/images/game7.jpeg'),
  },
  {
    id: '6',
    title: 'B&W',
    image: require('../../assets/images/game5.jpg'),
  },
  {
    id: '7',
    title: 'Landscape',
    image: require('../../assets/images/game2.jpeg'),
  },
];

// create a component
const Category = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={tailwind("pt-2")}></View> */}
        <PageTitleCard
          title={'Categories'}
          text={'Choose from over 250+ categories'}
        />
        <View style={{height: 30}}></View>
        <FlatList
          scrollEnabled={false}
          data={categories}
          style={styles.list}
          numColumns={1}
          renderItem={({item}) => <CategoryCard item={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: appPaddingHorizontal,
  },
});

//make this component available to the app
export default Category;

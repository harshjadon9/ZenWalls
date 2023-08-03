//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = React.createContext();

const StateProvider = ({children}) => {
  const [pageLoading, setPageLoading] = useState(false);

  const [hideBottomNav, setHideBottomNav] = useState(false);

  const [likedWalls, setLikedWalls] = useState([]);
  const sliderQuality = '?tr=h-600,q-90';
  const masonryCardQuality = '?tr=h-500,q-85';
  const wallpaperPreviewQuality = '?tr=h-1080,q-90';
  const downloadQuality = '';

  async function getLiked() {
    const walls = await AsyncStorage.getItem('liked');
    if (walls != null) {
      setLikedWalls(JSON.parse(walls));
    } else {
      await AsyncStorage.setItem('liked', '[]');
    }
    console.info('✅', JSON.parse(walls));
  }

  useEffect(() => {
    getLiked();
  }, []);

  async function clearLiked() {
    await AsyncStorage.setItem('liked', '[]');
    setLikedWalls([]);
  }

  async function likeCheck(id) {
    for (let index = 0; index < likedWalls.length; index++) {
      if (likedWalls[index].id == id) {
        return true;
      }
    }
    return false;
  }
  async function likeunlike(wall) {
    let flag = 0;
    for (let index = 0; index < likedWalls.length; index++) {
      if (likedWalls[index].id == wall.id) {
        flag = 1;
        console.log('already liked🥲');
      }
    }
    if (flag == 1) {
      const likedWallList = likedWalls.filter(a => a.id !== wall.id);
      const likedWall = JSON.stringify(likedWallList);
      await AsyncStorage.setItem('liked', `${likedWall}`);
      getLiked();
      return false;
    } else {
      const likedWallList = [...likedWalls, wall];
      const likedWall = JSON.stringify(likedWallList);
      await AsyncStorage.setItem('liked', `${likedWall}`);
      getLiked();
      return true;
    }
  }

  const fetchData = async (limit, currentPage, type) => {
    try {
      const response = await fetch(
        `https://wallapp.oceanofwallpapers.com/?limit=${limit}&page=${currentPage}&sortby=${type}`,
        {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            Expires: 0,
          },
          cache: 'no-cache',
        },
      );
      const json = await response.json();
      return json['List'];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchExtra = async () => {
    try {
      const response = await fetch(
        `https://wallapp.oceanofwallpapers.com/?extra=1`,
      );
      const json = await response.json();
      console.log(json);
      return json['List'];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <Context.Provider
      value={{
        masonryCardQuality,
        sliderQuality,
        downloadQuality,
        wallpaperPreviewQuality,
        pageLoading,
        setPageLoading,
        hideBottomNav,
        setHideBottomNav,
        fetchData,
        fetchExtra,
        likeunlike,
        likeCheck,
        likedWalls,
        setLikedWalls,
        clearLiked,
        getLiked,
      }}>
      {children}
    </Context.Provider>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export {Context, StateProvider};

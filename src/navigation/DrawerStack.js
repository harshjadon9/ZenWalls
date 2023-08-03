import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

// import Ionicons from "react-native-vector-icons/Ionicons";
// import Ionicons from "@expo/vector-icons/Ionicons";

// import ProfileScreen from "../screens/ProfileScreen";
// import MessagesScreen from "../screens/MessagesScreen";
// import MomentsScreen from "../screens/MomentsScreen";
// import SettingsScreen from "../screens/SettingsScreen";

// import TabNavigator from "./TabNavigator";
import ExplorePage from '../screens/explore';
import Home from '../screens/home';
import TopNavigator from './TopNavigator';
import TopBar from '../components/TopBar';
import WallpaperStack from './WallpaperStack';
import Icon from '../components/Icon';

const Drawer = createDrawerNavigator();

const AppStack = ({route, navigation}) => {
  // console.log(route, navigation);
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // header: () => <TopBar />,
        // drawerActiveBackgroundColor: "#aa18e",
        // drawerActiveTintColor: "#fff",
        // drawerInactiveTintColor: "#333",
        // drawerLabelStyle: {
        //   // marginLeft: -25,
        //   // fontFamily: "Roboto-Medium",
        //   fontSize: 15,
        // },
      }}>
      <Drawer.Screen
        name="Homee"
        component={TopNavigator}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} fill={color} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ExplorePage}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} fill={color} />,
        }}
      />
      <Drawer.Screen
        name="wallpaperss"
        component={WallpaperStack}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} fill={color} />,
        }}
      />
      {/* 
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default AppStack;

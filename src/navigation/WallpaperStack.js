import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Wallpaper from '../screens/wallpaper';
import AnimationPage from '../screens/animationPage';
import SuccessPage from '../screens/success';

function WallpaperStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="wallpaper" component={Wallpaper} />
      <Stack.Screen name="AnimationPage" component={AnimationPage} />
      <Stack.Screen name="success" component={SuccessPage} />
    </Stack.Navigator>
  );
}
export default WallpaperStack;

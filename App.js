import 'react-native-gesture-handler';

// import {StatusBar} from 'expo-status-bar';

import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AppStack from './src/navigation/DrawerStack';
// import * as NavigationBar from 'expo-navigation-bar';
import {background, backgroundDark, primary} from './src/base';
import {StateProvider} from './src/contexts/StateProvider';

export default function App() {
  // NavigationBar.setVisibilityAsync('hidden');
  // NavigationBar.setBackgroundColorAsync(background);
  return (
    <>
      <StateProvider>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: '#1B2228',
              // background: "white",
              primary: primary,
            },
          }}>
          <AppStack />
          <StatusBar
            barStyle={'light-content'}
            translucent={true}
            backgroundColor={backgroundDark}
          />
        </NavigationContainer>
      </StateProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

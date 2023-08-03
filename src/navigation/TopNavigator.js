import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home';

const Tab = createMaterialTopTabNavigator();
import TopBar from '../components/TopBar';
import {Text, View} from 'react-native';
import Icon from '../components/Icon';
import {background, primary} from '../base';
import Popular from '../screens/popular';
import Category from '../screens/category';
import LikedPage from '../screens/liked';
import {useContext} from 'react';
import {Context} from '../contexts/StateProvider';

function TopNavigator({navigation, route}) {
  const {hideBottomNav} = useContext(Context);

  const inActiveTabIconOpacity = 0.9;
  const inActiveTabLabelOpacity = 0.7;
  const ActiveTabIconSize = 27;
  const tabBarTextStyle = focused => {
    return {
      fontSize: 11,
      textTransform: 'capitalize',
      fontWeight: 900,
      color: 'white',
      paddingTop: 4,
      opacity: focused ? 1 : inActiveTabLabelOpacity,
      color: focused ? primary : 'white',
    };
  };

  return (
    // <Animated.View style={{transform: [{translateY: animValue}]}}>
    <View
      style={{
        flex: 1,
      }}>
      <TopBar />
      <Tab.Navigator
        style={{marginBottom: 5}}
        initialRouteName="Home"
        tabBarPosition="bottom"
        screenOptions={{
          tabBarActiveTintColor: primary,
          tabBarInactiveTintColor: 'grey',
          tabBarIndicatorStyle: {
            width: 4,
            height: 4,
            borderRadius: 50,
            left: '12%',
            top: 9,
          },
          // tabBarActiveTintColor: "white",
          tabBarPressColor: 'transparent',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {
            backgroundColor: background,
            paddingTop: 7,
            // marginBottom: hideBottomNav == true ? 0 : -90,
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          tabBarLabel={'home'}
          options={{
            // tabBarLabelStyle: tabBarTextStyle,
            // tabBarShowLabel: false,
            tabBarLabel: ({children, focused}) => {
              return <Text style={tabBarTextStyle(focused)}>{children}</Text>;
            },

            tabBarIcon: ({color, size, focused}) => (
              <Icon
                iconName="home"
                size={25}
                // fill={color}
                // strokeColor={color}
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  opacity: focused ? 1 : inActiveTabIconOpacity,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
          options={{
            // tabBarShowLabel: false,
            // tabBarLabelStyle: tabBarTextStyle,
            tabBarLabel: ({children, focused}) => {
              return <Text style={[tabBarTextStyle(focused)]}>{children}</Text>;
            },

            tabBarIcon: ({color, size, focused}) => (
              <Icon
                iconName="flame"
                size={25}
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  opacity: focused ? 1 : inActiveTabIconOpacity,
                }}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
            // tabBarShowLabel: false,
            // tabBarLabelStyle: tabBarTextStyle,
            tabBarLabel: ({ children, focused }) => {
              return (
                <Text
                  style={[
                    tabBarTextStyle,
                    { opacity: focused ? 1 : inActiveTabLabelOpacity },
                  ]}
                >
                  {children}
                </Text>
              );
            },

            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                iconName="add"
                size={27}
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  opacity: focused ? 1 : inActiveTabIconOpacity,
                }}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Explore"
          component={Category}
          options={{
            // tabBarShowLabel: false,
            // tabBarLabelStyle: tabBarTextStyle,
            tabBarLabel: ({children, focused}) => {
              return <Text style={[tabBarTextStyle(focused)]}>{children}</Text>;
            },
            tabBarIcon: ({color, size, focused}) => (
              <Icon
                iconName="shuffle"
                size={25}
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  opacity: focused ? 1 : inActiveTabIconOpacity,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Liked"
          component={LikedPage}
          options={{
            // tabBarShowLabel: false,
            // tabBarLabelStyle: tabBarTextStyle,
            tabBarLabel: ({children, focused}) => {
              return <Text style={[tabBarTextStyle(focused)]}>{children}</Text>;
            },

            tabBarIcon: ({color, size, focused}) => (
              <Icon
                iconName="heart"
                size={25}
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  opacity: focused ? 1 : inActiveTabIconOpacity,
                  // transform: [focused ? { scale: 1.1 } : { scale: 1 }],
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
    // </Animated.View>
  );
}

export default TopNavigator;

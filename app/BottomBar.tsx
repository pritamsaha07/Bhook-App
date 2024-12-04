import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let imageSource;

          switch (route.name) {
            case 'Home':
              imageSource = focused
                ? require('../assets/logos/home-icon.png')
                : require('../assets/logos/home-icon.png');
              break;
            case 'Search':
              imageSource = focused
                ? require('../assets/logos/search-icon.png')
                : require('../assets/logos/search-icon.png');
              break;
            case 'Profile':
              imageSource = focused
                ? require('../assets/logos/male-icon.png')
                : require('../assets/logos/male-icon.png');
              break;
            default:
              imageSource = require('../assets/logos/home-icon.png');
          }

          return (
            <Image
              source={imageSource}
              style={{width: size, height: size, tintColor: color}}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#FF6347',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;


import React, { Component } from 'react';
import {
  createTabNavigator,
  createStackNavigator
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
import HeroesScreen from './components/screens/HeroesScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import HeroAdd from './components/screens/HeroAdd'
const Root = createStackNavigator({
  Home : {
    screen :HomeScreen,
    navigationOptions : {
      tabBarLabel : 'Home'
    }
  },
  Heroes : {
    screen :HeroesScreen
  },
  Settings : {
    screen :SettingsScreen
  },
  HeroAdd : {
    screen : HeroAdd
  }
}, {
  tabBarPosition :'bottom',
  swipeEnabled : true,
  tabBarOptions : {
    activeTintColor : 'black',
    inactiveTintColor : '#aaa',
    style : {
      backgroundColor : 'white'
    }
  }
});
export default Root;
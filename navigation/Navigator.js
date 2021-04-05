import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AlarmScreen from '../screens/AlarmScreen';
import SettingScreen from '../screens/SettingScreen';

const AlarmNavigator = createStackNavigator({
    Home: AlarmScreen
});

const SettingNavigator = createStackNavigator({
    Setting: SettingScreen
});

const bottomTabConfig = {
    Home: {
        screen: AlarmNavigator
    }, 
    Setting: {
        screen: SettingNavigator
    }
};

const BottomTab = createBottomTabNavigator(bottomTabConfig);

export default createAppContainer(BottomTab);
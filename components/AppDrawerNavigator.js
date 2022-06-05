//Importing components from libraries
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import { bottomTabNavigator } from '../components/bottomTabNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import RatingsScreen from '../screens/RatingsScreen';

//Displaying the app drawer navigator
export const AppDrawerNavigator = createDrawerNavigator({

    Home: {
        screen: bottomTabNavigator,
        navigationOptions: {
            drawerIcon: ({ tintColor, focused }) => < Icon name = "home"
            type = "font-awesome"
            size = { 26 }
            color = { tintColor }
            />,
            title: "Home"
        }
    },

    Rate: {
        screen: RatingsScreen,
        navigationOptions: {
            drawerIcon: ({ tintColor, focused }) => < Icon name = "user"
            type = "font-awesome"
            size = { 26 }
            color = { tintColor }
            />,
            title: "Login"
        }
    }

}, {
    contentComponent: CustomSideBarMenu,

    contentOptions: {
        activeBackgroundColor: 'rgba(212, 118, 207, 0.05)',
        activeTintColor: '#7700F2',
        inactiveTintColor: '#797c97'
    }
}, {
    initialRouteName: 'Home'
})
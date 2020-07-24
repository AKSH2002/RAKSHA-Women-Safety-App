//Importing components from libraries
import React, { Component }  from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import SafetyTipsScreen from '../screens/SafetyTipsScreen';
import LawsScreen from '../screens/LawsScreen';
import EscapeScreen from '../screens/EscapeScreen';
import DefenseScreen from '../screens/DefenseScreen';
import SOSscreen from '../screens/SOSscreen';

//Craeting custom icon set using fontello
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);


//Displaying the bootom tab navigator
export const bottomTabNavigator = createMaterialBottomTabNavigator({

    SOSalert : {
        screen: SOSscreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="sos" size={24} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Alert</Text>
        }
    },
    SafetyTips : {
        screen: SafetyTipsScreen,
        navigationOptions :{
        tabBarIcon: ({ tintColor, focused }) => <Icon name="safetywomen" size={25.6} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Tips</Text>,
        }
    },
    WomenLaws : {
        screen: LawsScreen,
        navigationOptions :{
        tabBarIcon: ({ tintColor, focused }) => <Icon name="laws" size={25.6} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Laws</Text>
        }
    },
    EscapingThreat : {
        screen: EscapeScreen,
        navigationOptions :{
        tabBarIcon: ({ tintColor, focused }) => <Icon name="escape" size={24} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Escape</Text>
        }
    },
    SelfDefense : {
        screen: DefenseScreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="defense" size={24.6} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Defense</Text>
        }
    }
    
},
{
    initialRouteName: 'SOSalert',
    activeColor: '#7700F2',
    inactiveColor: '#797c97',
    barStyle: { backgroundColor: 'white', borderTopWidth: 2.5 , borderTopColor: '#681FA2'},
}
);
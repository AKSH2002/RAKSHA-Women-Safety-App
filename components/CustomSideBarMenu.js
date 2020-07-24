//Importing components from libraries
import React, { Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native';

import { DrawerItems } from 'react-navigation-drawer'

export default class CustomSideBarMenu extends Component{

  //Displaying various components in render
  render(){
    return(
  
      <SafeAreaView style={{flex:1}}>
        
        <View>
          <ImageBackground source={require('../assets/dd.png')} style={{height:210,width:280}}>
          
          <Image source={require('../assets/drawer-logo.png')} style={{width:90, height: 90, marginTop: 60, marginLeft: 10}}/>

          <Text style={{color: 'white', alignSelf: 'center', textAlign: 'center', fontSize: 19, marginTop: 4, fontFamily: "Roboto"}}>RAKSHA - Women Safety App</Text>

          </ImageBackground>

          </View>

          <View style={styles.drawerItemsContainer}>

            <DrawerItems {...this.props}/>

          </View>
          
      </SafeAreaView>
      
    )
  }
}

//Using Stylesheet to create different styles
var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
})
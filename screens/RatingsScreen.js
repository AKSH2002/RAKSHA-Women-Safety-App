//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import AppHeader from '../components/AppHeader.js';


export default class RatingsScreen extends React.Component {

    //Displaying various components in render
    render(){
        return(
            <View>
                
                <AppHeader navigation ={this.props.navigation}/>
                
                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>

                    <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 10}} source ={require('../assets/ratings.png')} />

                    <WebView 
                        source={{
                            uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdYn8wTpOgyqxn1NzBtnESr_FlAS3fSksgzSx8wMpxmr2gaXg/viewform?usp=sf_link'
                        }}
                        style={{                           
                            marginLeft: 10,
                            marginRight: 10,
                            marginBottom: 20,                      
                        }}
                    />

                </ImageBackground>

            </View>
        );
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    }
});
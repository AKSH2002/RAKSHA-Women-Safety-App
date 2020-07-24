//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

import AppHeader from '../components/AppHeader.js';

export default class SafetyTipsScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
         speechText : " AT HOME: DON'T OPEN TO STRANGERS, HAVE GOOD DOOR LOCKS, CLOSE DOORS AND WINDOWS, DRAW CURTAINS AND SHUT BLINDS AT NIGHT.  WHILE SHOPPING: PARK IN WELL-LIT AREAS CLOSE TO DESTINATION, AVOID SHOPPING ALONE, DO NOT PUT YOUR PURSE IN A SHOPPING CART.  WHILE TRAVELLING: TELL YOUR FAMILY MEMBERS ABOUT WHERE YOU ARE GOING, KEEP YOUR VALUABLES WITH YOU, DON'T TRUST PEOPLE TOO QUICKLY AND STAY SAFE AT YOUR LODGING.  WHEN ONLINE: DON'T SHARE PRIVATE PHOTOS, DON'T SHARE YOUR LOCATION ONLINE, DON'T SHARE YOUR PERSONAL INFORMATION WITH STRANGERS.  IN PARTIES:  BE READY TO HELP OTHERS IF NECESSARY, GO WITH FRIENDS, LIMIT OR AVOID ALCOHOL CONSUMPTION.  OUT ALONE: AVOID ISOLATED AREAS, BE AWARE OF THE SURROUNDINGS, STICK TO THE ROUTES YOU KNOW WELL.  IN THE CAR: ALWAYS LOCK DOORS AND WINDOWS, AVOID POORLY LIT PARKING AREAS, HOLD KEYS IN YOUR HANDS WHEN APPROACHING THE CAR."
        };
    }

    //Text to Speech function
    onSpeak = ()=>{
        Speech.speak(this.state.speechText,{
        language : 'en',
        pitch : 1,
        rate : 1
        })
    }

    onStop = ()=>{
        Speech.stop();
    }

    //Displaying various components in render
    render() {
        return (
            
            <View>
                
                <AppHeader navigation ={this.props.navigation}/>
                
                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>

                    <ScrollView contentContainerStyle={{height: 2650}}>

                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source ={require('../assets/safetyWomen.png')} />

                        <Image style={styles.tipsImage} source ={require('../assets/tip6.png')} />
            
                        <Image style={styles.tipsImage} source ={require('../assets/tip7.png')} />

                        <Image style={styles.tipsImage} source ={require('../assets/tip4.png')} />

                        <Image style={styles.tipsImage} source ={require('../assets/tip2.png')} />

                        <Image style={styles.tipsImage} source ={require('../assets/tip5.png')} />

                        <Image style={styles.tipsImage} source ={require('../assets/tip3.png')} />
                        
                        <Image style={styles.tipsImage} source ={require('../assets/tip1.png')} />

                        <View style={styles.speechContainer}>
                        <TouchableOpacity
                        onPress={this.onSpeak}>
                        <Image
                            style={{ width: 100, height: 60, marginRight: 10 }}
                            source={require('../assets/text_to_speech.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={this.onStop}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../assets/stop.png')}
                        />
                        </TouchableOpacity>
                        </View>

                    </ScrollView>
                        
                </ImageBackground>
                
            </View>
        )
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    tipsImage: {
        width: 330,
        height: 280,
        alignSelf: 'center',
        marginBottom: 40
    },
    speechContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 50,
    }
});
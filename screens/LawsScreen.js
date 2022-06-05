//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

import AppHeader from '../components/AppHeader.js';


export default class LawsScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
         speechText : "The Indian Penal Code, 1860, lays down the provisions to penalise the culprit for the offences against women. Various sections under IPC specifically deals with such crimes:  • Acid Attack (Section 326A and 326B)  • Rape (Sections 375, 376, 376A, 376B, 376C, 376D and 376E)  • Kidnapping and abduction for different purposes (Sections 363-373)  • Murder, Dowry death, Abetment of Suicide, etc.(Sections 302, 304B and 306)  • Cruelty by husband or his relatives (Section 498A)  • Outraging the modesty of women (Section 354)  • Sexual harassment (Section 354A)  • Assault on women with intent to disrobe a woman (Section 354B)  • Voyeurism (Section 354C)  • Stalking (Section 354D)  • Word, gesture or act intended to insult the modesty of a woman (Section 509). Child Safety Laws •	Children Pledging of Labor Act, 1933 •	The Immoral Traffic (Prevention) Act, 1987 •	Child Labor (Prohibition and Regulation) Act 1986 •	Prohibition of Child Marriage Act, 2006 •	Right of Children to Free and Compulsory Education Act, 2009 •	Protection of Children from Sexual Offences Act, 2012 •	Juvenile Justice (Care and Protection of Children) Act, 2015 •	Guardian ship and Wards Act, 1890. •	Immoral Traffic (Prevention) Act, 1986."
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

                    <ScrollView contentContainerStyle={{height: 2000}}>

                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source ={require('../assets/laws.png')} />

                        <Image style={styles.lawsImage} source ={require('../assets/women-ipc-laws2.png')} />
                        <Image style={styles.lawsImage} source ={require('../assets/bg11.png')} />

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
            
        );
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    lawsImage: {
        width: 360,
        height: 650,
        alignSelf: 'center',
        marginBottom: 40
    },
    speechContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 50,
    }
});
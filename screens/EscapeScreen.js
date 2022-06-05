//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

import AppHeader from '../components/AppHeader.js';


export default class EscapeScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
         text1: "1) What should a woman do if she finds herself alone in the company of a strange male as she prepares to enter a lift in a high-rise apartment late at night?\n\n• Experts Say: Enter the lift. If you need to reach the 13th floor, press all the buttons up to your destination. No one will dare attack you in a lift that stops on every floor.\n",
         text2: "2) What to do if a stranger tries to attack you when you are alone in your house?\n\n • Experts Say: Run into the kitchen. You alone know where the chilli powder and turmeric are kept.And where the knives and plates are. All these can be turned into deadly weapons. If nothing else, start throwing plates and utensils all over.Let them break. Scream. Remember that noise is his greatest enemy. He does not want to be caught.\n",
         text3: "3) Taking an Auto or Taxi at Night.\n\n • Experts Say: Before getting into an auto at night, note down its registration number. Then use the mobile to call your family or friend and pass on the details to them in the language the driver understands .Even if no one answers your call, pretend you are in a conversation. The driver now knows someone has his details and he will be in serious trouble if anything goes wrong. He is now bound to take you home safe and sound. A potential attacker is now your de facto protector!\n",
         text4: "4) If you are stalked at night.\n\n • Experts Say: Enter a shop or a house and explain your predicament. If it is night and shops are not open, go inside an ATM box. ATM centers always have security guards. They are also monitored by close circuit television.Fearing identification, no one will dare attack you.After all, being mentally alert is the greatest weapon you can ever have.\n",
         text5: "5) What if the driver turns into a street he is not supposed to – and you feel you are entering a danger zone?\n\n • Experts Say: Use the handle of your purse or your stole (dupatta) to wrap around his neck and pull him back. Within seconds, he will feel choked and helpless. In case you don’t have a purse or stole just pull him back by his collar. The top button of his shirt would then do the same trick.\n",
         text6: "6) My husband has abandoned me. What should I do?\n\n • Experts Say: If your husband has abandoned you, you can immediately file a complaint/ FIR under 498A IPC on grounds of cruelty with the police in the local police station in the area where you were abandoned.\n",
         text7: "7) What are the precautions a newlywed Indian woman can take in a foreign 4 country?\n\n • Experts Say: Try to open a bank account in the country of residence, so that you can withdraw money in emergency and be financially independent. Read and understand the laws of the foreign country and your rights there, especially against any form of abuse or neglect, including illtreatment, domestic violence, how to get residence permit, etc.\n",
         text8: "8) What if the police refuse to register FIR?\n\n • Experts Say: You may make a written representation to the SP (Superintendent of Police) under Section 154(3) Cr.P.C. If the Police refuses to lodge the complaint, then you can forward the complaint to the Superintendent of Police of the concerned District, who, if satisfied that the information discloses the commission of a cognizable offence, shall either investigate the case himself or direct an investigation to be made by any police officer, subordinate to him.\n"
        };
    }

    //Text to Speech function
    onSpeak = ()=>{
        Speech.speak(this.state.text1+this.state.text2+this.state.text3+this.state.text4+this.state.text5+this.state.text6+this.state.text7+this.state.text8,{
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
                    
                    <ScrollView contentContainerStyle={{height: 3090}}>

                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 50}} source ={require('../assets/escape.png')} />

                        <Image style={styles.tipsImage} source ={require('../assets/elevator.png')} />
                        <Text style={styles.tipsText}>{this.state.text1}</Text>
            
                        <Image style={styles.tipsImage} source ={require('../assets/kitchen.png')} />
                        <Text style={styles.tipsText}>{this.state.text2}</Text>

                        <Image style={styles.tipsImage} source ={require('../assets/taxi.png')} />
                        <Text style={styles.tipsText}>{this.state.text3}</Text>

                        <Image style={styles.tipsImage} source ={require('../assets/stalking.png')} />
                        <Text style={styles.tipsText}>{this.state.text4}</Text>

                        <Image style={styles.tipsImage} source ={require('../assets/taxiwrong.png')} />
                        <Text style={styles.tipsText}>{this.state.text5}</Text>

                        <Image style={styles.tipsImage} source ={require('../assets/es1.png')} />
                        <Text style={styles.tipsText}>{this.state.text6}</Text>

                        <Image style={styles.tipsImage} source ={require('../assets/es2.png')} />
                        <Text style={styles.tipsText}>{this.state.text7}</Text>

                        <Image style={styles.tipsImage} source ={require('../assets/es3.png')} />
                        <Text style={styles.tipsText}>{this.state.text8}</Text>

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
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginBottom: 15
    },
    speechContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 10
    },
    tipsText: {
        marginHorizontal: 5,
        color: '#581fa2',
        fontSize: 17,
        marginBottom: 15
    }
});
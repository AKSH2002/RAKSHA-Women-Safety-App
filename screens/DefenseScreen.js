//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { AppLoading } from 'expo'
import { Video } from 'expo-av';

import AppHeader from '../components/AppHeader.js';


export default class DefenseScreen extends React.Component {

    //Defining states in constructor
    constructor(props){
        super(props);
        this.state = { loading: true };
    }

    async componentDidMount(){
        this.setState({ loading: false });
    }
    
      //Displaying various components in render
      render(){
        if(this.state.loading){
          return (
            <AppLoading/>
          );
        }
          
          return (
    
            <View>
                <AppHeader navigation ={this.props.navigation}/>
                
                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>

                    <ScrollView contentContainerStyle={{height: 2650}}>

                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source ={require('../assets/selfdefense.png')} />

                        <Image style={styles.reasonImage} source ={require('../assets/defense-reasons.png')} />

                        <Video
                            source={(require('../assets/DefenseVideos/Video3.mp4'))}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape with hands trapped</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video2.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape from side headlock</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video3.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Groin Kick</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video4.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Heel palm strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video5.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Elbow strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video6.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Hammer strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video7.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Alternative elbow strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video8.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Hammer strike while swinging</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video9.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape from a 'bear hug attack'</Text>
                                      
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
    reasonImage: {
        width: 350,
        height: 300,
        alignSelf: 'center',
        marginBottom: 40
    },
    video: {
        marginHorizontal: 80,
        width:200,
        height:170
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 15,
        color: '#681fa2',
        marginBottom: 28
    }
});
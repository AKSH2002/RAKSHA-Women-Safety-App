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
        this.state = { loading: true,
        paused: true };
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

                    <ScrollView contentContainerStyle={{height: 3300}}>

                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source ={require('../assets/selfdefense.png')} />

                        <Image style={styles.reasonImage} source ={require('../assets/defense-reasons.png')} />

                        <Video
                            source={(require('../assets/DefenseVideos/Video1.mp4'))}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls                            
                            style={styles.video}
                        />
                        <Text style={styles.text}>An Ear Clap</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video2.mp4')}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Eye jab</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video3.mp4')}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Mentally Prepare for an Attact</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video4.mp4')}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Downward Stabbing</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video5.mp4')}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Chain jab</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video6.mp4')}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Basic Moves</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video7.mp4')}
                            rate={1.0}
                            resizeMode="cover"
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape a Bear Hug</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video8.mp4')}
                            rate={1.0}
                            resizeMode="cover" 
                            useNativeControls
                            style={styles.video}
                        />
                        <Text style={styles.text}>Use Heels as a Weapon</Text>

                       
                                      
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
        marginHorizontal: 0,
        width:425,
        height:270
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 15,
        color: '#681fa2',
        marginBottom: 28
    }
});
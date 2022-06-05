//Importing components from libraries
import React from 'react';

import { StyleSheet, Text, View, Alert, Button, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { WebView } from 'react-native-webview';

import AppHeader from '../components/AppHeader.js';


export default class RatingsScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
      
      onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }

    //Displaying various components in render
    render(){
        return(
            <View >
                
                <AppHeader navigation ={this.props.navigation}/>
                
                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
                  <ScrollView contentContainerStyle={{height: 2000}}>
                    <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 10}} source ={require('../assets/ln.png')} />

                    
                    <TextInput
                      value={this.state.username}
                      onChangeText={(username) => this.setState({ username })}
                      placeholder={'Username'}
                      style={styles.input}
                   />
                   <TextInput
                      value={this.state.password}
                      onChangeText={(password) => this.setState({ password })}
                      placeholder={'Password'}
                      secureTextEntry={true}
                      style={styles.input}
                   />
                     <Button
                       title={'Login'}
                       style={styles.input}
                        onPress={this.onLogin.bind(this)}
                   /> 
                                   
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        width: 200,
        alignSelf: 'center',
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
});
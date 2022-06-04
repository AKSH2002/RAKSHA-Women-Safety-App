//Importing components from libraries
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Linking, PermissionsAndroid, FlatList, Modal} from 'react-native';
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants';
import * as Contacts from 'expo-contacts';
import { ListItem, Icon, SearchBar, Header, Avatar, Button } from 'react-native-elements';
import call from 'react-native-phone-call'
import * as SMS from 'expo-sms';
import ChatBot from '../components/ChatBot.js'
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

var SendIntentAndroid = require('react-native-send-intent');

import AppHeader from '../components/AppHeader.js';

const args = {
    number: '100',
    prompt: false
  }


export default class SOSscreen extends React.Component{

  //Defining states in constructor
  constructor() {
    super();
    this.state = {
      visible: false,
      data : null,
      pressed: false,
      selectedId: null,
      setSelectedId:null,
      dataSource:[],
      search : '',
      chat:false,
      locationLatitude: null,
      locationLongitude: null,
      addressLink: null,
      mapVisible: false,
      otherNumbersVisble: false
  };
}

  //Function to update the search bar
  updateSearch = search => {
    this.setState({ search });
  };

  //Function to fetch contacts of the user from memory
  async componentDidMount(){
    
    const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Name
            ],
        });
        if (data.length > 0) {
          console.log(data)
          this.setState({
            data : data

          })
             
        }
      }
  }

  //Function to get the current location of the user
  getLocation= async () =>{
    let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
      this.setState({locationLatitude: location.coords.latitude.toString(), locationLongitude: location.coords.longitude.toString()})
  }

  
  //Function to text the trusted contact
  sms(contact){
  
    const isAvailable =  SMS.isAvailableAsync();
    if (isAvailable) {
      this.setState({visible:false, search: '', setSelectedId: null})
      
    const { result } =  SMS.sendSMSAsync(
      contact,
      "I need help!\nIt's urgent.\nPlease contact me immediately."
      );
    }
  }

  //Function to show the AI ChatBot
  showChatBot=()=>{
    return(
    <Modal
    visible={this.state.chat}>
      <View>
        <Header 
          backgroundColor="#681fa2"
          leftComponent={<Icon name="arrow-left" type="font-awesome" size={30} color="white" onPress={()=> this.setState({chat:false})}/>}
          centerComponent={<Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>RAKSHA - The ChatBot</Text>}
          rightComponent={<Image source={require('../assets/chat-bot.png')} style={{height:40, width: 40}}/>}
        />
      </View>
      <ChatBot />
    </Modal>
    )
  }

  //Function to show the nearby police stations
  showPoliceStations=()=>{
    return(
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.mapVisible}
      >
      <View>
        <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20}}>
          <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({mapVisible:false})}} color="#7700F2" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
          <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 55, marginTop: 20}}>Nearby Policess Stations</Text>
          <Icon name="map-marked-alt" type="font-awesome-5" size={25} color="#7700F2" iconStyle={{alignSelf: 'flex-end', marginRight: 8, marginTop: 20, marginLeft: 45}} />
        </View>
      </View>

      <WebView source={{ 
        uri: "https://www.google.co.in/maps/search/nearby+police+station/@" + this.state.locationLatitude + ',' + this.state.locationLongitude + ',13z/data=!3m1!4b1?hl=en'
        }} 
        style={{borderTopWidth: 1, borderTopColor: '#000000'}}
      />
      </Modal>
      
    )
  }

  //Function to show the various emergency numbers
  showOtherNumbers=()=>{
    return(
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.otherNumbersVisble}
      >
        <View>
        <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2',  paddingBottom: 20, backgroundColor: '#681fa2'}}>
          <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({otherNumbersVisble: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
          <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 65, marginTop: 20, color: '#fff'}}>Emergency Numbers</Text>
          <Icon name="phone-volume" type="font-awesome-5" size={25} color="#fff" iconStyle={{alignSelf: 'flex-end', marginRight: 2, marginTop: 20, marginLeft: 60}} />
        </View>
          <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
            <ScrollView contentContainerStyle={{height: 1600}}>

               <Image style={styles.callImage} source={require('../assets/102.png')} />
               <Button buttonStyle={styles.callButton} title="Call Ambulance 📞 108" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'102'})}}/>

               <Image style={styles.callImage} source={require('../assets/Helpline.png')} />
               <Button buttonStyle={styles.callButton} title="Women Helpline 📞 1091" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'1091'})}}/>

               <Image style={styles.callImage} source={require('../assets/NCW.png')} />
               <Button buttonStyle={styles.callButton} title="NCW 📞 011-26942369" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'011-26942369'})}} />

               <Image style={styles.callImage} source={require('../assets/112.png')} />
               <Button buttonStyle={styles.callButton} title="Emergency Helpline 📞 112" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'112'})}}/>

               <Image style={styles.callImage} source={require('../assets/ch1.png')} />
               <Button buttonStyle={styles.callButton} title="Child care Helpline 📞 1098" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'1098'})}}/>

               <Image style={styles.callImage} source={require('../assets/ch2.png')} />
               <Button buttonStyle={styles.callButton} title="Complain about child labour 📞 1800-102-7222" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'1800-102-7222'})}}/>
               
               <Image style={styles.callImage} source={require('../assets/ch3.png')} />
               <Button buttonStyle={styles.callButton} title="Complain about Child Marriage 📞 1098" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'1098'})}}/>
               
               </ScrollView>
          </ImageBackground>
        
        </View>
      </Modal>
    )
  }

  //Function to show the various contacts that the user can text to
  showModal=()=>{
    return(
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.visible}
    >
    <View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({visible:false})}} color="#7700F2" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
        <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 90, marginTop: 20}}>Select Contact</Text>
        <Icon name="address-book" type="font-awesome" size={25} color="#7700F2" iconStyle={{alignSelf: 'flex-end', marginRight: 5, marginTop: 20, marginLeft: 85}} />
      </View>
    <SearchBar
      placeholder="Type Here..."
      inputContainerStyle={{height: 35, backgroundColor: '#F2F2F2', borderRadius: 40}}
      placeholder="Search Contact(s)..."
      containerStyle={{backgroundColor: '#fff'}}
      lightTheme
      onChangeText={text => this.SearchFilterFunction(text)}
      onClear={text => this.SearchFilterFunction('')}
      value={this.state.search}
    />
    <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.search === "" ?  this.state.data: this.state.dataSource}
      renderItem={this.renderItem}
      extraData={this.state.search === "" ?  this.state.selectedId: this.state.dataSource}
    />
    </View>
    </Modal>
    )
  }

  //Function to search and show various contacts by their name
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.data.filter((item)=> {
      //applying filter for the inserted text in search bar
      const itemData = item.name || item.phoneNumbers?.[0]?.number
      const textData = text;
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  keyExtractor = (item, index) => index.toString();
  
  //Function to render the contact flatist items
  renderItem = ( {item, i} ) =>{
    const backgroundColor = item.phoneNumbers?.[0]?.number === this.state.setSelectedId ? "#7700F2" : "#ffa0dc99";
    const color = item.phoneNumbers?.[0]?.number === this.state.setSelectedId ? "#7700F2" : "#000000";
    return (
      <ListItem
        key={i}
        onPress={()=> { this.sms(item.phoneNumbers?.[0]?.number)
          this.setState({setSelectedId: item.phoneNumbers?.[0]?.number, dataSource: item.name})}}
        title={item.name}
        titleStyle={{ color: color }}
        leftElement={
            <Icon name="user-circle" type="font-awesome" color="grey" size={25}/>
          }
        rightElement={
            <Icon name="send" type="font-awesome" size={23} iconStyle={{color:backgroundColor}} />
          }
        bottomDivider
      />
    )
  }

    //Displaying various components in render
    render(){
        return(
         
            <View>
              
                  <AppHeader navigation ={this.props.navigation}/>
                
                  {this.showModal()}
                  {this.showChatBot()}
                  {this.showPoliceStations()}
                  {this.showOtherNumbers()}

                  <ImageBackground source={require('../assets/bg.png')} style={styles.image}>                                       

                      <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 40}} source ={require('../assets/SOS.png')} />

                      <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 50}}>
                      <TouchableOpacity style={[styles.button,{marginRight: 50}]} onPress={()=> {call(args)}} >
                          <Image source={require('../assets/100.png')} style={styles.button}/>
                          <Text style={styles.buttonText}>Call Police</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={()=> this.setState({visible:true})} >
                          <Image source={require('../assets/message.png')} style={styles.button}/>
                          <Text style={styles.buttonText}>Message Family</Text>
                      </TouchableOpacity>
                      </View>

                      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                      <TouchableOpacity style={[styles.button,{marginRight: 50}]} onPress={()=>{this.setState({mapVisible: true}), this.getLocation();}}>
                          <Image source={require('../assets/maps.png')} style={styles.button}/>
                          <Text style={styles.buttonText}>Nearby Police Staions</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={()=>{this.setState({otherNumbersVisble: true})}} >
                          <Image source={require('../assets/ch4.png')} style={styles.button}/>
                          <Text style={styles.buttonText}>Emergency Numbers</Text>
                      </TouchableOpacity>
                      </View>

                      <View>
                          <Avatar
                              containerStyle={{alignSelf:'flex-end', marginTop: 75 }}                      
                              source={require('../assets/chat.png')}
                              size={60}                          
                              onPress={()=>{this.setState({chat:true})}}
                          />
                          <Text style={{marginTop: -2, alignSelf:'flex-end', marginRight: 8, color: '#681fa2', fontSize: 13}}>ChatBot</Text>
                      </View>                                         

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
    button: {
        width: 130,
        height: 118,
        alignSelf: 'center',
    },
    buttonText: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: -7,
        color: '#681fa2',
        fontSize: 17,
        textAlign: 'center'
    },
    callImage: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      marginTop: 25, 
      marginBottom: 15
    },
    callButton: {
      width: 250,
      backgroundColor: '#fff',
      alignSelf: 'center'
    },
    callButtonText: {
      color: '#681fa2',
      fontSize: 17
    }
});
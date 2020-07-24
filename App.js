//Importing components from libraries
import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { AppDrawerNavigator } from './components/AppDrawerNavigator';


export default class App extends Component {

  //Defining states in constructor
  constructor(props){
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount(){
    await Font.loadAsync({fontello:require('./resources/fonts/fontello.ttf')});
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
    <AppContainer/> 
    );
  }
}


//Creating app container which contains all screens
const AppContainer =  createAppContainer(AppDrawerNavigator);



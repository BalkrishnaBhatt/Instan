import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Dimensions, StyleSheet,TextInput } from 'react-native';

import PhoneInput from "react-native-phone-input";

import ImageSlider from 'react-native-image-slider';

import styles from './styles/StartPage'

export default class StartPage extends React.Component {

  render () {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/nature'
    ]
    return (
      <View style={styles.view}>

        <View style={{flex:0.7}}>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images} />
       </View>

        <View style={{flex:0.1,justifyContent:'flex-start',paddingTop:15}}>
          <Text style={styles.txt}>
            What are you waiting for?
          </Text>
        </View>

        <View style={{flex:0.15,}}>
          <TextInput style={{color:'#181818',paddingLeft:20}} keyboardType="phone-pad" placeholder='Enter your mobile number' placeholderTextColor="#828282">
          </TextInput>
        </View>

        <View style={{flex:0.1,justifyContent:'flex-end',paddingBottom:20}}>
          <TouchableOpacity>
            <Text style={styles.txt}>
              Or connect using social account’
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
/*
 <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
 <Image source={require('../Images/Doolu_-_Logos_-_Primary_-_White.png')} style={styles.img}/>
 <View>
 <Text style={styles.title}>
 Personal Service.
 </Text>
 <Text style={styles.title}>
 Trusted Help
 </Text>
 </View>
 </View>
*/

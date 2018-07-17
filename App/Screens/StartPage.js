import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native'

import PhoneInput from 'react-native-phone-input'

import CountryPicker, {
  getAllCountries
} from 'react-native-country-picker-modal'

import ImageSlider from 'react-native-image-slider'

import styles from './styles/StartPage'

const NORTH_AMERICA = ['CA', 'MX', 'US']

export default class StartPage extends React.Component {

  render () {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/nature'
    ]
    return (
      <View style={styles.view}>

        <View style={{flex: 0.7}}>
          <ImageSlider
            loopBothSides
            autoPlayWithInterval={3000}
            images={images}/>
        </View>

        <View style={{flex: 0.08, justifyContent: 'flex-start', paddingTop: 15}}>
          <Text style={styles.txt}>
            What are you waiting for?
          </Text>
        </View>

        <View style={{flex: 0.13}}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#ccc'
          }}>

            <View style={{flex: .27}}>
              <PhoneInput ref='phone' style={{paddingLeft:18}} textStyle={{color: '#181818',fontSize: 18,fontFamily: 'Helvetica NeueLTPro_Th'}}
                          flagStyle={{height: 32, borderRadius: 16, backgroundColor: 'white'}}/>
            </View>
            <TextInput style={{color: '#181818', flex: .73, fontFamily: 'Helvetica NeueLTPro_Th',fontSize: 18,}}
                       keyboardType="phone-pad" placeholder='Enter your mobile number' placeholderTextColor="#828282"
                       underlineColorAndroid={'transparent'}/>
          </View>
        </View>

        <View style={{flex: 0.09, justifyContent: 'flex-end', paddingBottom: 20}}>
          <TouchableOpacity>
            <Text style={styles.txt1}>
              Or connect using social account.
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

import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native'

import PhoneInput from 'react-native-phone-input'

import ImageSlider from '../Components/ImageSlider'

import styles from './styles/StartPage'

export default class StartPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [
        <Text style={{color: '#f00'}}>
          {`Hello  1`}
        </Text>,
        <Text style={{color: '#0f0'}}>
          {`Hello  2`}
        </Text>,
        <Text style={{color: '#00f'}}>
          {`Hello  3`}
        </Text>,
      ]
    }
  }

  render () {
    return (
      <View style={styles.view}>

        <View style={{flex: 0.75}}>
          <ImageSlider items={this.state.items}/>
        </View>

        <View style={{flex: 0.083, justifyContent: 'flex-start', paddingTop: 15}}>
          <Text style={styles.txt}>
            What are you waiting for?
          </Text>
        </View>

        <View style={{flex: 0.083}}>
          <TextInput style={{color: '#181818', paddingLeft: 20}} keyboardType="phone-pad"
                     placeholder='Enter your mobile number' placeholderTextColor="#828282">
          </TextInput>
        </View>

        <View style={{flex: 0.083, justifyContent: 'flex-end', paddingBottom: 20}}>
          <TouchableOpacity>
            <Text style={[styles.txt, {fontSize: 16}]}>
              Or connect using social account.
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

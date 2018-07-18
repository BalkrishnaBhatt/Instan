import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native'

import PhoneInput from 'react-native-phone-input'

import ImageSlider from '../Components/ImageSlider'

import styles from './styles/StartPage'

const firstScreen = () => <View style={{alignItems: 'center',}}>
  <Image source={require('../../App/Images/Doolu_-_Logos_-_Primary_-_White.png')} style={{height: 24, width: 88}}/>
  <Text style={styles.title1}>
    Personal Service.
  </Text>
  <Text style={styles.title2}>
    Trusted Help.
  </Text>
  <Text style={styles.title3}>
    Find an assistant at the
  </Text>

  <Text style={styles.title4}>
    tip of your fingers
  </Text>

</View>

const secondScreen = () => <View style={{alignItems: 'center',}}>
  <Image source={require('../../App/Images/Doolu_-_Logos_-_Primary_-_White.png')} style={{height: 24, width: 88}}/>
  <Text style={styles.title1}>
    Find trusted help
  </Text>
  <Text style={styles.title2}>
    in your community
  </Text>
  <Text style={styles.title3}>
    Local, verified and trusted help to lend a
  </Text>
  <Text style={styles.title4}>
    hand with your tasks
  </Text>
</View>

const thirdScreen = () => <View style={{alignItems: 'center',}}>
  <Image source={require('../../App/Images/Doolu_-_Logos_-_Primary_-_White.png')} style={{height: 24, width: 88}}/>
  <Text style={styles.title1}>
    Post and pay
  </Text>
  <Text style={styles.title2}>
    easily
  </Text>
  <Text style={styles.title3}>
    It’s safe, secure and simple to post
  </Text>
  <Text style={styles.title4}>
    and pay for the help on our app
  </Text>

</View>

export default class StartPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [
        firstScreen(),
        secondScreen(),
        thirdScreen(),
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

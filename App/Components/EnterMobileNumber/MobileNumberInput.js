import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native'

let {width, height} = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/mobileNumber'

export default class MobileNumber extends Component {
  render () {
    return (
      <View
        style={{backgroundColor: '#fff', flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#181818'}}>

        <TouchableOpacity style={{paddingLeft: 20}}>
          <Image source={{uri: 'https://cdn.countryflags.com/thumbs/canada/flag-3d-round-250.png'}}
                 style={styles.img}/>
        </TouchableOpacity>

        <Icon name={'chevron-small-down'} size={20}/>

        <TextInput style={styles.txtInput}
                   keyboardType="phone-pad"
                   placeholder='Enter your mobile number'
                   placeholderTextColor="#828282"
                   underlineColorAndroid={'transparent'}/>
      </View>
    )
  }
}

import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native'

import CountrySelect from '../../Screens/CountrySelect'

let {width, height} = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/mobileNumberInput'

export default MobileNumber = (props) =>
  <View style={[styles.container, {width: props.modalVisible ? width - 50 : width}]}>

    <TouchableOpacity style={{padding: 5, paddingLeft: props.modalVisible ? 0 : 20}}
                      onPress={() => props.onFlagPress()}>
      <Image source={{uri: props.activeCountry.flag}}
             style={props.modalVisible ? styles.img40 : styles.img32}/>
    </TouchableOpacity>

    { props.modalVisible && <TouchableOpacity onPress={() => props.onFlagPress() }>
      <Icon name={'chevron-thin-down'} size={15} style={{padding: 8}}/>
    </TouchableOpacity>
    }

    <Text style={[styles.countryCode, {fontSize: props.modalVisible ? 20 : 18}]}>+1</Text>

    <TextInput style={[styles.txtInput, {fontSize: props.modalVisible ? 20 : 18}]}
               keyboardType="phone-pad"
               ref={props.setRef}
               onFocus={() => props.onFocusHandle()}
               placeholder={props.modalVisible ? '(604) 234-5678' : 'Enter your mobile number'}
               placeholderTextColor="#828282"
               underlineColorAndroid={'transparent'}
               onChangeText={(value) => props.onEnterNumber(value)}
    />
  </View>

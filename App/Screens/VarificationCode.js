import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  BackHandler,
} from 'react-native'

let {width, height} = Dimensions.get('window')

import styles from './styles/VarificationCode'

import TimerCountdown from 'react-native-timer-countdown'
import { CountDownText } from 'react-native-countdown-timer-text'

import CodeInput from 'react-native-confirmation-code-input'

import Icon from 'react-native-vector-icons/Entypo'

export default class VarificationCode extends Component {
  render () {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Icon name={'chevron-thin-left'} size={25}></Icon>
        </TouchableOpacity>

        <View style={{flexDirection: 'column', flex: 0.1}}>
          <Text style={styles.txt}>
            Enter the 6-digit code sent to you at
          </Text>
          <Text style={[styles.txt, {fontFamily: 'Helvetica NeueLTPro_Lt'}]}>
            (604)234-5678
          </Text>
        </View>

        <View style={{flex: 0.73, marginTop: 10}}>
          <CodeInput
            className='border-b'
            space={6}
            codeLength={6}
            inputPosition='left'
            inactiveColor='#ccc'
            codeInputStyle={{color: '#181818', fontFamily: 'Helvetica NeueLTPro_Th', fontSize: 35,}}
            activeColor="#181818"
          />
        </View>


        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 0.1}}>
          <CountDownText countType='seconds'
                         style={styles.count}
                         auto={true}
                         afterEnd={() => {}}
                         timeLeft={30}
                         step={-1}
                         endText='Resend code now'
                         intervalText={(sec) => 'Resend code in 00:' + sec }/>

          <TouchableOpacity style={styles.next}>
            <Icon name={'chevron-thin-right'} color="#fff" size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



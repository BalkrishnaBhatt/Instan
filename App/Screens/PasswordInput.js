import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  StyleSheet,
  TextInput,
  BackHandler,
} from 'react-native'

let {width, height} = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/PasswordInput'

export default class PasswordInput extends Component {

  constructor (props) {
    super(props)
    this.state = {
      password:''
    }

  }

  render () {
    let {password} = this.state
    return (
      <View style={styles.view }>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor="rgba(0, 0, 0, 0)"
          animated/>

        <TouchableOpacity
          style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Icon name={'chevron-thin-left'} size={25}/>
        </TouchableOpacity>

        <View style={{flexDirection: 'column', flex: 0.15}}>
          <Text style={styles.txt}>
            Welcome back, sign in to continue
          </Text>
        </View>

        <View style={{flex: 0.65}}>
          <TextInput secureTextEntry={true}
                     keyboardType='default'
                     placeholder={'Enter your password'}
                     style={styles.txtInput}
                     onChangeText={(val)=> this.setState({password:val})} >

          </TextInput>
        </View>

        <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

          <View style={{flexDirection: 'column', justifyContent: 'center'}}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('PasswordReset')}>
              <Text style={styles.bottom}>
                Forgot my password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <Text style={styles.bottom}>
                Don’t have an account
              </Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={[styles.next,{backgroundColor: password.length > 7 ? '#181818' : '#c2c2c2'}]} >
            <Icon name={'chevron-thin-right'} color="#fff" size={20}/>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

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
  Alert,
  ScrollView
} from 'react-native'

let {width, height} = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/PasswordReset'

export default class PasswordReset extends Component {

  constructor (props) {
    super(props)

    this.state = {
      ConfirmAlert: false,
      emailId: false,
    }
  }

  render () {

    let {ConfirmAlert, emailId} = this.state

    return (

      <View style={styles.view}>

        <StatusBar
          translucent
          barStyle={ConfirmAlert ? 'default' : 'dark-content'}
          backgroundColor={ConfirmAlert ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)'}
          animated/>

        <Modal
          animationType="none"
          transparent={true}
          visible={ConfirmAlert}
          onRequestClose={() => this.setState({ConfirmAlert: false})}>
          <TouchableOpacity style={{flex: 1}} onPress={() => this.setState({ConfirmAlert: false})}>
            <View style={{flex: .7, backgroundColor: '#0007'}}/>
            <View style={{flex: .3, backgroundColor: '#fff'}}>

            </View>
          </TouchableOpacity>
        </Modal>

        <TouchableOpacity
          style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Icon name={'chevron-thin-left'} size={25}></Icon>
        </TouchableOpacity>

        <View style={{flexDirection: 'column', flex: 0.15}}>
          <Text style={styles.txt}>
            Enter the email address you used to register
          </Text>
        </View>

        <View style={{flex: 0.65}}>
          <TextInput
            onChangeText={(val) => this.setState({emailId: val}) }
            placeholder={'e******@examples.com'}
            placeholderTextColor={'#828282'}
            style={styles.txtInput}>
          </TextInput>
        </View>

        <TouchableOpacity style={{
          bottom: 20,
          right: 20,
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailId) ? '#181818' : '#828282'
        }}>
          <Icon name={'chevron-thin-right'} color="#fff" size={20}/>
        </TouchableOpacity>
      </View>
    )
  }
}

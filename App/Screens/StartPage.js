import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  TextInput,
  BackHandler
} from 'react-native'

import PhoneInput from 'react-native-phone-input'

import ImageSlider from '../Components/ImageSlider'

import styles from './styles/StartPage'

import { firstScreen, secondScreen, thirdScreen } from '../Components/startPage/SliderComponents'

export default class StartPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [
        firstScreen(),
        secondScreen(),
        thirdScreen(),
      ],
      modalVisible: false
    }

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  handleBackButtonClick () {
    this.refs.input.blur()
    this.setState({modalVisible: false})
    return true
  }

  render () {

    let {modalVisible} = this.state

    return (
      <View style={[styles.view, {alignItems: 'flex-start'}]}>

        {
          !modalVisible && <View style={{flex: 0.75}}>
            <ImageSlider items={this.state.items}/>
          </View>
        }

        {
          !modalVisible && <View style={styles.txt1}>
            <Text style={styles.txt}>
              What are you waiting for?
            </Text>
          </View>
        }

        <View style={{flex: modalVisible ? 1 : 0.13, justifyContent: 'flex-start'}}>
          <View style={styles.viewLine}>
            <View style={{flex: .27}}
                  onPress={() => this.setState({modalVisible: !this.state.modalVisible})}>
              <PhoneInput ref='phone' style={{paddingLeft: 18}}
                          textStyle={styles.phoneinput}
                          flagStyle={{height: 32, borderRadius: 16, backgroundColor: 'white'}}/>
            </View>
            <TextInput style={styles.txtInput}
                       keyboardType='numeric'
                       placeholder='Enter your mobile number'
                       ref="input"
                       onFocus={() => this.setState({modalVisible: !this.state.modalVisible})}
                       placeholderTextColor="#828282" underlineColorAndroid={'transparent'}/>
          </View>
        </View>

        {
          !modalVisible && <View style={{flex: 0.075, justifyContent: 'flex-end', paddingBottom: 20}}>
            <TouchableOpacity>
              <Text style={styles.txt3}>
                Or connect using social account.
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

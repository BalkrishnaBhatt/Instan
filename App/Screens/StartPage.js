import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  BackHandler
} from 'react-native'

let {width, height} = Dimensions.get('window')

import MobileNumberInput from '../Components/EnterMobileNumber/MobileNumberInput'
import ImageSlider from '../Components/ImageSlider'
import { firstScreen, secondScreen, thirdScreen } from '../Components/startPage/SliderComponents'

import styles from './styles/StartPage'
import Icon from 'react-native-vector-icons/Entypo'

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
    this.setRef = this.setRef.bind(this)
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  handleBackButtonClick () {
    this.childInput.blur()
    this.setState({modalVisible: false})
    return true
  }

  setRef (input) {
    this.childInput = input
  }

  render () {

    let {modalVisible} = this.state

    return (
      <View style={[styles.view, {alignItems: 'flex-start'}]}>

        <StatusBar
          translucent
          barStyle={modalVisible ? 'dark-content' : 'light-content'}
          backgroundColor="rgba(0, 0, 0, 0)"
          animated/>

        {
          modalVisible && <TouchableOpacity style={{flex: 0.09, padding: 20, paddingTop: 40, paddingBottom: 5}}
                                            onPress={() => {
                                              this.childInput.blur()
                                              this.setState({modalVisible: false})
                                            }}>
            <Icon name={'chevron-thin-left'} size={25}/>
          </TouchableOpacity>
        }

        {
          modalVisible && <View style={{padding: 5, paddingBottom: 10, paddingLeft: 25}}>
            <Text style={[styles.title2, {fontSize: 24, color: '#000'}]}>Enter your mobile number</Text>
          </View>
        }

        {
          !modalVisible && <View style={{flex: 0.75, width: width}}>
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

        <View style={{flex: 0.18, paddingLeft: modalVisible ? 25 : 0, paddingRight: modalVisible ? 25 : 0}}>

          <MobileNumberInput
            setRef={this.setRef}
            modalVisible={modalVisible}
            onFocusHandle={() => this.setState({modalVisible: true})}
          />

          <View
            style={{
              paddingBottom: modalVisible ? 0 : 20,
              borderBottomWidth: modalVisible ? 1 : .5,
              borderColor: '#181818'
            }}
          />
        </View>

        {
          !modalVisible && <View style={{flex: 0.04, alignItems: 'center', paddingBottom: 20}}>
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

{/*<View style={{flex: modalVisible ? 1 : 0.13, justifyContent: 'flex-start'}}>
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
 </View>*/
}

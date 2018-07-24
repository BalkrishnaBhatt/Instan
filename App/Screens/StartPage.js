import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  Button,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  BackHandler,
  Animated,
  Easing
} from 'react-native'

let {width, height} = Dimensions.get('window')

import MobileNumberInput from '../Components/EnterMobileNumber/MobileNumberInput'
import ImageSlider from '../Components/ImageSlider'
import CountrySelect from '../Screens/CountrySelect'
import { firstScreen, secondScreen, thirdScreen } from '../Components/startPage/SliderComponents'
import OpenScreen from '../Screens/OpenScreen'

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
      modalVisible: false,
      CountryModal: false,
      showOpenScreen: true,
      mobileNumber: ''
    }

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.setRef = this.setRef.bind(this)

    this.opacityValue = new Animated.Value(0)
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentDidMount () {
    this.opacity()
    setTimeout(() => this.setState({showOpenScreen: false}), 2000)
  }

  opacity () {
    this.opacityValue.setValue(0)
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 2100,
        easing: Easing.linear
      }
    ).start(() => this.opacity())
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  handleBackButtonClick () {
    let {modalVisible} = this.state

    if (modalVisible) {
      this.childInput.blur()
      this.setState({modalVisible: false})
      return true
    }

  }

  _handleFlagPress () {
    let {modalVisible} = this.state
    !modalVisible ? this.setState({modalVisible: true}) : this.setState({CountryModal: true})
    return true
  }

  setRef (input) {
    this.childInput = input
  }

  render () {

    let {modalVisible, CountryModal, showOpenScreen, mobileNumber} = this.state

    const opacity = this.opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    if (showOpenScreen) {
      return <OpenScreen opacity={opacity}/>
    }
    else {
      return (
        <View style={[styles.view, {alignItems: 'flex-start'}]}>

          <StatusBar
            translucent
            barStyle={modalVisible ? 'dark-content' : 'light-content'}
            backgroundColor="rgba(0, 0, 0, 0)"
            animated/>

          <Modal
            animationType="none"
            transparent={false}
            visible={CountryModal}
            onRequestClose={() => this.setState({CountryModal: false})}>
            <CountrySelect onClose={() => this.setState({CountryModal: false})}/>
          </Modal>

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
              <Text style={[styles.title2, {fontSize: 20, color: '#000'}]}>Enter your mobile number</Text>
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
              onFlagPress={() => this._handleFlagPress()}
              onEnterNumber={(value) => this.setState({mobileNumber: value})}
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
            !modalVisible && <TouchableOpacity style={{flex: 0.04, alignItems: 'center', paddingBottom: 20}}
                                               onPress={() => this.props.navigation.navigate('SocialConnect') }>

              <Text style={styles.txt3}>
                Or connect using social account.
              </Text>

            </TouchableOpacity>
          }

          {
            modalVisible &&
            <TouchableOpacity onPress={() => mobileNumber.length > 10 && this.props.navigation.navigate('VarificationCode')}
                              style={{
                                bottom: 20,
                                right: 20,
                                position: 'absolute',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 50,
                                width: 50,
                                borderRadius: 25,
                                backgroundColor: mobileNumber.length > 10 ? '#181818' : '#c2c2c2'
                              }}>

              <Icon name={'chevron-thin-right'} color="#fff" size={20}/>

            </TouchableOpacity>
          }
        </View>
      )
    }
  }
}

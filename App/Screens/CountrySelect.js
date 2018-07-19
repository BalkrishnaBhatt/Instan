import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native'
import _ from 'underscore'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import styles from './styles/CountrySelect'

const CountryTile = ({country, onCountrySelect, isActive}) => (


  <TouchableOpacity style={styles.flag} onPress={() => onCountrySelect()}>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{paddingLeft: 25, padding: 5,}}>
        <Image source={{uri: country.flag}}
               style={styles.img40}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch}>
        <Text style={styles.txtInput}>
          {country.name}
        </Text>
      </TouchableOpacity>
    </View>
    <Icon name={isActive ? 'check-circle-outline' : 'checkbox-blank-circle-outline'}
          color={isActive ? '#33cc33' : '#cccccc'} style={styles.btn} size={30}/>
  </TouchableOpacity>)

export default class CountrySelect extends Component {

  constructor (props) {
    super(props)

    this.state = {
      countries: [
        {
          flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
          name: 'India'
        },
        {
          flag: 'https://cdn.countryflags.com/thumbs/canada/flag-3d-round-250.png',
          name: 'Canada'
        },
        {
          flag: 'http://iconbug.com/data/fe/256/4b7f0c0ec2633afc83bfdae6375fdb87.png',
          name: 'United States Of America'
        }
      ],
      selectedCountry: {
        flag: 'https://cdn.countryflags.com/thumbs/canada/flag-3d-round-250.png',
        name: 'Canada'
      },
      activeCountry: 0,
      modalVisible: true,
    }
  }

  render () {

    let {countries, activeCountry, selectedCountry, modalVisible} = this.state

    return (
      <View style={styles.view}>

        <TouchableOpacity onPress={() => this.props.onClose()}
                          style={{flex: 0.1, padding: 20, paddingTop: 17, paddingBottom: 5, alignItems: 'flex-start'}}>
          <EntypoIcon name={'chevron-thin-left'} size={25}></EntypoIcon>
        </TouchableOpacity>


        <View style={{padding: 5, paddingBottom: 10, paddingTop: 30, paddingLeft: 25,}}>
          <Text style={{
            fontSize: 24, color: '#000',
            fontFamily: 'Helvetica NeueLTPro_Th'
          }}>Currently Selected</Text>
        </View>

        <CountryTile style={{borderBottomWidth: 1, borderColor: '#181818', margin: 26,}} country={selectedCountry}
                     isActive={true} onCountrySelect={() => {return}}/>

        <View style={{
          borderBottomWidth: 1,
          borderColor: '#181818', margin: 26, marginTop: 0
        }}/>

        <View style={{flex: 0.15}}>
          <Text style={styles.txt}>
            Available Countries
          </Text>
        </View>

        {
          _.map(countries, (country, i) => <CountryTile key={i} country={country}
                                                        isActive={i === activeCountry}
                                                        onCountrySelect={() => this.setState({activeCountry: i})}/>)
        }

      </View>
    )
  }
}

{/*

 <TouchableOpacity style={{padding: 5, paddingLeft: props.modalVisible ? 0 : 20}}
 onPress={() => props.onFlagPress()}>
 <Image source={{uri: 'https://cdn.countryflags.com/thumbs/canada/flag-3d-round-250.png'}}
 style={props.modalVisible ? styles.img40 : styles.img32}/>
 </TouchableOpacity>



 <TouchableOpacity style={{flex: 0.09, padding: 20, paddingTop: 40, paddingBottom: 5}}
 <EntypoIcon name={'chevron-thin-left'} size={25}/>
 </TouchableOpacity>

 <View style={{flex: 0.12, padding: 10}}>
 <TouchableOpacity style={styles.touchable} onPress={() => this.props.onClose()}>
 <EntypoIcon name={'chevron-thin-left'} style={styles.btn} size={25}/>
 </TouchableOpacity>
 </View>



 */
}

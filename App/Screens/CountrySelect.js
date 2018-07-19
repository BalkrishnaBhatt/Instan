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

import Icon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import styles from './styles/CountrySelect'

const CountryTile = ({country, onCountrySelect, isActive}) => (
  <TouchableOpacity style={styles.flag} onPress={() => onCountrySelect()}>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{paddingLeft: 30}}>
        <Image source={{uri: country.flag}}
               style={styles.img}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch}>
        <Text style={styles.txtInput}>
          {country.name}
        </Text>
      </TouchableOpacity>
    </View>
    <Icon name={isActive ? 'check' : 'plus'}
          color={isActive ? '#33cc33' : '#181818'} style={styles.btn} size={30}/>
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
    }
  }

  render () {

    let {countries, activeCountry, selectedCountry} = this.state

    return (
      <View style={styles.view}>

        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor="rgba(0, 0, 0, 0)"
          animated/>

        <View style={{flex: 0.12, padding: 5}}>
          <TouchableOpacity style={styles.touchable} onPress={() => this.props.onClose()}>
            <EntypoIcon name={'chevron-thin-left'} style={styles.btn} size={25}/>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.10}}>
          <Text style={styles.txt}>
            Currently Selected
          </Text>
        </View>

        <CountryTile country={selectedCountry} isActive={true} onCountrySelect={() => {return}}/>

        <View style={{
          borderBottomWidth: 1,
          borderColor: '#181818', margin: 26, flex: 0.001
        }}/>

        <View style={{flex: 0.10}}>
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

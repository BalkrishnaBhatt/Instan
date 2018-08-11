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
  ScrollView
} from 'react-native'
import _ from 'underscore'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import styles from './styles/CountrySelect'

const CountryTile = ({country, onCountrySelect, isActive}) => (
  <TouchableOpacity style={styles.flag} onPress={() => onCountrySelect()}>
    <View style={{flexDirection: 'row'}}>
      <View style={{paddingLeft: 25, padding: 5,}}>
        <Image source={{uri: country.flag}}
               style={styles.img40}/>
      </View>

      <View style={styles.touch}>
        <Text style={styles.txtInput}>
          {country.name}
        </Text>
      </View>
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
          flag: 'https://cdn.countryflags.com/thumbs/canada/flag-3d-round-250.png',
          name: 'Canada'
        },
        {
          flag: 'http://iconbug.com/data/fe/256/4b7f0c0ec2633afc83bfdae6375fdb87.png',
          name: 'United States Of America'
        }
      ],
      selectedCountry: props.activeCountry,
      activeCountry: 0,
      modalVisible: true,
    }

    this._onCountrySelect = this._onCountrySelect.bind(this)
  }

  /*async componentDidMount () {
   await fetch('https://restcountries.eu/rest/v2/all', {headers: {'Access-Control-Allow-Origin': '*'}})
   .then((result) => result.json())
   .then((countries) => {
   console.log(countries, 'sddde')
   this.setState({countries: countries})
   })
   }*/

  componentDidMount () {
    this.setState({activeCountry: _.findIndex(this.state.countries, this.state.selectedCountry)})
  }

  _onCountrySelect (i) {

    let {countries} = this.state

    this.props.onCountrySelect(countries[i])
    this.props.onClose()
  }

  render () {

    let {countries, activeCountry, selectedCountry, modalVisible} = this.state

    return (
      <View style={styles.view}>

        <StatusBar
          barStyle={'light-content'}
          backgroundColor="rgba(255, 255, 255, 1)"
          animated/>

        <TouchableOpacity onPress={() => this.props.onClose()}
                          style={{flex: 0.1, padding: 20, paddingTop: 17, paddingBottom: 5, alignItems: 'flex-start'}}>
          <EntypoIcon name={'chevron-thin-left'} size={25}/>
        </TouchableOpacity>


        <View style={{padding: 5, paddingBottom: 10, paddingTop: 30, paddingLeft: 25,}}>
          <Text style={{
            fontSize: 20, color: '#181818',
            fontFamily: 'Helvetica NeueLTPro_Th'
          }}>Currently Selected</Text>
        </View>

        <CountryTile style={{borderBottomWidth: 1, borderColor: '#181818', margin: 26,}}
                     country={selectedCountry}
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

        <ScrollView>
          {
            _.map(countries, (country, i) => <CountryTile key={i} country={country}
                                                          isActive={i === activeCountry}
                                                          onCountrySelect={() => this._onCountrySelect(i)}/>)
          }
        </ScrollView>

      </View>
    )
  }
}

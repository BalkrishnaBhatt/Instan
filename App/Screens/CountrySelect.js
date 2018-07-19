import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native'
import _ from 'underscore'

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/CountrySelect'

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
      ]

    }
  }

  render () {

    let {countries, isShowingText} = this.state

    return (
      <View style={styles.view}>
        <View style={{flex: 0.12, padding: 5}}>
          <TouchableOpacity style={styles.touchable} >
            <Icon name={'chevron-thin-left'} style={styles.btn} size={20}/>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.10}}>
          <Text style={styles.txt}>
            Currently Selected
          </Text>
        </View>

        <View style={styles.flag}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingLeft: 20}}>
              <Image source={{uri: 'https://cdn.countryflags.com/thumbs/canada/flag-3d-round-250.png'}}
                     style={styles.img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Text style={styles.txtInput}>
                Canada
              </Text>
            </TouchableOpacity>
          </View>

          <Icon name={'circle'} style={styles.btn} size={20}/>

        </View>

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
          _.map(countries, (country, i) =>
            <View style={styles.flag1} key={i}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{paddingLeft: 20}} >
                  <Image source={{uri: country.flag}}
                         style={styles.img}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                  <Text style={styles.txtInput}>
                    {country.name}
                  </Text>
                </TouchableOpacity>
              </View>

              <Icon name={'circle'} style={styles.btn} size={20}/>
            </View>)
        }

      </View>
    )
  }
}

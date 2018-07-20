import { StyleSheet, Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    height: height,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff'
  },
  img: {
    height: 60,
    width: 219
  },
  txt: {
    color: '#2c2c2c'
  }
})

import { StyleSheet, Dimensions } from 'react-native'

let {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: 60,
    width: width - 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img32: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  img40: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  countryCode: {
    color: '#181818',
    padding: 5,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Helvetica NeueLTPro_Th'
  },
  txtInput: {
    color: '#181818',
    fontFamily: 'Helvetica NeueLTPro_Th',
    fontSize: 18,
    width: '80%'
  },
})

import { StyleSheet, Dimensions } from 'react-native'

let {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    padding: 20
  },
  back: {
    flex: 0.1,
    paddingTop: 17,
    paddingBottom: 5,
  },
  txt: {
    color: '#181818',
    fontFamily: 'Helvetica NeueLTPro_Th',
    fontSize: 20,
  },
  txtInput: {
    width: '100%',
    fontSize: 16,
    justifyContent: 'center',
    color: '#181818',
    fontFamily: 'Helvetica NeueLTPro_Th'
  },
  abc: {}
})

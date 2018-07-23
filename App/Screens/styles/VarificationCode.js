import { StyleSheet, Dimensions } from 'react-native'

let {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  back: {
    flex: 0.07,
    paddingTop: 17,
    paddingBottom: 5,
  },
  txt: {
    color: '#181818',
    fontFamily: 'Helvetica NeueLTPro_Th',
    fontSize: 20,
  },
  count: {
    fontSize: 14,
    color: '#181818',
    fontFamily: 'Helvetica NeueLTPro_Th',
    justifyContent: 'center',
    paddingTop: 10
  },
  next: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#828282',
    margin: 3
  }
})

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  back: {
    height: 18,
    width: 18,
  },
  touchable: {
    top: 20,
    left: 15,
  },
  btn: {
    paddingRight: 30
  },
  txt: {
    fontFamily: 'Helvetica NeueLTPro_Th',
    color: '#181818',
    fontSize: 20,
    paddingLeft: 20,
    padding:5,
  },
  flag: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img40: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 16
  },

  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },

  txtInput: {
    color: '#181818',
    alignItems: 'center',
    fontFamily: 'Helvetica NeueLTPro_Th',
    fontSize: 18,
    width: '100%'
  },
})

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff'
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
    fontSize: 22,
    paddingLeft: 20,
    padding: 5
  },
  flag: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
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

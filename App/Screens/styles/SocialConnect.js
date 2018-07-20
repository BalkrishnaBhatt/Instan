import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
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
    padding: 10
  },
  fbImage: {
    height: 30,
    width: 30,
    marginLeft: 5
  },
  fbtxt: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 70
  },
  socialTile: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    marginTop: 5,
    marginBottom: 5
  },
  socialTextContainer: {
    flexDirection: 'row',
    width: width - 90,
    justifyContent: 'center'
  },
  fb: {
    alignItems: 'center',
    borderRadius: 20,
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#3b5998',
  },
  google: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#4885ed',
  },

})

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  back: {
    flex: 0.1,
    padding: 20,
    paddingTop: 17,
    paddingBottom: 5,
  },
  txt: {
    color: '#181818',
    fontFamily: 'Helvetica NeueLTPro_Th',
    fontSize: 20,
    paddingLeft: 20,
    padding: 10
  },
  fbImage: {
    height: 30,
    width: 30,
    marginLeft:10
  },
  fbtxt: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:70
  },
  fbview: {
    paddingTop:10,
    alignItems:'center',
  },
  fb: {
    height: 40,
    alignItems:'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#3b5998',
  },
  google: {
    height: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'space-between',
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#4885ed',
  },

})

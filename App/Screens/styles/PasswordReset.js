import { StyleSheet, Dimensions } from 'react-native'

let {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
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
  abc: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,

  },
  alertTitle: {
    color:'#181818',
    fontFamily:'Helvetica NeueLTPro_Lt',
    fontSize:24,
    left:15,
    top:15
  },
  alerttxt:{
    color:'#5c5c5c',
    paddingTop:20,
    fontFamily: 'Helvetica NeueLTPro_Th',
    fontSize:16,
    paddingLeft:15
  },
  resend:{
    color: '#181818',
    fontFamily:'Helvetica NeueLTPro_Lt',
    backgroundColor:'#fff',
    height:'70%',
    width:'40%',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#5c5c5c'
  },
  done:{
    color: '#fff',
    fontFamily:'Helvetica NeueLTPro_Lt',
    backgroundColor:'#181818',
    height:'70%',
    width:'40%',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#181818'
  }
})

import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import OpenScreen from '../Screens/OpenScreen'
import styles from './Styles/NavigationStyles'
import StartPage from '../Screens/StartPage'
import CountrySelect from '../Screens/CountrySelect'
import SocialConnect from '../Screens/SocialConnect'
import VarificationCode from '../Screens/VarificationCode'

const PrimaryNav = StackNavigator({
  LaunchScreen: {screen: StartPage},
  SocialConnect: {screen: SocialConnect},
  VarificationCode:{screen:VarificationCode}

}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import OpenScreen from '../Screens/OpenScreen'
import styles from './Styles/NavigationStyles'
import StartPage from '../Screens/StartPage'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {screen: StartPage}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import OpenScreen from '../Screens/OpenScreen'
import styles from './Styles/NavigationStyles'
import StartPage from '../Screens/StartPage'
import CountrySelect from '../Screens/CountrySelect'

const PrimaryNav = StackNavigator({
  LaunchScreen: {screen: StartPage}
}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

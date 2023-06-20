import {
  StyleSheet, View,
} from 'react-native';
import WaterDrink from './src/screens/dashboard/WaterDrink';
import Account from './src/screens/profile/Account';
import CreateProfile from './src/screens/profile/CreateProfile';
import Notification from './src/screens/dashboard/Notification';
import Profile from './src/screens/dashboard/Profile';
function App() {
  return (
    <View style={{ flex: 1 }}>
      <Account />
      {/* <Notification/> */}
    </View>
  );
}
export default App;


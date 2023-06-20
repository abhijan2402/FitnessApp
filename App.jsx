import {
  StyleSheet, View,
} from 'react-native';
import CreateProfile from './src/screens/profile/CreateProfile';
import Goal from './src/screens/auth/Goal';
import FinalAuth from './src/screens/auth/FinalAuth';
import WaterDrink from './src/screens/DashBoard/WaterDrink';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <WaterDrink />
    </View>
  );
}
export default App;


import {
  StyleSheet, View,
} from 'react-native';
import WaterDrink from './src/screens/dashboard/WaterDrink';
import DietDetails from './src/screens/meal/DietDetails';
function App() {
  return (
    <View style={{ flex: 1 }}>
      <DietDetails/>
    </View>
  );
}
export default App;


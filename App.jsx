import {
  StyleSheet, View,
} from 'react-native';
import Dashboard from './src/screens/dashboard/Dashboard';
import ActivityTracker from './src/screens/dashboard/ActivityTracker';
import MealHome from './src/screens/mealplanner/MealHome';
function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <ActivityTracker/> */}
      <MealHome />
    </View>
  );
}
export default App;


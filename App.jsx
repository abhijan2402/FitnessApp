import {
  StyleSheet, View,
} from 'react-native';
import Dashboard from './src/screens/dashboard/Dashboard';
import ActivityTracker from './src/screens/dashboard/ActivityTracker';
import MealHome from './src/screens/mealplanner/MealHome';
import MealScheduler from './src/screens/Meal/MealScheduler';
function App() {
  return (
    <View style={{ flex: 1 }}>
      <MealScheduler/>
    </View>
  );
}
export default App;


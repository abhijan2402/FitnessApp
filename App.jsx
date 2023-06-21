import {
  StyleSheet, View,
} from 'react-native';

import Dashboard from './src/screens/dashboard/Dashboard';
import ActivityTracker from './src/screens/dashboard/ActivityTracker';
import MealHome from './src/screens/mealplanner/MealHome';
import MealScheduler from './src/screens/Meal/MealScheduler';
import SleepScheduler from './src/screens/Sleep/SleepScheduler';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <SleepScheduler />
    </View>
  );
}
export default App;


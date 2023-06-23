import {
  StyleSheet, View,
} from 'react-native';
import ProgressPhoto from './src/screens/progressTracker/ProgressPhoto';
import Comparison from './src/screens/progressTracker/Comparison';
import CreateProfile from './src/screens/profile/CreateProfile';
import Reminders from './src/screens/Sleep/Reminders';
import DietDetails from './src/screens/meal/DietDetails';
import WorkoutTracker from './src/components/workout/WorkoutTracker';
import FullBodyWorkout from './src/components/workout/FullBodyWorkout';
import WorkoutDetails from './src/components/workout/WorkoutDetails';
import Dashboard from './src/screens/dashboard/Dashboard';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <WorkoutDetails/>
    </View>
  );
}
export default App;


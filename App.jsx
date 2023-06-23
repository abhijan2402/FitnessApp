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

function App() {
  return (
    <View style={{ flex: 1 }}>
      <FullBodyWorkout/>
    </View>
  );
}
export default App;


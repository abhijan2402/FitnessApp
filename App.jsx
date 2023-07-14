import {
  StyleSheet, View,
} from 'react-native';
import ProgressPhoto from './src/screens/progressTracker/ProgressPhoto';
import Comparison from './src/screens/progressTracker/Comparison';
import CreateProfile from './src/screens/profile/CreateProfile';
import Reminders from './src/screens/Sleep/Reminders';
import WorkoutTracker from './src/components/workout/WorkoutTracker';
import FullBodyWorkout from './src/components/workout/FullBodyWorkout';
import WorkoutDetails from './src/components/workout/WorkoutDetails';
import BottomTab from './src/Navigators/BottomTab'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ActivityTracker from './src/screens/dashboard/ActivityTracker';
import WorkOutHome from './src/screens/workoutTracker/WorkOutHome';
import WorkOutInfo from './src/screens/workoutTracker/WordOutInfo';
import AddSchedule from './src/screens/workoutTracker/AddSchedule';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      {/* <ActivityTracker /> */}
      <WorkOutInfo />
     
    </View>
    //   <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{
    //       headerShown:false
    //     }}>
    //    <Stack.Screen name='BottomTab'  component={BottomTab}/>    
    //   </Stack.Navigator>

    // </NavigationContainer>
  );
}
export default App;


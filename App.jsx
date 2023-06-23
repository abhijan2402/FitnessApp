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
import Dashboard from './src/screens/dashboard/Dashboard';
import BottomTab from './src/Navigators/BottomTab'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <FullBodyWorkout/>
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


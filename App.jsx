import BottomTab from './src/Navigators/BottomTab'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/auth/Register';
import CreateProfile from './src/screens/profile/CreateProfile';
import Goal from './src/screens/auth/Goal';
import Otp from './src/screens/auth/Otp';
import { StatusBar } from 'react-native';
import FinalAuth from './src/screens/auth/FinalAuth';
import AuthStack from './src/Navigators/Stacks/AuthStack';
import DashboardStack from './src/Navigators/Stacks/DashboardStack';
import Dashboard from './src/screens/dashboard/Dashboard';
import Notification from './src/screens/dashboard/Notification';
import ActivityTracker from './src/screens/dashboard/ActivityTracker';
import EditProfile from './src/screens/profile/EditProfile';
import FinishWO from './src/screens/dashboard/FinishWO';
import WaterDrink from './src/screens/dashboard/WaterDrink';
import Subscription from './src/screens/dashboard/Subscription';
import WorkOutHome from './src/screens/workoutTracker/WorkOutHome';
import WorkOutInfo from './src/screens/workoutTracker/WordOutInfo';
import AddSchedule from './src/screens/workoutTracker/AddSchedule';
import WorkoutSchedule from './src/screens/workoutTracker/WorkoutSchedult';
import WorkoutDetails from './src/components/workout/WorkoutDetails';
import MealHome from './src/screens/meal/MealHome';
import MealScheduler from './src/screens/meal/MealScheduler';
import DietDetails from './src/screens/meal/DietDetails';
import SleepTracker from './src/screens/Sleep/SleepTracker';
import SleepScheduler from './src/screens/Sleep/SleepScheduler';
import Reminders from './src/screens/Sleep/Reminders';
import ProgressPhoto from './src/screens/progressTracker/ProgressPhoto';
import Comparison from './src/screens/progressTracker/Comparison';
import Result from './src/screens/progressTracker/Result';
import { SCREENS } from './src/constants/Screens';
import WeightProgress from './src/screens/progressTracker/WeightProgress';
import AddProgress from './src/screens/progressTracker/AddProgress';

function App() {
    const Stack = createNativeStackNavigator();
    return (
     
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown:false
          }}>
        <Stack.Screen name={SCREENS.BOTTOMTAB}  component={BottomTab}/>    
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default App;


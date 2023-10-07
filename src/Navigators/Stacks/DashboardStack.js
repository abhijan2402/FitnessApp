import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../screens/DashBoard/Dashboard';
// import EditProfile from '../../screens/dashboard/Notification';
import ActivityTracker from '../../screens/DashBoard/ActivityTracker';
// import Profile from '../../screens/dashboard/Profile';
import Account from '../../screens/profile/Account';
import FinishWO from '../../screens/DashBoard/FinishWO';
import WaterDrink from '../../screens/DashBoard/WaterDrink';
import Subscription from '../../screens/DashBoard/Subscription';
import Notification from '../../screens/DashBoard/Notification';
import { SCREENS } from '../../constants/Screens';
import SleepStack from './SleepSchedule';
import WorkoutStack from './WorkoutStack';
import MealStack from './MealStack';
import ProgressStack from './ProgressStask';
import MainCalorie from '../../screens/Calories/MainCalorie';
import MealScheduler from '../../screens/Meal/MealScheduler';
import DietDetails from '../../screens/Meal/DietDetails';
import FlnishMeal from '../../screens/Meal/FInishMeal';
import MealHome from '../../screens/Meal/MealHome';
import StepTracker from '../../screens/DashBoard/StepTracker';

const Stack = createNativeStackNavigator();

function DashboardStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification} />
            <Stack.Screen name={SCREENS.ACTIVITYTRACKER} component={ActivityTracker} />
            <Stack.Screen name={SCREENS.FINISHWO} component={FinishWO} />
            <Stack.Screen name={SCREENS.WATERDRINK} component={WaterDrink} />
            <Stack.Screen name={SCREENS.SUBSCRIPTION} component={Subscription} />
            <Stack.Screen name={SCREENS.SLEEPSTACK} component={SleepStack} />
            <Stack.Screen name={SCREENS.WORKOUTSTACK} component={WorkoutStack} />
            <Stack.Screen name={SCREENS.MEALSTACK} component={MealStack} />
            <Stack.Screen name={SCREENS.PROGRESSTACK} component={ProgressStack} />
            <Stack.Screen name={SCREENS.MAINCALORIE} component={MainCalorie} />
            <Stack.Screen name={SCREENS.MEALSCHEDULER} component={MealScheduler} />
            <Stack.Screen name={SCREENS.DIETDETAILS} component={DietDetails} />
            <Stack.Screen name={SCREENS.MEALFINAL} component={FlnishMeal} />
            <Stack.Screen name={SCREENS.MEALHOME} component={MealHome} />
            <Stack.Screen name={SCREENS.STEP_TRACKER} component={StepTracker} />






        </Stack.Navigator>
    );
}
export default DashboardStack;
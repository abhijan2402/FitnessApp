import { createNativeStackNavigator } from '@react-navigation/native-stack';
import dashboard from '../../screens/DashBoard/Dashboard';
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

const Stack = createNativeStackNavigator();

function DashboardStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.DASHBOARD} component={dashboard} />
            <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification} />
            <Stack.Screen name={SCREENS.ACTIVITYTRACKER} component={ActivityTracker} />
            <Stack.Screen name={SCREENS.FINISHWO} component={FinishWO} />
            <Stack.Screen name={SCREENS.WATERDRINK} component={WaterDrink} />
            <Stack.Screen name={SCREENS.SUBSCRIPTION} component={Subscription} />
            <Stack.Screen name={SCREENS.SLEEPSTACK} component={SleepStack} />
            <Stack.Screen name={SCREENS.WORKOUTSTACK} component={WorkoutStack} />
            <Stack.Screen name={SCREENS.MEALSTACK} component={MealStack} />
            <Stack.Screen name={SCREENS.PROGRESSTACK} component={ProgressStack} />

        </Stack.Navigator>
    );
}
export default DashboardStack;
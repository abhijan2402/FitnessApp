import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../screens/dashBoard/Dashboard';
import EditProfile from '../../screens/dashBoard/Notification';
import ActivityTracker from '../../screens/dashBoard/ActivityTracker';
// import Profile from '../../screens/dashBoard/Profile';
import Account from '../../screens/profile/Account';
import FinishWO from '../../screens/dashBoard/FinishWO';
import WaterDrink from '../../screens/dashBoard/WaterDrink';
import Subscription from '../../screens/dashBoard/Subscription';
import Notification from '../../screens/dashBoard/Notification';
import { SCREENS } from '../../constants/Screens';
import SleepStack from './SleepSchedule';
import WorkoutStack from './WorkoutStack';

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


        </Stack.Navigator>
    );
}
export default DashboardStack;
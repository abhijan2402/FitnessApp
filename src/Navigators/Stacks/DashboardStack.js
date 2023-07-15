import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../screens/dashboard/Dashboard';
import EditProfile from '../../screens/dashboard/Notification';
import ActivityTracker from '../../screens/dashboard/ActivityTracker';
import Profile from '../../screens/dashboard/Profile';
import Account from '../../screens/profile/Account';
import FinishWO from '../../screens/dashboard/FinishWO';
import WaterDrink from '../../screens/dashboard/WaterDrink';
import Subscription from '../../screens/dashboard/Subscription';
import Notification from '../../screens/dashboard/Notification';
import { SCREENS } from '../../constants/Screens';
import SleepStack from './SleepSchedule';

const Stack = createNativeStackNavigator();

function DashboardStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
            }}>
            <Stack.Screen name={SCREENS.DASHBOARD} component={Dashboard}/>     
            <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification}/>     
            <Stack.Screen name={SCREENS.ACTIVITYTRACKER}  component={ActivityTracker}/>  
            <Stack.Screen name={SCREENS.FINISHWO}  component={FinishWO}/> 
            <Stack.Screen name={SCREENS.WATERDRINK}  component={WaterDrink}/> 
            <Stack.Screen name={SCREENS.SUBSCRIPTION}  component={Subscription}/> 
            <Stack.Screen name={SCREENS.SLEEPSTACK}  component={SleepStack}/> 

           
        </Stack.Navigator>
    );
}
export default DashboardStack;
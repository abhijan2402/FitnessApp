import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SleepTracker from '../../screens/Sleep/SleepTracker';
import SleepScheduler from '../../screens/Sleep/SleepScheduler';
import Reminders from '../../screens/Sleep/Reminders';
import { SCREENS } from '../../constants/Screens';

const Stack = createNativeStackNavigator();

function SleepStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
            }}>
            <Stack.Screen name={SCREENS.SLEEPTRACKER}  component={SleepTracker}/>     
            <Stack.Screen name={SCREENS.SLEEPSCHEDULER} component={SleepScheduler}/>     
            <Stack.Screen name={SCREENS.REMINDERS} component={Reminders}/> 
        </Stack.Navigator>
    );
}
export default SleepStack;
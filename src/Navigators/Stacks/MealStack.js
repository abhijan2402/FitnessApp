import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealHome from '../../screens/meal/MealHome';
import MealScheduler from '../../screens/meal/MealScheduler';
import DietDetails from '../../screens/meal/DietDetails';
import { SCREENS } from '../../constants/Screens';
import FinalMealScreen from '../../screens/meal/FinalMealScreen';
import DashboardStack from './DashboardStack';
import FinishWO from '../../screens/dashboard/FinishWO';

const Stack = createNativeStackNavigator();

function MealStack() {
    return (
        <Stack.Navigator initialRouteName={SCREENS.MEALHOME} screenOptions={{
            headerShown: false
        }}>

            <Stack.Screen name={SCREENS.MEALHOME} component={MealHome} />
            <Stack.Screen name={SCREENS.MEALSCHEDULER} component={MealScheduler} />
            <Stack.Screen name={SCREENS.DIETDETAILS} component={DietDetails} />
            <Stack.Screen name={SCREENS.FINISHWO} component={FinalMealScreen} />
            <Stack.Screen name={SCREENS.DASHBOARDSTACK} component={DashboardStack} />
        </Stack.Navigator>
    );
}
export default MealStack;
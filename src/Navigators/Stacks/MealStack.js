import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealHome from '../../screens/Meal/MealHome';
import MealScheduler from '../../screens/Meal/MealScheduler';
import DietDetails from '../../screens/Meal/DietDetails';
import FinishWO from '../../screens/dashboard/FinishWO';
import { SCREENS } from '../../constants/Screens';

const Stack = createNativeStackNavigator();

function MealStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
            }}>
            <Stack.Screen name={SCREENS.MEALHOME}  component={MealHome}/>     
            <Stack.Screen name={SCREENS.MEALSCHEDULER} component={MealScheduler}/>     
            <Stack.Screen name={SCREENS.DIETDETAILS} component={DietDetails}/>     
            <Stack.Screen name={SCREENS.FINISHWO} component={FinishWO}/>     
        </Stack.Navigator>
    );
}
export default MealStack;
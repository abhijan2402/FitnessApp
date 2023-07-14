import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgressPhoto from '../../screens/progressTracker/ProgressPhoto';
import Comparison from '../../screens/progressTracker/Comparison';
import Result from '../../screens/progressTracker/Result';
import { SCREENS } from '../../constants/Screens';

const Stack = createNativeStackNavigator();

function ProgressStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
            }}>
            <Stack.Screen name={SCREENS.PROGRESSPHOTO} component={ProgressPhoto}/>    
            <Stack.Screen name={SCREENS.COMPARISION} component={Comparison}/>    
            <Stack.Screen name={SCREENS.RESULT} component={Result}/>    
        </Stack.Navigator>
    );
}
export default ProgressStack;


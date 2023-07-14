import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../screens/auth/Register';
import CreateProfile from '../../screens/profile/CreateProfile';
import Goal from '../../screens/auth/Goal';
import Otp from '../../screens/auth/Otp';
import FinalAuth from '../../screens/auth/FinalAuth';
import { SCREENS } from '../../constants/Screens';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
            }}>
            <Stack.Screen name={SCREENS.OTP}  component={Otp}/>    
            <Stack.Screen name={SCREENS.REGISTER}  component={Register}/>    
            <Stack.Screen name={SCREENS.CREATEPROFILE}  component={CreateProfile}/>    
            <Stack.Screen name={SCREENS.GOAL} component={Goal}/>    
            <Stack.Screen name={SCREENS.FINALAUTH} component={FinalAuth}/>    
        </Stack.Navigator>
    );
}
export default AuthStack;


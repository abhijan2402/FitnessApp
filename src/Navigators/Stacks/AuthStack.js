import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../screens/auth/Register';
import CreateProfile from '../../screens/profile/CreateProfile';
import Goal from '../../screens/auth/Goal';
import Otp from '../../screens/auth/Otp';
import FinalAuth from '../../screens/auth/FinalAuth';
import { SCREENS } from '../../constants/Screens';
import RegisterOTP from '../../screens/auth/RegisterOTP';
import { useState } from 'react';
import Login from '../../screens/auth/Login';
import ForgotPass from '../../screens/auth/ForgotPass';

const Stack = createNativeStackNavigator();
//register -> name,mobile,password
// createProfile -> gender,dob,weight,height
function AuthStack() {
    const [user, setUser] = useState({ first_name: '', last_name: '', otp: '', hash: '', phone: '', email: '', password: '', gender: '', dob: '', weight: '', height: '', goal: '' })
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.LOGIN}>
                {() => <Login user={user} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name={SCREENS.REGISTEROTP}>
                {() => <RegisterOTP user={user} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name={SCREENS.CREATEPROFILE}>
                {() => <CreateProfile user={user} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name={SCREENS.REGISTER}>
                {() => <Register user={user} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name={SCREENS.GOAL}>
                {() => <Goal user={user} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name={SCREENS.FORGOPASS}>
                {() => <ForgotPass user={user} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name={SCREENS.OTP} component={Otp} />
            <Stack.Screen name={SCREENS.FINALAUTH} component={FinalAuth} />
        </Stack.Navigator>
    );
}
export default AuthStack;


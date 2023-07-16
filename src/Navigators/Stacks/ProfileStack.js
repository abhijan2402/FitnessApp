import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../../screens/profile/Account';
import { SCREENS } from '../../constants/Screens';
import EditProfile from '../../screens/profile/EditProfile';
import Profile from '../../screens/dashboard/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName={SCREENS.PROFILE} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
            <Stack.Screen name={SCREENS.ACCOUNT} component={Account} />
            <Stack.Screen name={SCREENS.EDITPROFILE} component={EditProfile} />
        </Stack.Navigator>
    );
}
export default ProfileStack;
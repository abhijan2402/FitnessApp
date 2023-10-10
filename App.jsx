import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/Navigators/BottomTab';
import AuthStack from './src/Navigators/Stacks/AuthStack';
import {SCREENS} from './src/constants/Screens';
import {createContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {getDataFromAsyncStorage} from './src/utils/common';
import {storageKeyName} from './src/constants/Data';
import {getUser} from './src/backend/utilFunctions';
import SIgnin from './src/screens/newauth/SIgnin';
import ProfileImage from './src/screens/newauth/ProfileImage';
import SelectGender from './src/screens/newauth/SelectGender';
import Weight from './src/screens/newauth/Weight';
import GoalWeight from './src/screens/newauth/GoalWeight';
import Height from './src/screens/newauth/Height';
import Heights from './src/screens/newauth/Height';
import NewGoal from './src/screens/newauth/NewGoal';
import FinalGoalMain from './src/screens/newauth/FinalGoalMain';
import FoodDiskike from './src/screens/newauth/FoodDiskike';
import FoodAllergy from './src/screens/newauth/FoodAllergy';
import MedicalHistory from './src/screens/newauth/MedicalHistory';
import Supplement from './src/screens/newauth/Supplement';
import SupplementMain from './src/screens/newauth/Supplement';
import SkipMealPage from './src/screens/newauth/SkipMealPage';
import FoodFrequency from './src/screens/newauth/FoodFrequency';
import OfficeTiming from './src/screens/newauth/OfficeTiming';
import Occupation from './src/screens/newauth/Occupation';
import Location from './src/screens/newauth/Location';

export const GlobalContext = createContext();

const Stack = createNativeStackNavigator();
function App() {
  const [user, setUser] = useState(null);
  const [autoLoginInProgress, setAutoLoginInProgress] = useState(true);
  async function checkForAutoLogin() {
    const jwtToken = await getDataFromAsyncStorage(storageKeyName);
    if (jwtToken === null) {
      setAutoLoginInProgress(false);
      return;
    }
    getUser()
      .then(res => setUser(res.user))
      .catch(err => console.log(err))
      .finally(() => setAutoLoginInProgress(false));
  }
  useEffect(() => {
    checkForAutoLogin();
  }, []);
  if (autoLoginInProgress)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'purple'} size={'large'} />
      </View>
    );
  return (
    <GlobalContext.Provider
      value={{
        user: user,
        setLoggedInUser: userObj => setUser(userObj),
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!user ? (
            <Stack.Screen name={SCREENS.BOTTOMTAB} component={BottomTab} />
          ) : (
            // <Stack.Screen name={SCREENS.AUTHSTACK} component={AuthStack} />
            <Stack.Screen name={SCREENS.HEIGHT} component={Height} />
          )}
        </Stack.Navigator>
        {/* <Weight /> */}
      </NavigationContainer>
    </GlobalContext.Provider>
    // <SIgnin />
    // <ProfileImage />
    // <SelectGender />
    // <GoalWeight />
    // <Weight />
    // <Height />
    // <NewGoal />
    // <FinalGoalMain />
    // <FoodDiskike />
    // <FoodAllergy />
    // <MedicalHistory />
    // <SupplementMain />
    // <SkipMealPage />
    // <FoodFrequency />
    // <OfficeTiming />
    // <Occupation/>
    // <Location />
  );
}
export default App;

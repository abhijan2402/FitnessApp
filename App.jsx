import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './src/Navigators/BottomTab'
import AuthStack from './src/Navigators/Stacks/AuthStack';
import { SCREENS } from './src/constants/Screens';
import { createContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getDataFromAsyncStorage } from './src/utils/common';
import { storageKeyName } from './src/constants/Data';
import { getUser } from './src/backend/utilFunctions';
import SIgnin from './src/screens/newauth/SIgnin';
import ProfileImage from './src/screens/newauth/ProfileImage';
import Welcome from './src/screens/newauth/Welcome';

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
      .finally(() => setAutoLoginInProgress(false))
  }
  useEffect(() => {
    checkForAutoLogin()
  }, [])
  if (autoLoginInProgress)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'purple'} size={'large'} />
      </View>
    )
  return (
    // <GlobalContext.Provider value={{
    //   user: user,
    //   setLoggedInUser: (userObj) => setUser(userObj),
    // }}>
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{
    //       headerShown: false
    //     }}>
    //       {
    //         user ?
    //           <Stack.Screen name={SCREENS.BOTTOMTAB} component={BottomTab} /> :
    //           <Stack.Screen name={SCREENS.AUTHSTACK} component={AuthStack} />
    //       }
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </GlobalContext.Provider>
    <SIgnin />
    // <ProfileImage />
    // <Welcome />

  );
}
export default App;


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './src/Navigators/BottomTab'
import AuthStack from './src/Navigators/Stacks/AuthStack';
import { SCREENS } from './src/constants/Screens';
import { createContext, useState } from 'react';

export const GlobalContext=createContext();

const Stack = createNativeStackNavigator();
function App() {
    const [user,setUser]=useState(null);
    return (
      <GlobalContext.Provider value={{
        user:user,
        setLoggedInUser:(userObj)=>setUser(userObj)
      }}>
         <NavigationContainer>
          <Stack.Navigator  screenOptions={{
              headerShown:false
            }}>
              {
                // user ?
                <Stack.Screen name={SCREENS.BOTTOMTAB}  component={BottomTab}/>    
                // <Stack.Screen name={SCREENS.AUTHSTACK}  component={AuthStack}/>    
              }
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContext.Provider>
    );
}
export default App;


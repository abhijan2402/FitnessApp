import {
  StyleSheet, View,
} from 'react-native';
import CreateProfile from './src/screens/profile/CreateProfile';
import Goal from './src/screens/auth/Goal';
import FinalAuth from './src/screens/auth/FinalAuth';
import Dashboard from './src/screens/dashboard/Dashboard';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Dashboard/>      
    </View>
  );
}
export default App;


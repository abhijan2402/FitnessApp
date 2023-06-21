import {
  StyleSheet, View,
} from 'react-native';
import Dashboard from './src/screens/dashboard/Dashboard';
import ActivityTracker from './src/screens/dashboard/ActivityTracker';
function App() {
  return (
    <View style={{ flex: 1 }}>
      <ActivityTracker/>
    </View>
  );
}
export default App;


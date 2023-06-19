import {
  StyleSheet, View,
} from 'react-native';
import CreateProfile from './src/screens/profile/CreateProfile';
import Goal from './src/screens/auth/Goal';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Goal />
    </View>
  );
}
export default App;


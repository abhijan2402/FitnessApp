import {
  StyleSheet, View,
} from 'react-native';
import ProgressPhoto from './src/screens/progressTracker/ProgressPhoto';
import Comparison from './src/screens/progressTracker/Comparison';
import CreateProfile from './src/screens/profile/CreateProfile';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Comparison/>
    </View>
  );
}
export default App;


import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Goal from './src/screens/auth/Goal';
import { useEffect } from 'react';

function App() {
    return (
      <View style={styles.container}>
        <Goal/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
});

export default App;


import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
} from 'react-native';
import GoalTopHeader from '../../components/auth/GoalTopHeader';
import AuthButton from '../../components/auth/AuthButton';
import GoalSlider from '../../components/auth/GoalSlider';
const { width, height } = Dimensions.get('window');


export default function Goal() {

  return (
    <View style={styles.container}>
      <GoalTopHeader/>
      <GoalSlider/>
      {/* <AuthButton/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
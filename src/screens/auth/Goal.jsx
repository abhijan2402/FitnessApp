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
import GoalSlider from '../../components/auth/GoalSlider';
import Heading from '../../components/Text/Heading';
import PrimaryButton from '../../components/Button/PrimaryButton';

const { width, height } = Dimensions.get('window');
export default function Goal() {

  return (
    <View style={styles.container}>
      <Heading heading={'What is your goal ?'} subheading={'It will help us to choose a best program for you'}/>
      <GoalSlider/>
      <PrimaryButton containerStyle={{width:width-40}} title={'Confirm'} onPress={()=>console.log('Hello')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:"white"
  }
});
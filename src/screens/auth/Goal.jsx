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
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/Screens';

const { width, height } = Dimensions.get('window');
export default function Goal({user,setUser}) {
  const navigation=useNavigation();
  function onRegister(){
    
    navigation.navigate(SCREENS.FINALAUTH)
  }
  return (
    <View style={styles.container}>
      <Heading heading={'What is your goal ?'} subheading={'It will help us to choose a best program for you'}/>
      <GoalSlider/>
      <PrimaryButton onPress={()=>onRegister()} containerStyle={{width:width-40}} title={'Confirm'}/>
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
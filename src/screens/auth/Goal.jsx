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
import { registerUser } from '../../backend/utilFunctions';
import CustomToast from '../../components/common/Toast';
import { useState } from 'react';
import { useRef } from 'react';
import { ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function Goal({user,setUser}) {
  const navigation=useNavigation();
  const [loading,setLoading]=useState(false)
  const childRef = useRef(null);
  const [toastColorState, setToastColorState] = useState('');
  const [toastTextColorState, setToastTextColorState] = useState('white');
  const [toastMessage, setToastMessage] = useState('');

  function onRegister(){
    setLoading(true)  
    registerUser(user)
    .then(res=>{
      navigation.navigate(SCREENS.LOGIN)
    })
    .catch(err=>{
      setToastMessage(err.message);
      setToastTextColorState("white");
      setToastColorState("red");
      console.log(err)
      console.log(user)
      childRef.current.showToast()
    }).finally(()=>setLoading(false))
  }
  return (
    <View style={styles.container}>
      <CustomToast
        toastColor={toastColorState}
        toastTextColor={toastTextColorState}
        toastMessage={toastMessage}
        ref={childRef}
      />
      <Heading heading={'What is your goal ?'} subheading={'It will help us to choose a best program for you'}/>
      <GoalSlider/>
      {
        loading?
        <ActivityIndicator size={30} color="blue" />:
        <PrimaryButton onPress={()=>onRegister()} containerStyle={{width:width-40}} title={'Register'}/>
      }
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
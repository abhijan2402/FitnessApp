import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SlideHeader from '../../components/header/SlideHeader';
import Step from '../../components/new-auth/Step';
import NewButtob from '../../components/Button/NewButtob';
import { TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { SCREENS } from '../../constants/Screens';
import { useRoute } from '@react-navigation/native';
import { useRef } from 'react';
import CustomToast from '../../components/common/Toast';

const { width } = Dimensions.get('window');

const Email = ({ navigation }) => {
  const route = useRoute();
  const data = route.params?.data;
  const [email, setEmail] = useState('')
  const childRef = useRef(null);
  const [toastColorState, setToastColorState] = useState('');
  const [toastTextColorState, setToastTextColorState] = useState('white');
  const [toastMessage, setToastMessage] = useState('');

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const handlePress = () => {
    if (email.length < 1) {
      setToastMessage('Email is required');
      setToastTextColorState('white');
      setToastColorState('red');
      childRef.current.showToast();
      return
    }

    if (!validateEmail(email)) {
      setToastMessage('Enter a valid email');
      setToastTextColorState('white');
      setToastColorState('red');
      childRef.current.showToast();
      return
    }

    navigation.navigate(SCREENS.NPASSWORD, { data: { ...data, email } })
  }



  return (
    <View style={styles.container}>
      <CustomToast
        toastColor={toastColorState}
        toastTextColor={toastTextColorState}
        toastMessage={toastMessage}
        ref={childRef}
      />
      <SlideHeader />
      <Step text="STEP 3/12" />
      <Text style={styles.heading}>Enter your Email Id</Text>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)} style={styles.input} />
      </View>
      <View
        style={{
          marginTop: 150,
          position: 'absolute',
          bottom: 40,
          width,
          alignItems: 'center',
        }}>
        <NewButtob onPress={handlePress} title={'Continue'} />
      </View>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    flex: 1,
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: '#fff',
    width: 283,
    marginTop: 30,
    elevation: 20,
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  input: {
    height: '100%',

    color: '#7265E3',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
    width: '100%',
    textTransform: 'lowercase',
  },

  heading: {
    color: '#2D3142',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    width: 281,
  },
});

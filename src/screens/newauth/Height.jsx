import React, {useState} from 'react';
import SlideHeader from '../../components/header/SlideHeader';
import TextH4 from '../../components/Text/TextH4';
import NewButtob from '../../components/Button/NewButtob';
import {Image} from 'react-native';
import SmallText from '../../components/Text/SmallText';
import Height from '../../../assets/images/height.svg';
import Input from '../../components/Form/Input';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SCREENS} from '../../constants/Screens';
import {useRoute} from '@react-navigation/native';
import CustomToast from '../../components/common/Toast';
import { useRef } from 'react';

const Heights = ({navigation}) => {
  const route = useRoute();
  const values = route.params?.values;
  const [lbs, setlbs] = useState(true);
  const [kg, setkg] = useState(false);
  const [heightVal, setheightVal] = useState('');
  const childRef = useRef(null);
  const [toastColorState, setToastColorState] = useState('');
  const [toastTextColorState, setToastTextColorState] = useState('white');
  const [toastMessage, setToastMessage] = useState('');


  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <CustomToast
        toastColor={toastColorState}
        toastTextColor={toastTextColorState}
        toastMessage={toastMessage}
        ref={childRef}
      />
      <SlideHeader />
      <Height
        width={170}
        height={189}
        style={{alignSelf: 'center', marginVertical: 20}}
      />
      <View style={styles.ProfileView}>
        <TextH4 style={{marginTop: '20%'}}>What is your Height?</TextH4>
        <View style={styles.InnerMain}>
          <TouchableOpacity
            onPress={() => {
              setlbs(true);
              setkg(false);
            }}
            style={[
              styles.InnerMainView,
              {backgroundColor: lbs ? '#8C80F8' : 'white'},
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: lbs ? 'white' : 'black',
                fontWeight: '500',
              }}>
              CM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setlbs(false);
              setkg(true);
            }}
            style={[
              styles.InnerMainView,
              {backgroundColor: kg ? '#8C80F8' : 'white'},
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: kg ? 'white' : 'black',
                fontWeight: '500',
              }}>
              FT
            </Text>
          </TouchableOpacity>
        </View>
        <Input
          placeholder={'Height'}
          onChangeText={value => setheightVal(value)}
          customStyle={{width: '60%', marginVertical: 15}}
          keyboardType="numeric"
        />

        <NewButtob
          title={'Continue'}
          onPress={() => {
            if(heightVal.length < 1) {
              setToastMessage('Height is required');
              setToastTextColorState('white');
              setToastColorState('red');
              childRef.current.showToast();
              return
            }

            navigation.navigate(SCREENS.NEWGOAL,  {
              
                values: {
                  ...values,
                  height: heightVal,
                  height_unit: 'cm',
                },
              });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Heights;

const styles = StyleSheet.create({
  ProfileView: {
    alignItems: 'center',
  },
  InnerMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  InnerMainView: {
    width: '20%',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 11,
  },
});

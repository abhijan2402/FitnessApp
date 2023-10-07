import React, { useState } from 'react';
import SlideHeader from '../../components/header/SlideHeader';
import TextH4 from '../../components/Text/TextH4';
import NewButtob from '../../components/Button/NewButtob';
import { Image } from 'react-native';
import SmallText from '../../components/Text/SmallText';
import LiftMan from '../../../assets/images/LiftMan.svg';
import Input from '../../components/Form/Input';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SCREENS } from '../../constants/Screens';
import { useRoute } from '@react-navigation/native';

const GoalWeight = ({ navigation }) => {
  const route = useRoute();
  const values = route.params?.values;

  const [lbs, setlbs] = useState(true);
  const [kg, setkg] = useState(false);
  const [MainWeightVal, setMainWeightVal] = useState('');
  return (
    <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
      <SlideHeader />
      <LiftMan
        width={124}
        height={189}
        style={{ alignSelf: 'center', marginVertical: 20 }}
      />
      <View style={styles.ProfileView}>
        <TextH4 style={{ marginTop: '20%' }}>What is your goal weight?</TextH4>
        <View style={styles.InnerMain}>
          <TouchableOpacity
            onPress={() => {
              setlbs(true);
              setkg(false);
            }}
            style={[
              styles.InnerMainView,
              { backgroundColor: lbs ? '#8C80F8' : 'white' },
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: lbs ? 'white' : 'black',
                fontWeight: '500',
              }}>
              lbs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setlbs(false);
              setkg(true);
            }}
            style={[
              styles.InnerMainView,
              { backgroundColor: kg ? '#8C80F8' : 'white' },
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: kg ? 'white' : 'black',
                fontWeight: '500',
              }}>
              kg
            </Text>
          </TouchableOpacity>
        </View>
        <Input
          placeholder={'Weight'}
          onChangeText={value => setMainWeightVal(value)}
          customStyle={{ width: '60%', marginVertical: 15 }}
          keyboardType="numeric"
        />

        <NewButtob
          title={'Continue'}
          onPress={() => {
            navigation.navigate(SCREENS.HEIGHT, {
              values: {
                ...values,
                goal_weight: MainWeightVal,
                weight_unit: 'kg',
              },
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default GoalWeight;

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

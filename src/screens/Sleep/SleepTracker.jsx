import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import SolidContainer from '../../components/container/SolidContainer';
import TextH4 from '../../components/Text/TextH4';

import Back from '../../../assets/icons/Back.svg';
import TwoDot from '../../../assets/icons/twodot.svg';
import Bed from '../../../assets/images/bed.svg';
import Alarm from '../../../assets/images/alarm.svg';

const {width, height} = Dimensions.get('window');
import SleepScheduleCard from '../../components/Sleep/SleepBottomContainer';
import TextMedium from '../../components/Text/TextMedium';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SleepMeasureCard from '../../components/card/SleepMeasureCard';
import AnimatedLineChart from '../../components/Utils/LineChart';
import {SCREENS} from '../../constants/Screens';
import {useNavigation} from '@react-navigation/native';
const SleepTracker = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '5%',
        }}>
        <SolidContainer containerStyle={styles.solidContainerStyle}>
          <Back width={16} height={16} />
        </SolidContainer>
        <View style={{marginLeft: 15}}>
          <TextH4>Sleep Tracker</TextH4>
        </View>
        <SolidContainer containerStyle={styles.solidContainerStyle}>
          <TwoDot width={16} height={16} />
        </SolidContainer>
      </View>
      <View
        style={{
          overflow: 'hidden',
          marginHorizontal: 15,
          marginVertical: 15,
          marginBottom: '10%',
          marginTop: '10%',
        }}>
        <AnimatedLineChart />
      </View>
      <SleepMeasureCard title={'Last Night Sleep'} SleepTime={'8h 24m'} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginVertical: '8%',
        }}>
        <SolidContainer
          containerStyle={[styles.solidcontainer, {marginHorizontal: 10}]}>
          <TextMedium style={{flexGrow: 1}}>Daily Sleep Schedule</TextMedium>
          <PrimaryButton
            containerStyle={styles.targetButton}
            textStyle={styles.targetButtonText}
            title={'Check'}
            onPress={() => navigation.navigate(SCREENS.SLEEPSCHEDULER)}
          />
        </SolidContainer>
      </View>
      <View style={{marginHorizontal: 15}}>
        <TextH4 style={{marginHorizontal: 15}}>Today Schedule</TextH4>
        <SleepScheduleCard
          icon={<Bed width={30} height={30} />}
          title={'Bedtime'}
          timeat={'in 6hours 22minutes'}
          time={'09:00pm'}
          bgcolor={'rgba(255,141,308,0.3)'}
        />
        <SleepScheduleCard
          icon={<Alarm width={30} height={30} />}
          title={'Alarm'}
          timeat={'in 14hours 30minutes'}
          time={'05:10am'}
          bgcolor={'rgba(255,141,168,0.3)'}
        />
      </View>
    </ScrollView>
  );
};

export default SleepTracker;

const styles = StyleSheet.create({
  solidContainerStyle: {
    borderRadius: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solidcontainer: {
    flexDirection: 'row',
    borderRadius: 15,
    height: 70,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'rgba(157,206,255,0.2)',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 1.111,
  },
  targetButton: {
    width: width / 3.6,
    height: 40,
    elevation: 0,
  },
  targetButtonText: {
    fontSize: 14,
  },
});

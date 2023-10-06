import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SlideHeader from '../../components/header/SlideHeader';
import TextH4 from '../../components/Text/TextH4';
import SmallText from '../../components/Text/SmallText';
import NewGoalCard from '../../components/card/NewGoalCard';
import Avacado from '../../../assets/images/Avacado.svg';
import NewBed from '../../../assets/images/NewBed.svg';
import WMelon from '../../../assets/images/WMelon.svg';
import Muscle from '../../../assets/images/Muscle.svg';
import NewButtob from '../../components/Button/NewButtob';
import {SCREENS} from '../../constants/Screens';
import {useRoute} from '@react-navigation/native';
import {registerUser} from '../../backend/utilFunctions';

const NewGoal = ({navigation}) => {
  const route = useRoute();
  const values = route.params?.values;

  const handleCreateUser = async () => {
    try {
      const res = await registerUser({...values, goal: 'improve weight'});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{alignItems: 'center'}}>
      <SlideHeader />
      <TextH4 style={{marginTop: '20%'}}>Choose your goal</TextH4>
      <SmallText
        style={{width: '60%', textAlign: 'center', marginVertical: '10%'}}>
        {' '}
        You always can change this later
      </SmallText>
      <NewGoalCard
        title={'Weight loss'}
        icon={<WMelon width={20} height={24} />}
        bacckground={'#FF9B90'}
      />
      <NewGoalCard
        title={'Better sleeping habit'}
        icon={<NewBed width={20} height={24} />}
        bacckground={'#4C5980'}
      />
      <NewGoalCard
        title={'Track my nutrition'}
        icon={<Avacado width={20} height={24} />}
        bacckground={'#FF9B90'}
      />
      <NewGoalCard
        title={'Improve overall fitness'}
        icon={<Muscle width={20} height={24} />}
        bacckground={'#4C5980'}
      />
      <View style={{marginTop: '10%', width: '100%', alignItems: 'center'}}>
        <NewButtob
          title={'Continue'}
          onPress={() => {
            navigation.navigate(SCREENS.FINALGOALMAIN);
          }}
        />
      </View>
    </View>
  );
};

export default NewGoal;

const styles = StyleSheet.create({});

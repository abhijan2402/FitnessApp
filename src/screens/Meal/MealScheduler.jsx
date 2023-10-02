import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/container/ScreenContainer';
import TextH4 from '../../components/Text/TextH4';
import SolidContainer from '../../components/container/SolidContainer';

import Back from '../../../assets/icons/Back.svg';
import TwoDot from '../../../assets/icons/twodot.svg';
import Add from '../../../assets/icons/plus.svg';
import Calorie from '../../../assets/images/fire.svg';
import Sugar from '../../../assets/images/sugar.svg';
import Fat from '../../../assets/images/fat.svg';
import CustomDatePicker from '../../components/common/CustomDatePicker';
import SubSectionTitle from '../../components/Meal/SubSectionTitle';
import FloatingGradingButton from '../../components/Button/FloatingGradingButton';
import TodayMealPlannerCard from '../../components/Meal/TodayMealPlannerCard';
import MealContainerNew from '../../components/Meal/MealContainerNew';
import {
  MealSchedulLunch,
  MealScheduleBreakfast,
  MealScheduleDinner,
  MealScheduleOther,
} from '../../data/Mealschedule';
import {SCREENS} from '../../constants/Screens';
import {useRoute} from '@react-navigation/native';
import {getTimeInAMPMFormat} from '../../utils/common';
import {useMemo} from 'react';
const MealScheduler = ({navigation}) => {
  const route = useRoute();
  const {filteredRecommendedMeals} = route?.params;
  console.log(filteredRecommendedMeals, 'I am meal');

  function filterMealsBasedOnType(type) {
    const filteredMeals = filteredRecommendedMeals.filter(
      meal => meal.meal_period === type,
    );
    return filteredMeals;
  }
  const breakfastMeal = useMemo(() => {
    return filterMealsBasedOnType('BREAKFAST');
  });
  const lunchfastMeal = useMemo(() => {
    return filterMealsBasedOnType('LUNCH');
  });
  const dinnerfastMeal = useMemo(() => {
    return filterMealsBasedOnType('DINNER');
  });
  const snackfastMeal = useMemo(() => {
    return filterMealsBasedOnType('SNACKS');
  });

  return (
    <>
      <ScreenContainer scroll={true}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <SolidContainer containerStyle={styles.solidContainerStyle}>
            <Back width={16} height={16} />
          </SolidContainer>
          <View style={{marginLeft: 15}}>
            <TextH4>Meal Schedule</TextH4>
          </View>
          <SolidContainer containerStyle={styles.solidContainerStyle}>
            <TwoDot width={16} height={16} />
          </SolidContainer>
        </View>
        <CustomDatePicker />
        <SubSectionTitle
          mealgoal={`${breakfastMeal.length || 0} meals`}
          title={'Breakfast'}
        />
        <View>
          {breakfastMeal.map(item => (
            <MealContainerNew
              key={item._id}
              colors={['rgba(146, 163, 253, 0.2)', 'rgba(157, 206, 255, 0.2)']}
              title={item && item.meal?.name ? item.meal?.name : 'Meal'}
              time={getTimeInAMPMFormat(new Date(item?.meal?.created_time))}
              containerStyle={{width: '98%', alignSelf: 'center'}}
              img={{uri: item?.meal?.meal_image}}
              // img={require('../../../assets/images/sushi.png')}
              onPress={() => {
                navigation.navigate(SCREENS.DIETDETAILS, {
                  id: item._id,
                  meal: item,
                });
              }}
            />
          ))}
        </View>
        <SubSectionTitle
          mealgoal={`${lunchfastMeal.length || 0} meals`}
          title={'Lunch'}
        />
        <View>
          {lunchfastMeal.map(item => (
            <MealContainerNew
              key={item._id}
              colors={['rgba(146, 163, 253, 0.2)', 'rgba(157, 206, 255, 0.2)']}
              title={item && item.meal ? item.meal.name : ''}
              time={getTimeInAMPMFormat(new Date(item?.meal?.created_time))}
              containerStyle={{width: '98%', alignSelf: 'center'}}
              img={{uri: item?.meal?.meal_image}}
              onPress={() =>
                navigation.navigate(SCREENS.DIETDETAILS, {
                  id: item._id,
                  meal: item,
                })
              }
            />
          ))}
        </View>
        <SubSectionTitle
          mealgoal={`${snackfastMeal.length || 0} meals`}
          title={'Snack'}
        />
        <View>
          {snackfastMeal.map(item => (
            <MealContainerNew
              key={item._id}
              colors={['rgba(146, 163, 253, 0.2)', 'rgba(157, 206, 255, 0.2)']}
              title={item && item.meal ? item.meal.name : ''}
              time={getTimeInAMPMFormat(new Date(item?.meal?.created_time))}
              containerStyle={{width: '98%', alignSelf: 'center'}}
              img={{uri: item?.meal?.meal_image}}
              onPress={() =>
                navigation.navigate(SCREENS.DIETDETAILS, {
                  id: item._id,
                  meal: item,
                })
              }
            />
          ))}
        </View>
        <SubSectionTitle
          mealgoal={`${dinnerfastMeal.length || 0} meals`}
          title={'Dinner'}
        />
        <View style={{marginBottom: 30}}>
          {dinnerfastMeal.map(item => (
            <MealContainerNew
              key={item._id}
              colors={['rgba(146, 163, 253, 0.2)', 'rgba(157, 206, 255, 0.2)']}
              title={item && item.meal ? item.meal.name : ''}
              time={getTimeInAMPMFormat(new Date(item?.meal?.created_time))}
              containerStyle={{width: '98%', alignSelf: 'center'}}
              img={{uri: item?.meal?.meal_image}}
              onPress={() =>
                navigation.navigate(SCREENS.DIETDETAILS, {
                  id: item._id,
                  meal: item,
                })
              }
            />
          ))}
        </View>
        {/* <TextH4 style={{ fontSize: 16, fontWeight: '600', padding: 10 }}>
          Today Meal Nutritions
        </TextH4>
        <View style={{ marginBottom: 20 }}>
          <TodayMealPlannerCard
            mealattributes={'Calorie'}
            attributesvalue={'500 Kcal'}
            attributeicon={<Calorie width={25} height={25} />}
            progress={100}
          />
          <TodayMealPlannerCard
            mealattributes={'Sugar'}
            attributesvalue={'300 g'}
            attributeicon={<Sugar width={25} height={25} />}
            progress={200}
          />
          <TodayMealPlannerCard
            mealattributes={'Fats'}
            attributesvalue={'100 g'}
            attributeicon={<Fat width={25} height={25} />}
            progress={150}
          />
        </View> */}
      </ScreenContainer>
      {/* <FloatingGradingButton colors={['rgba(197, 139, 242, 1)', 'rgba(238, 164, 206, 1)']}>
                <Add width={25} height={25} />
            </FloatingGradingButton> */}
    </>
  );
};
const styles = StyleSheet.create({
  solidContainerStyle: {
    borderRadius: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MealScheduler;

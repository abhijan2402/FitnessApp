import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Header from '../../components/header/Header';
import SolidContainer from '../../components/container/SolidContainer';
import GradientDropdown from '../../components/Utils/GradientDropdown';
import LargeText from '../../components/Text/LargeText';
import AnimatedLineChart from '../../components/Utils/LineChart';
import { MEALS, WORKOUTS } from '../../constants/Data';
import { FONTS } from '../../constants/Fonts';
import TextMedium from '../../components/Text/TextMedium';
import PrimaryButton from '../../components/Button/PrimaryButton';
import MealContainer from '../../components/container/MealContainer';
import MealCard from '../../components/card/MealCard';
import { SCREENS } from '../../constants/Screens';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {
  generateRequest,
  getMealDetails,
  getUserRecommendedMeal,
} from '../../backend/utilFunctions';
import { getTimeInAMPMFormat } from '../../utils/common';
import { GlobalContext } from '../../../App';
const { width, height } = Dimensions.get('window');

const MealHome = () => {
  const navigation = useNavigation();
  const [mealPlan, setMealPlan] = useState(WORKOUTS[0]);
  const [meals, setMeals] = useState(null);
  const [recommendedMeals, setRecommendedMeals] = useState([]);
  const [filteredRecommendedMeals, setFilteredRecommendedMeals] = useState([]);

  const data = [
    {
      _id: '64e665facd2b7331bb73aa99',
      name: 'Chicken Curry',
      nutritions: [
        {
          type: 'Protein',
          value: 25,
        },
        {
          type: 'Carbohydrates',
          value: 30,
        },
        {
          type: 'Fat',
          value: 15,
        },
      ],
      required_ingredients: [
        {
          name: 'chicken',
          type: 'grams',
          quantity: 300,
        },
        {
          name: 'onion',
          type: 'medium',
          quantity: 2,
        },
        {
          name: 'tomato',
          type: 'medium',
          quantity: 2,
        },
        {
          name: 'spices',
          type: 'packet',
          quantity: 1,
        },
      ],
      steps: [
        {
          title: 'Step 1',
          description: 'Chop onions and tomatoes',
        },
        {
          title: 'Step 2',
          description: 'Cook chicken and spices',
        },
        {
          title: 'Step 3',
          description: 'Add onions and tomatoes, simmer',
        },
      ],
      description: 'Delicious chicken curry recip',
      ytlink1: 'https://www.youtube.com/watch?v=abc123',
      created_by: '64e3c17dd71a6bd71e3fe50c',
      created_time: '2023-08-23T20:03:06.234Z',
      __v: 0,
      meal_image:
        'https://images.pexels.com/photos/6113813/pexels-photo-6113813.jpeg?cs=srgb&dl=pexels-mian-shahbaz-anjum-6113813.jpg&fm=jpg',
    },
    {
      _id: '64f8cf6cf4640acbcdd4c9a3',
      name: 'Scrambled Eggssss',
      nutritions: [
        {
          type: 'carbohydrates',
          value: 29,
        },
        {
          type: 'protein',
          value: 32,
        },
      ],
      required_ingredients: [
        {
          name: 'tomato',
          type: 'piece',
          quantity: 21,
        },
      ],
      steps: [
        {
          title: 'step 1',
          description: 'sf',
        },
      ],
      description: 'sfd',
      ytlink1: 'https://www.youtube.com/watch?v=MGgFEuL0Seg',
      created_by: '64f0bf519ab01f067b7dcbfb',
      created_time: '2023-09-06T19:13:48.695Z',
      meal_image:
        'https://www.abeautifulplate.com/wp-content/uploads/2023/02/cheesy-scrambled-eggs-2-scaled.jpg',
      meal_image_key: 'images/mealmeal_image-Scrambled Eggs-739352',
      __v: 0,
    },
  ];

  const { user } = useContext(GlobalContext);
  function filterMealsBasedOnType(type) {
    const filteredMeals = recommendedMeals.filter(
      meal => meal.meal_period === type,
    );
    return filteredMeals;
  }

  useEffect(() => {
    // getUserRecommendedMeal('64fa183bb171a981f1cfc819')
    //   .then(res => {
    //     setRecommendedMeals(JSON.stringify(res)?.data);

    //     console.log('line: 45' + JSON.stringify(res));
    //   })
    //   .catch(err => console.log('line: 47', err));
    setRecommendedMeals(data);
    console.log('first');

    // const getMeal = async () => {
    //   try {
    //     const res = getUserRecommendedMeal(user?._id)
    //     console.log('line: 45', res)
    //   } catch (error) {
    //     console.log('line: 47', error)
    //   }
    // }

    // getMeal()
  }, []);

  useEffect(() => {
    if (meals === null) setFilteredRecommendedMeals(recommendedMeals);
    else if (meals === 'BREAKFAST')
      setFilteredRecommendedMeals(filterMealsBasedOnType('breakfast'));
    else if (meals === 'LUNCH')
      setFilteredRecommendedMeals(filterMealsBasedOnType('lunch'));
    else if (meals === 'DINNER')
      setFilteredRecommendedMeals(filterMealsBasedOnType('dinner'));
  }, [meals, recommendedMeals]);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title={'Meal Planner'} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <SolidContainer
          containerStyle={{
            ...styles.solidcontainer,
            display: 'flex',
            flexdirection: 'row',
            backgroundColor: 'white',
            paddingHorizontal: 10,
            marginBottom: 0,
          }}>
          <LargeText
            style={{
              fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,
              color: 'black',
              flexGrow: 1,
            }}>
            Meal Nutritions
          </LargeText>
          <GradientDropdown
            data={WORKOUTS}
            value={mealPlan}
            setValue={setMealPlan}
            placeholder="Select Item"
            containerStyle={{ width: width / 3.7, height: 40, borderRadius: 30 }}
          />
        </SolidContainer>
      </View>
      <View style={{ overflow: 'hidden' }}>
        <AnimatedLineChart />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <SolidContainer
          containerStyle={[styles.solidcontainer, { marginHorizontal: 10 }]}>
          <TextMedium style={{ flexGrow: 1 }}>Daily Meal Schedule</TextMedium>
          <PrimaryButton
            containerStyle={styles.targetButton}
            textStyle={styles.targetButtonText}
            title={'Check'}
            onPress={() => navigation.navigate(SCREENS.MEALSCHEDULER)}
          />
        </SolidContainer>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <SolidContainer
          containerStyle={{
            ...styles.solidcontainer,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            marginBottom: 0,
          }}>
          <LargeText
            style={{
              fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,
              color: 'black',
              flexGrow: 1,
            }}>
            Today Meals
          </LargeText>
          <GradientDropdown
            data={MEALS}
            value={meals}
            setValue={setMeals}
            placeholder="Select"
            containerStyle={{ width: width / 2.8, height: 40, borderRadius: 30 }}
          />
        </SolidContainer>
        <View style={{ paddingHorizontal: 10 }}>
          {filteredRecommendedMeals.map((meal, i) => {
            console.log(i, meal);
            return (
              <MealContainer
                key={meal._id}
                img={require('../../../assets/images/sushi.png')}
                title={meal?.name || ' '}
                time={getTimeInAMPMFormat(new Date(meal.created_time))}
                date={'Today'}
                onpress={() =>
                  navigation.navigate(SCREENS.MEALSCHEDULER, {
                    filteredRecommendedMeals,
                  })
                }
              />
            );
          })}
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: '5%' }}>
          <LargeText
            style={{
              fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,
              color: 'black',
              flexGrow: 1,
              marginVertical: 5,
            }}>
            Meal
          </LargeText>
          <ScrollView horizontal>
            <MealCard
              onPress={() =>
                navigation.navigate(SCREENS.MEALSCHEDULER, {
                  filteredRecommendedMeals: filteredRecommendedMeals,
                })
              }
              Type="BreakFast"
              NOFood="120"
              backgroundColor={'#D9FFFD'}
              btnBackGround={'#82E1FF'}
              img={require('../../../assets/images/BreakFast_meal.png')}
            />
            <MealCard
              onPress={() =>
                navigation.navigate(SCREENS.MEALSCHEDULER, {
                  filteredRecommendedMeals: filteredRecommendedMeals,
                })
              }
              Type="Lunch"
              NOFood="102"
              backgroundColor={'#FFE0DC'}
              btnBackGround={'#FF8ECB'}
              img={require('../../../assets/images/BreakFast_meal.png')}
            />
            <MealCard
              onPress={() =>
                navigation.navigate(SCREENS.MEALSCHEDULER, {
                  filteredRecommendedMeals: filteredRecommendedMeals,
                })
              }
              Type="Dinner"
              NOFood="20"
              backgroundColor={'#D9FFFD'}
              btnBackGround={'#82E1FF'}
              img={require('../../../assets/images/BreakFast_meal.png')}
            />
          </ScrollView>
        </View>
      </View>
      <View style={{ marginHorizontal: 15, marginBottom: '5%' }}>
        <SolidContainer
          containerStyle={{
            ...styles.solidcontainer,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            marginBottom: 0,
          }}>
          <LargeText
            style={{
              fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,
              color: 'black',
              flexGrow: 1,
            }}>
            Skipped Meals
          </LargeText>
          <GradientDropdown
            data={MEALS}
            value={meals}
            setValue={setMeals}
            placeholder="Select"
            containerStyle={{ width: width / 2.8, height: 40, borderRadius: 30 }}
          />
        </SolidContainer>
        <View style={{ paddingHorizontal: 10 }}>
          <MealContainer
            img={require('../../../assets/images/sushi.png')}
            title={'Salmon Nigiri'}
            time={'7am'}
            date={'Today'}
            onpress={() => navigation.navigate(SCREENS.MEALSCHEDULER)}
          />
          <MealContainer
            img={require('../../../assets/images/glass-of-milk.png')}
            title={'Lowfat Milk'}
            time={'8am'}
            date={'Today'}
            onpress={() => navigation.navigate(SCREENS.MEALSCHEDULER)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealHome;

const styles = StyleSheet.create({
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

import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Dimensions } from 'react-native';
import { COLORS } from '../../constants/Colors';
import GradientLabel from '../../components/Label/GradientLabel';
import { Image } from 'react-native';
import SmallText from '../../components/Text/SmallText';
import { FONTS } from '../../constants/Fonts';
import LargeText from '../../components/Text/LargeText';
const { width, height } = Dimensions.get('window');

import WorkoutPic from '../../../assets/images/WorkoutPic.svg'
import WorkoutPic1 from '../../../assets/images/WorkoutPic1.svg'
import GirlLifting from '../../../assets/images/GirlLifting.svg'
import BoyLifting from '../../../assets/images/BoyLifting.svg'
import BoyJumping from '../../../assets/images/BoyJumping.svg'

import Tag from '../../components/Text/Tag';
import FireSvg from '../../../assets/icons/Calories-Icon.svg';
import CarboSvg from '../../../assets/icons/Carbo-Icon.svg';
import ProteinSvg from '../../../assets/icons/Proteins-Icon.svg';
import FatSvg from '../../../assets/icons/trans-fat.svg';
import SolidContainer from '../../components/container/SolidContainer';
import IngridientCard from '../../components/card/IngridientCard';
import BakingSodaSvg from '../../../assets/icons/BakingSoda-Icon.svg';
import EggsSvg from '../../../assets/icons/Eggs-Icon.svg';
import FlourSvg from '../../../assets/icons/Flour-Icon.svg';
import SugarSvg from '../../../assets/icons/Sugar-Icon.svg';
import ActivePassiveList from '../../components/list/ActivePassiveList';
import PrimaryButton from '../../components/Button/PrimaryButton';
import TextMedium from '../../components/Text/TextMedium';
import DIfferentBWContainer from '../../components/workout/DIfferentBWContainer';
import WorkOutForms from '../../components/workout/WorkOutForms';
import { SCREENS } from '../../constants/Screens';
import { useNavigation } from '@react-navigation/native';
import AnimatedLineChart from '../../components/Utils/LineChart';
import TextH4 from '../../components/Text/TextH4';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/container/BottomSheet';
import { useRef } from 'react';
import useLayout from '../../hooks/useLayout';

const apiTempData = {
  success: true,
  data: [
    {
      _id: '65131b82b1579298617c980d',
      user: '65070607fc4949e4a775ab91',
      date: '2023-09-27T18:30:00.000Z',
      workout_id: {
        _id: '64f59c25f3661342ce8053cc',
        name: 'Mohit soni',
        description: 'shshush',
        image: 'ssss',
        physical_equipments: [],
        calorie_burn: 22,
        exercises: [
          {
            _id: '64e7b6fee13a85ab9807358a',
            name: 'Jumping Jacks',
            difficulty_level: 'Hard',
            description: 'This is an updated exercise description',
            ytlink1: 'https://www.youtube.com/updated-link',
            calorie_burn: 200,
            repetition: 15,
            timetoperform: '45 minutes',
            image:
              'https://holisticmedclinic.ca/wp-content/uploads/2020/03/morning-yoga-workout-lovely-hispanic-woman-doing-h-SUGKFCB-small-e1585082289512.jpg',
            steps: [
              {
                title: 'Step 1',
                description: 'Start by warming up.',
                _id: '64e7bf7f8065ca6847244a96',
              },
              {
                title: 'Step 2',
                description: 'Perform the updated main exercise.',
                _id: '64e7bf7f8065ca6847244a97',
              },
              {
                title: 'Step 3',
                description: 'Cool down and stretch after the update.',
                _id: '64e7bf7f8065ca6847244a98',
              },
            ],
            created_by: '64e3c17dd71a6bd71e3fe50c',
            created_time: '2023-08-24T20:01:02.943Z',
            __v: 0,
          },
          {
            _id: '64e7b701e13a85ab98073596',
            name: 'Tricep Dips',
            difficulty_level: 'Medium',
            description: 'This is a sample exercise description.',
            ytlink1: 'https://www.youtube.com/sample-link',
            calorie_burn: 150,
            repetition: 10,
            timetoperform: '30 minutes',
            image:
              'https://betterme.world/articles/wp-content/uploads/2021/01/Belly-Fat-Workout-At-Home-Lose-Belly-Fat-At-Home-With-These-Simple-Yet-Effective-Exercises.jpg',
            steps: [
              {
                title: 'Step 1',
                description: 'Start by warming up.',
                _id: '64e7b701e13a85ab98073597',
              },
              {
                title: 'Step 2',
                description: 'Perform the main exercise.',
                _id: '64e7b701e13a85ab98073598',
              },
              {
                title: 'Step 3',
                description: 'Cool down and stretch.',
                _id: '64e7b701e13a85ab98073599',
              },
            ],
            created_by: '64e3c17dd71a6bd71e3fe50c',
            created_time: '2023-08-24T20:01:05.013Z',
            __v: 0,
          },
        ],
        created_by: '64f0bf519ab01f067b7dcbfb',
        updated_by: '64f0bf519ab01f067b7dcbfb',
        createdAt: '2023-09-04T08:58:13.811Z',
        updatedAt: '2023-09-04T18:04:31.649Z',
        __v: 0,
        workout_name: 'sjhjhsjsss',
      },
      difficulty: 'BEGINNER',
      user_picked: false,
      user_skip: false,
      assigned_by: '64f0bcff9ab01f067b7dcbf3',
      createdAt: '2023-09-26T17:57:22.730Z',
      updatedAt: '2023-09-26T17:57:22.730Z',
      __v: 0,
    },
    {
      _id: '65131b82b1579298617c980d',
      user: '65070607fc4949e4a775ab91',
      date: '2023-09-27T18:30:00.000Z',
      workout_id: {
        _id: '64f59c25f3661342ce8053cc',
        name: 'Mohit soni',
        description: 'shshush',
        image: 'ssss',
        physical_equipments: [],
        calorie_burn: 22,
        exercises: [
          {
            _id: '64e7b6fee13a85ab9807358a',
            name: 'Jumping Jacks',
            difficulty_level: 'Hard',
            description: 'This is an updated exercise description',
            ytlink1: 'https://www.youtube.com/updated-link',
            calorie_burn: 200,
            repetition: 15,
            timetoperform: '45 minutes',
            image:
              'https://holisticmedclinic.ca/wp-content/uploads/2020/03/morning-yoga-workout-lovely-hispanic-woman-doing-h-SUGKFCB-small-e1585082289512.jpg',
            steps: [
              {
                title: 'Step 1',
                description: 'Start by warming up.',
                _id: '64e7bf7f8065ca6847244a96',
              },
              {
                title: 'Step 2',
                description: 'Perform the updated main exercise.',
                _id: '64e7bf7f8065ca6847244a97',
              },
              {
                title: 'Step 3',
                description: 'Cool down and stretch after the update.',
                _id: '64e7bf7f8065ca6847244a98',
              },
            ],
            created_by: '64e3c17dd71a6bd71e3fe50c',
            created_time: '2023-08-24T20:01:02.943Z',
            __v: 0,
          },
          {
            _id: '64e7b701e13a85ab98073596',
            name: 'Tricep Dips',
            difficulty_level: 'Medium',
            description: 'This is a sample exercise description.',
            ytlink1: 'https://www.youtube.com/sample-link',
            calorie_burn: 150,
            repetition: 10,
            timetoperform: '30 minutes',
            image:
              'https://betterme.world/articles/wp-content/uploads/2021/01/Belly-Fat-Workout-At-Home-Lose-Belly-Fat-At-Home-With-These-Simple-Yet-Effective-Exercises.jpg',
            steps: [
              {
                title: 'Step 1',
                description: 'Start by warming up.',
                _id: '64e7b701e13a85ab98073597',
              },
              {
                title: 'Step 2',
                description: 'Perform the main exercise.',
                _id: '64e7b701e13a85ab98073598',
              },
              {
                title: 'Step 3',
                description: 'Cool down and stretch.',
                _id: '64e7b701e13a85ab98073599',
              },
            ],
            created_by: '64e3c17dd71a6bd71e3fe50c',
            created_time: '2023-08-24T20:01:05.013Z',
            __v: 0,
          },
        ],
        created_by: '64f0bf519ab01f067b7dcbfb',
        updated_by: '64f0bf519ab01f067b7dcbfb',
        createdAt: '2023-09-04T08:58:13.811Z',
        updatedAt: '2023-09-04T18:04:31.649Z',
        __v: 0,
        workout_name: 'sjhjhsjsss',
      },
      difficulty: 'BEGINNER',
      user_picked: false,
      user_skip: false,
      assigned_by: '64f0bcff9ab01f067b7dcbf3',
      createdAt: '2023-09-26T17:57:22.730Z',
      updatedAt: '2023-09-26T17:57:22.730Z',
      __v: 0,
    },
  ],
};
function WorkOutHome(props) {

    const [workoutdata, setWorkoutdata] = useState(apiTempData)

    const navigation = useNavigation();
    const sheetRef = useRef(null);
    const [viewHeight,getViewHeight] = useLayout()
    return (
        <GestureHandlerRootView style={{flex:1}}>
                <GradientLabel
                    colors={[COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1, COLORS.PRIMARY_BUTTON_GRADIENT.BLUE2]}
                    conatinerStyle={styles.container}
                >
                    {/* <Image source={require('../../../assets/images/cake.png')} style={styles.image} /> */}
                    <View style={{ overflow: "hidden", width: "90%", marginTop: "5%", marginBottom: "5%" }}>
                        <TextH4 style={{ textAlign: "center", marginVertical: 10 }} >Workout Tracker</TextH4>
                        <AnimatedLineChart />
                    </View>
                </GradientLabel>
                <BottomSheet ref={sheetRef} extraRequiredHeight={viewHeight}>
                        <View style={styles.detailContainer} onLayout={getViewHeight}>
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginVertical: "8%" }}>
                                <SolidContainer containerStyle={[styles.solidcontainer]}>
                                    <TextMedium style={{ flexGrow: 1 }}>Daily Workout Schedule</TextMedium>
                                    <PrimaryButton
                                        onPress={() => navigation.navigate(SCREENS.WODKOUTSCHEDULE)}
                                        containerStyle={styles.targetButton}
                                        textStyle={styles.targetButtonText}
                                        title={'Check'} />
                                </SolidContainer>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "5%" }}>
                                <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_BOLD, color: 'black' }}>Upcoming Workout</LargeText>
                                <TextMedium style={{}}>See more</TextMedium>
                            </View>
                            <View>
                            {apiTempData && apiTempData?.data && apiTempData?.data.length > 0 ?
                              <>
                               {apiTempData?.data?.map((item,ind)=>(
                                <DIfferentBWContainer moreInfo={item} key={item._id} title={item.workout_id.workout_name} time={"Today, 03pm"} icon={<WorkoutPic width={50} height={50} />} />
                                ))}
                                  </> : null
                              }
                                {/* <DIfferentBWContainer title={"Diabetes Workout"} time={"Today, 03pm"} icon={<WorkoutPic width={50} height={50} />} />
                                <DIfferentBWContainer title={"Upperbody Workout"} time={"Today, 03pm"} icon={<WorkoutPic1 width={50} height={50} />} /> */}
                            </View>
                            <View style={{ marginHorizontal: "5%", marginTop: "5%",paddingBottom:90 }}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_BOLD, color: 'black' }}>What Do You Want to Train</LargeText>

                              {apiTempData && apiTempData?.data && apiTempData?.data.length>0 ?
                              <>
                              {apiTempData?.data?.map((item,ind)=>(
                                <WorkOutForms key={item._id} title={item.workout_id.workout_name} NOfExercise={item.workout_id.exercises.length} Time={"35mins"} icon={<BoyJumping width={75} height={105} />} />
                              ))}

                              </> : null
                              } 
                                {/* <WorkOutForms title={"Fullbody Workout"} NOfExercise={"10"} Time={"30mins"} icon={<BoyJumping width={75} height={105} />} />
                                <WorkOutForms title={"Lowebody Workout"} NOfExercise={"10"} Time={"30mins"} icon={<GirlLifting width={75} height={105} />} />
                                <WorkOutForms title={"AB Workout"} NOfExercise={"10"} Time={"30mins"} icon={<BoyLifting width={75} height={105} />} /> */}
                            </View>
                        </View>
                    </BottomSheet>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    detailContainer: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        width: width
        // paddingTop: 50,
        // paddingLeft: 15,

    },
    image: {
        marginTop: 20
    },
    solidcontainer: {
        marginTop: 20,
        paddingRight: 35,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 10
    },
    solidContainerStyle: {
        borderRadius: 10,
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
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
        alignItems: "center",
        justifyContent: "center",
        width: width / 1.111
    },
    targetButton: {
        width: width / 3.6,
        height: 40,
        elevation: 0
    },
    targetButtonText: {
        fontSize: 14
    },
})
export default WorkOutHome;
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Dimensions } from 'react-native';
import { COLORS } from '../../constants/Colors';
import GradientLabel from '../../components/Label/GradientLabel';
import { Image } from 'react-native';
import { FONTS } from '../../constants/Fonts';
import LargeText from '../../components/Text/LargeText';
const { width, height } = Dimensions.get('window');
import CalenderOption from '../../../assets/images/CalenderOption.svg'
import Updown from '../../../assets/images/Updown.svg'
import Dumble from '../../../assets/icons/Dumble.svg';
import PrimaryButton from '../../components/Button/PrimaryButton';
import TextMedium from '../../components/Text/TextMedium';
import WorkOutHeader from '../../components/workout/WorkOutHeader';
import WorkoutOption from '../../components/workout/WorkoutOption';
import ExerciseItems from '../../components/card/ExerciseItems';
import ExerciseInfoCard from '../../components/card/ExerciseInfoCard';
import { SCREENS } from '../../constants/Screens';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/container/BottomSheet';
import useLayout from '../../hooks/useLayout';
import { useRoute } from '@react-navigation/native';

function WorkOutInfo(props) {
    const navigation = useNavigation();
    
    const [viewHeight,getViewHeight] = useLayout()

    const route = useRoute();
    const moreInfo = route.params?.moreInfo;
    console.log("dsadsdasdsadasdas",moreInfo?.workout_id.exercises[0]);

    return (
        <GestureHandlerRootView style={{flex:1}}>
            <GradientLabel
                    colors={[COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1, COLORS.PRIMARY_BUTTON_GRADIENT.BLUE2]}
                    conatinerStyle={styles.container}
                >
                    <Image source={require('../../../assets/images/JumpBoy.png')} style={styles.image} />
                    <BottomSheet extraRequiredHeight={550}>
                        <View style={styles.detailContainer} onLayout={getViewHeight}>
                            <WorkOutHeader title={moreInfo.workout_id.workout_name} ExerciseInformation={`${moreInfo.workout_id.exercises.length} Exercises | 32mins | ${moreInfo.workout_id.calorie_burn} Calories Burn`} />
                            <WorkoutOption title={"Schedule Workout"} icon={<CalenderOption width={22} height={22} />} Time={"5/27, 09:00 AM"} backgroundColor={"#E2EEFF"} />
                            <WorkoutOption title={"Difficulty"} icon={<Updown width={22} height={22} />} Time={moreInfo.difficulty} backgroundColor={"#FFECF5"} />
                            <View style={{ marginTop: "3%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "5.3%" }}>
                                <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: "black" }}>You will need</LargeText>
                                <TextMedium>5 Items</TextMedium>
                            </View>
                            <ScrollView horizontal style={{ margin: "5%" }}>
                                <ExerciseItems icon={<Dumble width={53} height={53} />} title={"Dumble"} />
                                <ExerciseItems icon={<Dumble width={53} height={53} />} title={"Skipping Rope"} />
                                <ExerciseItems icon={<Dumble width={53} height={53} />} title={"Dumble"} />
                                <ExerciseItems icon={<Dumble width={53} height={53} />} title={"Skipping Rope"} />
                                <ExerciseItems icon={<Dumble width={53} height={53} />} title={"Dumble"} />
                            </ScrollView>
                            <View style={{ marginTop: "3%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "5.3%" }}>
                                <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: "black" }}>Exercises</LargeText>
                                <TextMedium>5 Sets</TextMedium>
                            </View>
                            <View style={{ marginTop: "3%", marginHorizontal: "5.3%", marginBottom: "20%" }}>
                                <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: "black" }}>Set 1</LargeText>
                                {moreInfo && moreInfo?.workout_id?.exercises && moreInfo?.workout_id?.exercises.length > 0 ?
                              <>
                               {moreInfo?.workout_id?.exercises.map((item,ind)=>(
                                <ExerciseInfoCard title={item.name} img={item.image} Time={`${item.repetition} x`} />
                                ))}
                                  </> : null
                              }
                                {/* <ExerciseInfoCard title={"Warm Up"} img={require('../../../assets/icons/Girl.png')} Time={"05:00 "} />
                                <ExerciseInfoCard title={"Jumping Jack"} img={require('../../../assets/icons/Girl.png')} Time={"05:00 "} />
                                <ExerciseInfoCard title={"Warm Up"} img={require('../../../assets/icons/Girl.png')} Time={"05:00 "} />
                                <ExerciseInfoCard title={"Jumping Jack"} img={require('../../../assets/icons/Girl.png')} Time={"05:00 "} />
                                <ExerciseInfoCard title={"Warm Up"} img={require('../../../assets/icons/Girl.png')} Time={"05:00 "} />
                                <ExerciseInfoCard title={"Jumping Jack"} img={require('../../../assets/icons/Girl.png')} Time={"05:00 "} /> */}
                            </View>
                            <View style={{ position: "absolute", bottom: "4%", width: "100%" }}>
                                <PrimaryButton onPress={() => navigation.navigate(SCREENS.WODKOUTDETAILS)} containerStyle={{ width: "80%", alignSelf: "center" }} title={'Start Workout'} />
                            </View>
                        </View>
                    </BottomSheet>
            </GradientLabel>
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
        width: width,
        paddingTop: "10%",
    },
    image: {
        marginTop: 20,
        marginBottom: "-40%"
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
export default WorkOutInfo;
import React from 'react';
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
function WorkOutHome(props) {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView>
                <GradientLabel
                    colors={[COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1, COLORS.PRIMARY_BUTTON_GRADIENT.BLUE2]}
                    conatinerStyle={styles.container}
                >
                    {/* <Image source={require('../../../assets/images/cake.png')} style={styles.image} /> */}
                    <View style={{ overflow: "hidden", width: "90%", marginTop: "5%", marginBottom: "5%" }}>
                        <TextH4 style={{ textAlign: "center", marginVertical: 10 }} >Workout Tracker</TextH4>
                        <AnimatedLineChart />
                    </View>
                    <ScrollView contentContainerStyle={[styles.detailContainer]}>
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginVertical: "8%" }}>
                            <SolidContainer containerStyle={[styles.solidcontainer, {}]}>
                                <TextMedium style={{ flexGrow: 1 }}>Daily Workout Schedule</TextMedium>
                                <PrimaryButton
                                    onPress={() => navigation.navigate(SCREENS.WORLOUTINFO)}
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
                            <DIfferentBWContainer title={"Diabetes Workout"} time={"Today, 03pm"} icon={<WorkoutPic width={50} height={50} />} />
                            <DIfferentBWContainer title={"Upperbody Workout"} time={"Today, 03pm"} icon={<WorkoutPic1 width={50} height={50} />} />
                        </View>
                        <View style={{ marginHorizontal: "5%", marginTop: "5%" }}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_BOLD, color: 'black' }}>What Do You Want to Train</LargeText>
                            <WorkOutForms title={"Fullbody Workout"} NOfExercise={"10"} Time={"30mins"} icon={<BoyJumping width={75} height={105} />} />
                            <WorkOutForms title={"Lowebody Workout"} NOfExercise={"10"} Time={"30mins"} icon={<GirlLifting width={75} height={105} />} />
                            <WorkOutForms title={"AB Workout"} NOfExercise={"10"} Time={"30mins"} icon={<BoyLifting width={75} height={105} />} />
                        </View>
                    </ScrollView>
                </GradientLabel>
            </ScrollView>
        </>
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
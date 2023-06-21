import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
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
const { width, height } = Dimensions.get('window');

const MealHome = () => {
    const [mealPlan, setMealPlan] = useState(WORKOUTS[0])
    const [meals, setMeals] = useState(WORKOUTS[0])


    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Header title={"Meal Planner"} />
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>
                <SolidContainer containerStyle={{ ...styles.solidcontainer, display: "flex", flexdirection: "row", backgroundColor: 'white', paddingHorizontal: 10, marginBottom: 0 }}>
                    <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', flexGrow: 1 }}>Meal Nutritions</LargeText>
                    <GradientDropdown
                        data={WORKOUTS}
                        value={mealPlan}
                        setValue={setMealPlan}
                        placeholder='Select Item'
                        containerStyle={{ width: width / 3.7, height: 40, borderRadius: 30 }}
                    />
                </SolidContainer>
            </View>
            <View style={{ overflow: 'hidden' }}>
                <AnimatedLineChart />
            </View>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
                <SolidContainer containerStyle={[styles.solidcontainer, { marginHorizontal: 10 }]}>
                    <TextMedium style={{ flexGrow: 1 }}>Today Target</TextMedium>
                    <PrimaryButton
                        containerStyle={styles.targetButton}
                        textStyle={styles.targetButtonText}
                        title={'Check'} />
                </SolidContainer>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <SolidContainer containerStyle={{ ...styles.solidcontainer, backgroundColor: 'white', paddingHorizontal: 10, marginBottom: 0 }}>
                    <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', flexGrow: 1 }}>Today Meals</LargeText>
                    <GradientDropdown
                        data={MEALS}
                        value={meals}
                        setValue={setMeals}
                        placeholder='Select Item'
                        containerStyle={{ width: width / 3.7, height: 40, borderRadius: 30 }}
                    />
                </SolidContainer>
                <View style={{ paddingHorizontal: 10 }}>
                    <MealContainer
                        img={require('../../../assets/images/sushi.png')}
                        title={'Salmon Nigiri'}
                        time={'7am'}
                        date={'Today'}
                    />
                    <MealContainer
                        img={require('../../../assets/images/glass-of-milk.png')}
                        title={'Lowfat Milk'}
                        time={'8am'}
                        date={'Today'}
                    />
                </View>

            </View>


        </ScrollView>
    )
}

export default MealHome

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
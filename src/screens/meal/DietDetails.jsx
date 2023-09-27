import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { COLORS } from '../../constants/Colors';
import GradientLabel from '../../components/Label/GradientLabel';
import { Image } from 'react-native';
import SmallText from '../../components/Text/SmallText';
import { FONTS } from '../../constants/Fonts';
import LargeText from '../../components/Text/LargeText';

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
import { useNavigation, useRoute } from '@react-navigation/native';
import { SCREENS } from '../../constants/Screens';
import { GestureHandlerRootView, FlatList } from 'react-native-gesture-handler';
import BottomSheet from '../../components/container/BottomSheet';
import useLayout from '../../hooks/useLayout';
import { getMealDetails } from '../../backend/utilFunctions';
import { ActivityIndicator } from 'react-native';
const tags = [
    {
        id: 1,
        icon: <FireSvg width={20} height={20} />,
        tag: '180kCal'
    },
    {
        id: 2,
        icon: <FatSvg width={20} height={20} />,
        tag: '30g fats'
    },
    {
        id: 3,
        icon: <ProteinSvg width={20} height={20} />,
        tag: '20g proteins'
    },
    {
        id: 4,
        icon: <CarboSvg width={20} height={20} />,
        tag: '180kCal'
    },
]
function DietDetails(props) {
    const route = useRoute()
    const { meal } = route.params
    // console.log(meal, "Heyy");
    // const {id} = route.params;
    const navigation = useNavigation();
    const bottomSheetRef = useRef(null);
    const [viewHeight, getViewHeight] = useLayout()
    const [mealDetails, setMealDetails] = useState({
        name: "", nutrient: [], description: "", steps: [], ingredients: []
    })
    function convertStepToArray(steps) {
        console.log(steps, "I am step");
        const stepsArr = []
        let i = 1;
        Object.keys(steps).forEach(key => {
            // console.log(key, steps, "jj");
            stepsArr.push({
                title: 'Step ' + i,
                subtitle: steps[0].description,
                isComplete: false
            })
            i++;
        })
        console.log(stepsArr, "I am stepsArrr");
        return stepsArr
        // return 0
    }
    function convertIngrediantsToArray(ingredients) {
        // console.log(ingredients, "Ingredients");
        const ingrediantsArr = []
        let i = 1;
        Object.keys(ingredients).forEach(key => {
            ingrediantsArr.push(
                {
                    id: i,
                    icon: <EggsSvg width={50} height={50} />,
                    title: key,
                    value: `${ingredients[key].name} ${ingredients[key].quantity} ${ingredients[key].type}`
                },
            )
            i++;
        })
        return ingrediantsArr
        // return 0

    }
    function convertNutrientsToArray(nutrients) {
        // console.log("I am in CNA", nutrients);
        const eliminatorIndex = nutrients.indexOf('/')
        const nutrientsArr = []
        let i = 1;
        Object.keys(nutrients).forEach(key => {
            nutrientsArr.push(
                {
                    id: i,
                    icon: <FireSvg width={20} height={20} />,
                    tag: `${nutrients[key].value} ${nutrients[key].type}`
                }
            )
            i++;
        })
        console.log(nutrientsArr)
        return nutrientsArr
        // return 0

    }
    useEffect(() => {
        // getMealDetails("64a9ce1d4c52b7ecf30477b7")
        //     .then(res => {
        //         console.log('====================================');
        //         console.log(res, "i am rees");
        //         console.log('====================================');

        //     })
        //     .catch(err => console.log(err, "I am err"))

        const details = meal
        console.log('====================================');
        console.log(details?.meal.steps, 'I am ss');
        console.log('====================================');
        setMealDetails({ ...mealDetails, name: details.name, description: details.description, steps: convertStepToArray(details?.meal?.steps), ingredients: convertIngrediantsToArray(details?.meal?.required_ingredients), nutrient: convertNutrientsToArray(details?.meal?.nutritions) })
    }, [])
    // if (mealDetails.steps.length <= 0 || mealDetails.ingredients.length <= 0 || mealDetails.nutrient.length <= 0)
    //     return <ActivityIndicator />
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <GradientLabel
                    colors={[COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1, COLORS.PRIMARY_BUTTON_GRADIENT.BLUE2]}
                    conatinerStyle={styles.container}
                >
                    <Image source={require('../../../assets/images/cake.png')} style={styles.image} />
                </GradientLabel>
                <BottomSheet ref={bottomSheetRef} extraRequiredHeight={viewHeight} style={{}} >
                    <View style={styles.detailContainer} onLayout={getViewHeight}>
                        <View style={{ marginBottom: 30 }}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_BOLD, color: 'black' }}>{mealDetails.name}</LargeText>
                            {/* <SmallText style={{ color: COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1 }}>by James Ruth</SmallText> */}
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', marginBottom: 15 }}>Nutrition</LargeText>
                            <FlatList
                                data={mealDetails.nutrient}
                                renderItem={({ item }) => <Tag icon={item.icon} tag={item.tag} />}
                                keyExtractor={item => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={{ paddingRight: 35 }}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', marginBottom: 10 }}>Descriptions</LargeText>
                            <SmallText style={styles.descriptions}>
                                {mealDetails.description}
                                <SmallText style={{ color: COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1 }}>
                                    Read More...
                                </SmallText>
                            </SmallText>
                        </View>

                        <SolidContainer containerStyle={styles.solidcontainer}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', width: 180 }}>Ingredients That You Will Need</LargeText>
                            <SmallText style={{ fontFamily: FONTS.FONT_POPPINS_MEDIUM, flexGrow: 1, textAlign: 'right' }}>{`${mealDetails.ingredients.length} items`}</SmallText>
                        </SolidContainer>
                        <FlatList
                            data={mealDetails.ingredients}
                            renderItem={({ item }) =>
                                <IngridientCard
                                    icon={<EggsSvg width={50} height={50} />}
                                    title={item.title}
                                    value={item.value}
                                    keyExtractor={item => item.id}
                                    containerStyle={{ marginRight: 15, marginBottom: 20 }}
                                />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                        <SolidContainer containerStyle={styles.solidcontainer}>
                            <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', flexGrow: 1 }}>Step by Step</LargeText>
                            <SmallText style={{ fontFamily: FONTS.FONT_POPPINS_MEDIUM }}>{mealDetails.steps.length}</SmallText>
                        </SolidContainer>
                        {
                            mealDetails.steps.map((item, index) =>
                                <ActivePassiveList
                                    width={340}
                                    key={index}
                                    id={`${index < 10 ? '0' + (index + 1) : index}`}
                                    isComplete={item.isComplete}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    showLine={(index === mealDetails.steps.length - 1) ? false : true}
                                />)
                        }
                        <View style={{ paddingBottom: 90, paddingRight: 30 }}>
                            <PrimaryButton
                                onPress={() => navigation.navigate(SCREENS.MEALFINAL)}
                                title={'Add to Breakfast Meal'}
                            />
                        </View>
                    </View>
                </BottomSheet>

            </GestureHandlerRootView>

        </>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    detailContainer: {
        width: Dimensions.get('screen').width,
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingLeft: 35,

    },
    image: {
        marginTop: 80
    },
    solidcontainer: {
        marginTop: 20,
        paddingRight: 35,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 10
    },
})
export default DietDetails;
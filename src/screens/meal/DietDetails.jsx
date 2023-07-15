import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Dimensions } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/Screens';
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
const nutrientData = [
    {
        id: 1,
        icon: <FlourSvg width={50} height={50} />,
        title: 'Wheat Flour',
        value: '100gr'
    },
    {
        id: 2,
        icon: <SugarSvg width={50} height={50} />,
        title: 'Sugar',
        value: '3 tbsp'
    },
    {
        id: 3,
        icon: <BakingSodaSvg width={50} height={50} />,
        title: 'Baking Soda',
        value: '2 tsp'
    },
    {
        id: 4,
        icon: <EggsSvg width={50} height={50} />,
        title: 'Eggs',
        value: '2 items'
    },
]
const stepData = [
    {
        title: 'Step 1',
        subtitle: 'Prepare all of the ingredients that needed',
        isComplete: true
    },
    {
        title: 'Step 2',
        subtitle: 'Mix flour, sugar, salt, and baking powder',
        isComplete: true
    },
    {
        title: 'Step 3',
        subtitle: 'In a seperate place, mix the eggs and liquid milk until blended',
        isComplete: false
    },
    {
        title: 'Step 4',
        subtitle: 'Prepare all of the ingredients that needed',
        isComplete: false
    },

]
const descriptions = `Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course everyone loves that! besides being  `
function DietDetails(props) {
    const navigation = useNavigation();

    return (
        <>
            <GradientLabel
                colors={[COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1, COLORS.PRIMARY_BUTTON_GRADIENT.BLUE2]}
                conatinerStyle={styles.container}
            >
                <Image source={require('../../../assets/images/cake.png')} style={styles.image} />
                <ScrollView contentContainerStyle={[styles.detailContainer]}>
                    <View style={{ marginBottom: 30 }}>
                        <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_BOLD, color: 'black' }}>Blueberry Pancake</LargeText>
                        <SmallText style={{ color: COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1 }}>by James Ruth</SmallText>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', marginBottom: 15 }}>Nutrition</LargeText>
                        <FlatList
                            data={tags}
                            renderItem={({ item }) => <Tag icon={item.icon} tag={item.tag} />}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ paddingRight: 35 }}>
                        <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', marginBottom: 10 }}>Descriptions</LargeText>
                        <SmallText style={styles.descriptions}>
                            {descriptions}
                            <SmallText style={{ color: COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1 }}>
                                Read More...
                            </SmallText>
                        </SmallText>
                    </View>

                    <SolidContainer containerStyle={styles.solidcontainer}>
                        <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: 'black', width: 180 }}>Ingredients That You Will Need</LargeText>
                        <SmallText style={{ fontFamily: FONTS.FONT_POPPINS_MEDIUM, flexGrow: 1, textAlign: 'right' }}>{`${nutrientData.length} items`}</SmallText>
                    </SolidContainer>
                    <FlatList
                        data={nutrientData}
                        renderItem={({ item }) =>
                            <IngridientCard
                                icon={item.icon}
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
                        <SmallText style={{ fontFamily: FONTS.FONT_POPPINS_MEDIUM }}>8 Steps</SmallText>
                    </SolidContainer>
                    {
                        stepData.map((item, index) =>
                            <ActivePassiveList
                                width={340}
                                key={index}
                                id={`${index < 10 ? '0' + (index + 1) : index}`}
                                isComplete={item.isComplete}
                                title={item.title}
                                subtitle={item.subtitle}
                                showLine={(index === stepData.length - 1) ? false : true}
                            />)
                    }
                    <View style={{ paddingBottom: 35, paddingRight: 30 }}>
                        <PrimaryButton
                            onPress={() => navigation.navigate(SCREENS.FINISHWO)}
                            title={'Add to Breakfast Meal'}
                        />
                    </View>
                </ScrollView>
            </GradientLabel>

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
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
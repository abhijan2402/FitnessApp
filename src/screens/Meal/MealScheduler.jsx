import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import ScreenContainer from '../../components/container/ScreenContainer'
import TextH4 from '../../components/Text/TextH4'
import SolidContainer from '../../components/container/SolidContainer'

import Back from '../../../assets/icons/Back.svg'
import TwoDot from '../../../assets/icons/twodot.svg';
import Add from '../../../assets/icons/plus.svg';
import Calorie from '../../../assets/images/fire.svg';
import Sugar from '../../../assets/images/sugar.svg';
import Fat from '../../../assets/images/fat.svg';


import CustomDatePicker from '../../components/common/CustomDatePicker'
import SubSectionTitle from '../../components/Meal/SubSectionTitle'
import FloatingGradingButton from '../../components/Button/FloatingGradingButton'
import TodayMealPlannerCard from '../../components/Meal/TodayMealPlannerCard'
import MealContainerNew from '../../components/Meal/MealContainerNew'
import { MealSchedulLunch, MealScheduleBreakfast, MealScheduleDinner, MealScheduleOther } from '../../data/Mealschedule'


const MealScheduler = () => {
  return (
    <>
        <ScreenContainer scroll={true}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <SolidContainer containerStyle={styles.solidContainerStyle}>
                    <Back width={16} height={16}/>
                </SolidContainer>
                <View style={{marginLeft:15}}>
                    <TextH4 >Meal Schedule</TextH4>
                </View>
                <SolidContainer containerStyle={styles.solidContainerStyle}>
                    <TwoDot width={16} height={16}/>
                </SolidContainer>
            </View>
            <CustomDatePicker/>
            <SubSectionTitle mealgoal={'2 meals | 230 calories'} title={"Breakfast"} />
            <View>
                {
                    MealScheduleBreakfast.map((item,index)=>(
                        <MealContainerNew
                            key={index}
                            colors={item.colors}
                            title={item.title}
                            time={item.time}
                            containerStyle={{width:'98%',alignSelf: 'center',}}
                            img={item.img}
                        />
                    ))
                }
            </View>
            <SubSectionTitle mealgoal={'2 meals | 500 calories'} title={"Lunch"} />
            <View>
                {
                    MealSchedulLunch.map((item,index)=>(
                        <MealContainerNew
                            key={index}
                            colors={item.colors}
                            title={item.title}
                            time={item.time}
                            containerStyle={{width:'99%',alignSelf: 'center',}}
                            img={item.img}
                        />
                    ))
                }
            </View>
            <SubSectionTitle mealgoal={'2 meals | 140 calories'} title={"Snack"} />
            <View>
                {
                    MealScheduleDinner.map((item,index)=>(
                        <MealContainerNew
                            key={index}
                            colors={item.colors}
                            title={item.title}
                            time={item.time}
                            containerStyle={{width:'99%',alignSelf: 'center',}}
                            img={item.img}
                        />
                    ))
                }
            </View>
            <SubSectionTitle mealgoal={'2 meals | 120 calories'} title={"Dinner"} />
            <View>
                {
                    MealScheduleOther.map((item,index)=>(
                        <MealContainerNew
                            key={index}
                            colors={item.colors}
                            title={item.title}
                            time={item.time}
                            containerStyle={{width:'99%',alignSelf: 'center',}}
                            img={item.img}
                        />
                    ))
                }
            </View>
            <TextH4 style={{fontSize:16,fontWeight:"600",padding:10,}}>
                Today Meal Nutritions
            </TextH4>
            <View style={{marginBottom:20}}>
                <TodayMealPlannerCard mealattributes={"Calorie"} attributesvalue={"500 Kcal"} attributeicon={<Calorie width={25} height={25}/>} progress={100} />
                <TodayMealPlannerCard mealattributes={"Sugar"} attributesvalue={"300 g"} attributeicon={<Sugar width={25} height={25}/>} progress={200} />
                <TodayMealPlannerCard mealattributes={"Fats"} attributesvalue={"100 g"} attributeicon={<Fat width={25} height={25}/>} progress={150} />
            </View>
        </ScreenContainer>
        <FloatingGradingButton colors={['rgba(197, 139, 242, 1)','rgba(238, 164, 206, 1)']}>
            <Add width={25} height={25}/>
        </FloatingGradingButton>
    </>
  )
}
const styles=StyleSheet.create({
    solidContainerStyle:{
        borderRadius:10,
        width:32,
        height:32,
        alignItems:"center",
        justifyContent:"center",
    },
})
export default MealScheduler
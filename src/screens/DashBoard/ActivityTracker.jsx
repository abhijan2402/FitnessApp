import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import SolidContainer from '../../components/container/SolidContainer'
import ScreenContainer from '../../components/container/ScreenContainer'
import TextH4 from '../../components/Text/TextH4'

import Plus from '../../../assets/icons/plus.svg';
import WaterGlass from '../../../assets/images/WaterH2O.svg';
import Shoes from '../../../assets/images/Shoes.svg';
import Back from '../../../assets/icons/Back.svg'

import GradientContainer from '../../components/container/GradientContainer'
import TargetContainerSubContainer from '../../components/DashBoard/TargetContainerSubContainer'
import ActivityEntryLabel from '../../components/Label/ActivityEntryLabel'
import ScheduleMealProgress from '../../components/DashBoard/ScheduleMealProgress'
import SmallText from '../../components/Text/SmallText'
import LatestActivityCard from '../../components/DashBoard/LatestActivityCard'
import { ChatsLabels } from '../../data/ActivityChartData'
import LineChartWithMultipleLines from '../../components/Utils/ActivityLineChats'
import CustomDatePicker from '../../components/common/CustomDatePicker'

const ActivityTracker = () => {
    return (
        <ScreenContainer scroll={true}>
            <SolidContainer containerStyle={styles.solidContainerStyle}>
                <Back width={16} height={16}/>
            </SolidContainer>
            <View style={{alignItems:"center"}}>
                <TextH4 >Activity Tracker</TextH4>
            </View>
            <CustomDatePicker/>
            <GradientContainer colors={['rgba(157, 206, 255, 0.2)','rgba(157, 206, 255, 0.2)']}  styles={{padding:20,borderRadius:20,height:180,justifyContent:"space-around",marginVertical: 30,}}>
                <SolidContainer containerStyle={styles.continerTopStyles} >
                    <TextH4>
                        Today Target
                    </TextH4>
                    <GradientContainer colors={['#92A3FD','#9DCEFF']} styles={styles.iconContainerStyle}>
                        <Plus width={14} height={14}/>
                    </GradientContainer>
                </SolidContainer>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <TargetContainerSubContainer number={"10L"} label={"Water Intake"} image={<WaterGlass width={25} height={40}/>} />
                    <TargetContainerSubContainer number={"4000"} label={"Foot Steps"} image={<Shoes width={30} height={30}/>} />
                </View>
            </GradientContainer>
            <GradientContainer colors={['rgba(157, 206, 255, 0.2)','rgba(157, 206, 255, 0.2)']}  styles={{padding:20,borderRadius:20,height:180,alignItems:"center",height:430}}>
                <View style={styles.chatTitle}>
                    <TextH4>
                        10582 kcal
                    </TextH4>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:'80%',marginVertical:10}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <TextH4 style={{fontSize:14,fontWeight:"700"}}>
                            548
                        </TextH4>
                        <SmallText>Avg Cals</SmallText>
                    </View>
                    <View style={{width:15,height:2,backgroundColor:"rgba(97, 125, 121, 1)"}}/>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <TextH4 style={{fontSize:14,fontWeight:"700"}}>
                            2054
                        </TextH4>
                        <SmallText>Goal Sal</SmallText>
                    </View>
                </View>
                <LineChartWithMultipleLines/>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    {
                        ChatsLabels.map((item,index)=>(
                            <View key={index} style={{flexDirection:"row",alignItems: 'center',justifyContent:"center"}}>
                                <View style={{width:10,height:10,backgroundColor:item.dotColor,borderRadius:5,marginHorizontal:5}} />
                                <Text style={styles.chatBoxText}>{item.label}</Text>
                            </View>
                        ))
                    }
                </View>
            </GradientContainer>
            <View style={styles.entrieConteiner} >
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                    <ScheduleMealProgress unit={"Kcal"} amount={"1572"} daytime={"Breakfast"} mealpercentage={"14"} progressbar={{outerColor:"rgba(157, 208, 48, 0.5)",innerColor:"rgba(157, 208, 48, 1)",percentage:'52'}} />
                    <ScheduleMealProgress unit={"Kcal"} amount={"7548"} daytime={"Lunch"} mealpercentage={"78"} progressbar={{outerColor:"rgba(146, 163, 253, 0.5)",innerColor:"rgba(146, 163, 253, 1)",percentage:"70"}}/>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                    <ScheduleMealProgress unit={"Kcal"} amount={"4571"} daytime={"Dinner"} mealpercentage={"20"} progressbar={{outerColor:"rgba(57, 172, 255, 0.5)",innerColor:"rgba(57, 172, 255, 1)",percentage:"47"}}/>
                    <ScheduleMealProgress unit={"Kcal"} amount={"4781"} daytime={"Other"} mealpercentage={"18"} progressbar={{outerColor:"rgba(146, 163, 253, 0.5)",innerColor:"rgba(146, 163, 253, 1)",percentage:"30"}}/>
                </View>
            </View>
            <TextH4>
                Entries
            </TextH4>
            <View style={styles.entrieConteiner} >
                <ActivityEntryLabel title={"Today"} amount={"1748"} unit={"Kcal"} />
                <ActivityEntryLabel title={"27 March 2022"} amount={"1675"} unit={"Kcal"} />
                <ActivityEntryLabel title={"26 March 2022"} amount={"1944"} unit={"Kcal"} />
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                <TextH4>
                    Latest Activity
                </TextH4>
                <SmallText>See more</SmallText>
            </View>
            <View style={{marginBottom:20,paddingHorizontal:5}}>
                <LatestActivityCard title={"Drinking 300ml Water"} timeago={"About 3 minutes ago"} bgcolor={"rgba(255,141,168,0.3)"} selected={true} />
                <LatestActivityCard title={"Eat Snack (Fitbar)"} timeago={"About 10 minutes ago"} bgcolor={"rgba(255,141,168,0.3)"} />
            </View>
        </ScreenContainer>
    )
}
const styles=StyleSheet.create({
    continerTopStyles:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:"transparent"
    },
    iconContainerStyle:{
        width:30,height:30,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    solidContainerStyle:{
        borderRadius:10,
        width:32,
        height:32,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
    },
    entrieConteiner:{
        backgroundColor:"rgba(246, 247, 247, 1)",
        marginVertical:20,
        borderRadius:20,
        alignItems:"center",
        padding:20
    },
    chatTitle:{
        backgroundColor:"white",
        width:"60%",
        alignItems:"center",
        justifyContent:"center",
        height:60,
        borderRadius:30
    },
    chatBoxText:{
        color:"black",
        fontWeight:"500",
        fontSize:15
    }
})
export default ActivityTracker
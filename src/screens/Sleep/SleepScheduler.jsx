import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import GradientContainer from '../../components/container/GradientContainer'
import SolidContainer from '../../components/container/SolidContainer'
import TextH4 from '../../components/Text/TextH4'

import Back from '../../../assets/icons/Back.svg'
import TwoDot from '../../../assets/icons/twodot.svg';
import Add from '../../../assets/icons/plus.svg';
import SleepImage from '../../../assets/images/sleepimage.svg';
import Bed from '../../../assets/images/bed.svg'
import Alarm from '../../../assets/images/alarm.svg'

import ScreenContainer from '../../components/container/ScreenContainer'
import FloatingGradingButton from '../../components/Button/FloatingGradingButton'
import CustomDatePicker from '../../components/common/CustomDatePicker'
import SmallText from '../../components/Text/SmallText'
import ProgressBar from '../../components/progress/ProgressBar'
import LongProgressBar from '../../components/progress/LongProgressBar'
import PrimaryButton from '../../components/Button/PrimaryButton'
import GradientText from '../../components/Text/GradientText'
import SleepScheduleCard from '../../components/Sleep/SleepBottomContainer'

const {width}=Dimensions.get("window");

const SleepScheduler = () => {
    return (
        <>
            <ScreenContainer scroll>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <SolidContainer containerStyle={styles.solidContainerStyle}>
                        <Back width={16} height={16}/>
                    </SolidContainer>
                    <View style={{marginLeft:15}}>
                        <TextH4 >Sleep Schedule</TextH4>
                    </View>
                    <SolidContainer containerStyle={styles.solidContainerStyle}>
                        <TwoDot width={16} height={16}/>
                    </SolidContainer>
                </View>
                <GradientContainer colors={['rgba(157, 206, 255, 0.2)','rgba(157, 206, 255, 0.2)']}  styles={{padding:20,borderRadius:25,height:180,justifyContent:"space-around",marginVertical: 30,flexDirection: 'row',alignItems:"center"}}>
                    <View>
                        <SmallText style={{fontSize:12,fontWeight:"400"}}>
                            Ideal Hours for Sleep
                        </SmallText>
                        <GradientText style={{height:40}} x={0} y={15} fontSize={"15"} text="8hours 30minutes" colors={['#92A3FD', '#9DCEFF',]} />
                        <PrimaryButton
                            containerStyle={styles.learnmore}
                            textStyle={styles.learnmoreText}
                            title={'Learn More'} 
                        />
                    </View>
                    <SleepImage width={120} height={100}/>
                </GradientContainer>
                <TextH4 style={{fontSize:16,fontWeight:"600",padding:10,}}>
                    Your Schedule
                </TextH4>
                <CustomDatePicker showMonth={false} />
                <View>
                    <SleepScheduleCard icon={<Bed width={30} height={30}/>} title={"Bedtime"} timeat={"in 6hours 22minutes"} time={"09:00pm"} bgcolor={"rgba(255,141,308,0.3)"} />
                    <SleepScheduleCard icon={<Alarm width={30} height={30}/>} title={"Alarm"} timeat={"in 14hours 30minutes"} time={"05:10am"} bgcolor={"rgba(255,141,168,0.3)"} />
                </View>
                <GradientContainer colors={['rgba(197, 139, 242, 0.2)','rgba(238, 164, 206, 0.2)']}  styles={{padding:20,borderRadius:25,justifyContent:"space-between",marginVertical: 30,paddingVertical: 25,height:130}}>
                    <SmallText style={{color:"black",fontSize:14,fontWeight:"500"}}>
                        You will get 8hours 10minutes{"\n"}for tonight
                    </SmallText>
                    <LongProgressBar colors={['rgba(197, 139, 242, 1)','rgba(238, 164, 206, 1)']} percentage={75}  />   
                </GradientContainer>
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
    learnmore: {
        width: width / 3,
        height: 40,
        elevation: 0
    },
    learnmoreText: {
        fontSize: 12,
    },
})
export default SleepScheduler
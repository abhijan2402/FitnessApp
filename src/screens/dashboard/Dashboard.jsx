import React from 'react';
import ScreenContainer from '../../components/container/ScreenContainer';
import { View,StyleSheet,Text, TouchableWithoutFeedback } from 'react-native';
import TextH4 from '../../components/Text/TextH4';
import SmallText from '../../components/Text/SmallText';
import SolidButton from '../../components/Button/SolidButton';
import Notification from '../../../assets/icons/Notification.svg';
import GradientLabel from '../../components/Label/GradientLabel';
import { COLORS } from '../../constants/Colors';
import TextMedium from '../../components/Text/TextMedium';
import SecondaryButton from '../../components/Button/SecondaryButton';
import { PieChart } from 'react-native-chart-kit';
import { FONTS } from '../../constants/Fonts';
import SolidContainer from '../../components/container/SolidContainer';
import PrimaryButton from '../../components/Button/PrimaryButton';
import LargeText from '../../components/Text/LargeText';
import { VictoryLine } from 'victory-native';
import { stepData } from '../../data/Data';
import PairText from '../../components/Text/PairText';
import ProgressBar from '../../components/progress/ProgressBar';
import ListBullet from '../../components/list/ListBullet';

const data = [
    {
      name: "Seoul",
      population:20,
      color:COLORS.SECONDARY_BUTTON_GRADIENT.PURPLE1,
      
    },
    {
      name: "Toronto",
      population: 100-20,
      color: "transparent",
    },
];
function getRandomPoint(){
    const data = []
    for(let i =1;i<=25;i++)
        data.push(Math.random()*100)
    return data
}
const lineChartData = {
    datasets: [
        {
        data:getRandomPoint(),
        color: (opacity = 1) => `#92A3FD`, // optional
        strokeWidth: 2 // optional
        }
    ],
    
}
function Dashboard(props) {
    return (
        <ScreenContainer scroll={true}>
            <View style={styles.profileInfo}>
                <View style={styles.userInfo}>
                    <SmallText>Welcome Back,</SmallText>
                    <TextH4>INZAMAMUL</TextH4>
                </View>
                <SolidButton containerStyle={styles.solidButtonContainer}>
                    <Notification width={30} height={30}/>
                </SolidButton>
            </View>
            <GradientLabel 
            colors={[COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1,COLORS.PRIMARY_BUTTON_GRADIENT.BLUE2]}
            conatinerStyle={styles.gradientContainer}
            >
                <View style={styles.bmiContainer}>
                    <View style={{flexGrow:1}}>
                        <TextMedium style={{color:'white'}}>BMI (Body Mass Index)</TextMedium>
                        <SmallText style={{color:'white',marginBottom:15}}>You have a normal weight</SmallText>
                        <SecondaryButton 
                        title={'View More'}
                        containerStyle={{width:100,height:40,elevation:0}}
                        textStyle={{fontSize:12}}
                        />
                    </View>
                    <View>
                        <View style={styles.circle}>
                            <PieChart
                            data={data}
                            width={130}
                            height={130}
                            chartConfig={chartConfig}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            hasLegend={false}
                            center={[17,0]}
                            />
                            
                        </View>
                    </View>
                    <SmallText style={styles.bmiCount}>{data[0].population.toString()+",1"}</SmallText>
                </View>
            </GradientLabel>
            <SolidContainer containerStyle={styles.solidcontainer}>
                <TextMedium style={{flexGrow:1}}>Today Target</TextMedium>
                <PrimaryButton 
                containerStyle={styles.targetButton} 
                textStyle={styles.targetButtonText}
                title={'Check'}/>
            </SolidContainer>
            <LargeText style={{fontFamily:FONTS.FONT_POPPINS_SEMIBOLD,color:'black',marginBottom:15}}>Activity Status</LargeText>
            <SolidContainer containerStyle={styles.lineGraphContainer}>
                <VictoryLine
                        width={400}
                        height={180}
                        style={{
                        data: { stroke: "#92A3FD" },
                        }}
                        animate={{duration: 2000,onLoad: { duration: 2000 }}}
                        data={stepData}
                    />
                    <PairText 
                    containerStyle={styles.stepContainer}
                    heading={'STEPS'}
                    subHeading='2000'
                    />
            </SolidContainer>
            
            <View style={styles.waterIntakeTracker}>
                <View>
                    <ProgressBar 
                    vertical={true}
                    containerStyle={styles.waterInTakeBar} 
                    gradientContainerStyle={{...styles.waterInTakeGradient,height:200}}
                    />
                </View>
                <View style={{alignSelf:'flex-start',paddingTop:15,marginLeft:10}}>
                    <PairText 
                    heading={'Water Intake'}
                    subHeading='4 Liters'
                    />
                    <SmallText style={{marginTop:10,marginBottom:10}}>Real time updates</SmallText>
                    <ListBullet title={'6am - 8am'} subTitle={'600ml'}/>
                    <ListBullet title={'9am - 11am'} subTitle={'500ml'}/>
                    <ListBullet title={'11am - 2pm'} subTitle={'1000ml'}/>
                    <ListBullet title={'2pm - 4pm'} subTitle={'700ml'}/>
                    <ListBullet title={'4pm - now'} subTitle={'900ml'} showLine={false}/>
                </View>
            </View>
            
        </ScreenContainer>
    );
}
const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};


const styles = StyleSheet.create({
    solidButtonContainer:{
        width:50,
        height:50,
        borderRadius:15,
        
    },
    stepContainer:{
        position:'absolute',
        left:20,
        top:15
    },
    waterIntakeTracker:{
        padding:15,
        width:'55%',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:5,
        height:350,
        borderRadius:15,
        backgroundColor:'white',
        elevation:3,  
        zIndex:1,
        marginBottom:80  
    },
    waterInTakeGradient:{
        height:0,
        position:'absolute',
        bottom:0
    },
    waterInTakeBar:{
        width:30,
        height:300
    },
    targetButton:{
        width:100,
        height:40,
        elevation:0
    },
    targetButtonText:{
        fontSize:14
    },
    solidcontainer:{
        flexDirection:'row',
        borderRadius:15,
        height:70,
        padding:15,
        paddingHorizontal:20,
        marginTop:30,
        backgroundColor:'rgba(157,206,255,0.2)',
        marginBottom:40
    },
    userInfo:{
        flexGrow:1
    },
    profileInfo:{
        flexDirection:'row',
        marginBottom:30
    },
    lineGraphContainer:{
       borderRadius:15,
       justifyContent:'center',
       alignItems:'center',
       height:180,
       backgroundColor:'rgba(157, 206, 255,0.2)',
      marginBottom:15
       
    },
    gradientContainer:{
        width:'100%',
        height:180,
        borderRadius:15,
        elevation:5,
        padding:30
    },
    circle:{
        width:90,
        height:90,
        backgroundColor:'white',
        borderRadius:45,
        justifyContent:'center',
        alignItems:'center'
    },
    bmiContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    bmiCount:{
        position:'absolute',
        left:'97%',
        top:-15,
        color:'white',
        fontFamily:FONTS.FONT_POPPINS_BOLD
    }
})
export default Dashboard;
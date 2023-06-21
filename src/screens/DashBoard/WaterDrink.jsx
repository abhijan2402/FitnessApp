import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import CircleBar from '../../components/DashBoard/CircleBar'
import SmallText from '../../components/Text/SmallText'

import Mug from '../../../assets/images/mug.svg';
import Glass from '../../../assets/images/waterglass.svg';
import BKbottle from '../../../assets/images/bottlebk.svg';
import Array from '../../../assets/images/arrow.svg';;
import AddWater from '../../../assets/images/addwater.svg';
import GradientLine from '../../components/DashBoard/GradientLine';
import Back from '../../../assets/icons/Back.svg'
import Setting from '../../../assets/icons/Setting.svg';
import SolidContainer from '../../components/container/SolidContainer';
import TextH4 from '../../components/Text/TextH4';


const {width,height}=Dimensions.get("window");
const WaterDrink = () => {
    return (
        <View style={styles.containr}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width,paddingHorizontal:20}}>
                <View style={{flexDirection:"row",alignContent:"center"}}>
                    <SolidContainer containerStyle={styles.solidContainerStyle}>
                        <Back width={16} height={16}/>
                    </SolidContainer>
                    <View style={{marginLeft:15}}>
                        <TextH4 >Drink Water</TextH4>
                        <SmallText >Today</SmallText>
                    </View>
                </View>
                <SolidContainer containerStyle={styles.solidContainerStyle}>
                    <Setting width={16} height={16}/>
                </SolidContainer>
            </View>
            <View style={{width,height:width/2,alignItems:"center",justifyContent:"center"}}>
                <CircleBar radius={100} strokeWidth={30} gradientColors={['#C58BF2', '#B4C0FE',]} percentage={50} />
            </View>
            <View style={styles.bottomIcons}>
                <View style={styles.verticalIconsWater}>
                    <Array width={40} height={40}/>
                    <AddWater width={40} height={56}/>
                    <SmallText style={styles.waterVolume}>15 ml</SmallText>
                </View>
                <View style={styles.waterIcons}>
                    <Mug width={40} height={40}/>
                    <Glass width={34} height={44}/>
                    <BKbottle width={20} height={44}/>
                </View>
                <View style={{alignItems:"center"}}>
                    <View style={{alignItems:"center"}}>
                        <SmallText style={styles.textStyles}>Week</SmallText>
                        <GradientLine/>
                    </View>
                    <SmallText style={styles.weekRange}>Jun 18 - Jun 24</SmallText>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    containr:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-around"
    },
    textStyles:{
        fontWeight:"800",
        fontSize:16,
        color:"rgba(29, 22, 23, 1)",
        textAlign:"center"
    },
    weekRange:{
        fontWeight:"500",
        fontSize:14,
        color:"rgba(123, 111, 114, 1)",
        textAlign:"center",
        marginTop:20
    },
    waterIcons:{
        flexDirection:"row",
        width:width,
        alignItems:"center",
        justifyContent: 'space-between',
        margin: 20,
        paddingHorizontal:50
    },
    verticalIconsWater:{
        alignItems:"center",
        justifyContent:"space-between",
        height:width/2.5,
    },
    waterVolume:{
        color:"rgba(173, 164, 165, 1)",
        fontWeight:"400",
        fontSize:14
    },
    bottomIcons:{
        height:height/2.3,
        justifyContent:"space-around"
    },
    solidContainerStyle:{
        borderRadius:10,
        width:32,
        height:32,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default WaterDrink
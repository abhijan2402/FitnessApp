import { View,StyleSheet } from 'react-native'
import React from 'react'

import ThreeDot from '../../../assets/icons/threedot.svg';
import TextH4 from '../Text/TextH4';
import SmallText from '../Text/SmallText';
import GradientSwitch from '../common/GradientSwitch';

const SleepScheduleCard = ({title,timeat,icon,time}) => {
    return (
        <View style={styles.cardBody}>
            <View style={{flexDirection:"row",alignItems:"center",}}>
                {
                    icon
                }
                <View style={{marginLeft:10}}>
                    <View style={{flexDirection:"row",alignItems:"center",}}>
                        <TextH4 style={styles.cardTitle}>
                            {`${title},`}
                        </TextH4>
                        <SmallText>{time}</SmallText>
                    </View>
                    <SmallText style={styles.timeat}>{timeat}</SmallText>
                </View>
            </View>
            <View style={{justifyContent:'space-between',alignItems:"flex-end",height:"100%"}}>
                <ThreeDot width={25} height={25}/>
                <GradientSwitch/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    cardBody:{
        width:'98%',
        backgroundColor:"white",
        marginVertical:20,
        padding:15,
        justifyContent:"space-between",
        flexDirection:"row",
        borderRadius:20,
        zIndex:1,
        alignSelf:"center",
        elevation:2,
        height:100,
    },
    cardTitle:{
        fontSize:15,
        marginRight: 5,
    },
    timeat:{
        fontSize:16,
        fontWeight:"500"
    }
})
export default SleepScheduleCard
import React from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';

import DataContainer from './DataContainer';
import TextMedium from '../Text/TextMedium';
import SmallText from '../Text/SmallText';
import SwitchIconButton from '../Button/SwitchIconButton';
import NoNotification from '../../../assets/icons/no_notification.svg';
import Notification from '../../../assets/icons/Notification.svg';

function MealContainer({containerStyle,img,imgStyle,title="",date="", time=""}) {
    return (
        <DataContainer containerStyle={{...styles.container,...containerStyle}}>
            <Image source={img} style={imgStyle}/>
            <View style={styles.info}>
                <TextMedium>{title}</TextMedium>
                <SmallText>{date} | {time}</SmallText>
            </View>
            <SwitchIconButton
            icon1={<Notification width={20} height={20}/>}
            icon2={<NoNotification width={20} height={20}/>}
            />
        </DataContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12
    },
    
    info:{
        marginLeft:15,
        flexGrow:1
    }
})
export default MealContainer;
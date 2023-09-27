import React from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';

import DataContainer from './DataContainer';
import SwitchIconButton from '../Button/SwitchIconButton';
import NoNotification from '../../../assets/icons/no_notification.svg';
import Notification from '../../../assets/icons/Notification.svg';
import SplitHeading from '../Text/SplitHeading';

function MealContainer({containerStyle,img,title="",date="", time="",onpress}) {
    return (
        <DataContainer onPress={onpress} containerStyle={{...styles.container,...containerStyle}}>
            <Image
        source={img}
        style={styles.imgStyle}
      />
            <SplitHeading title={title} subtitle1={date} subtitle2={time} containerStyle={{marginLeft:15}}/>
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
    
    imgStyle: {
        width: 40,
        height: 40,
    }
    
})
export default MealContainer;
import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import ScreenContainer from '../../components/container/ScreenContainer';

import { MONTHS } from '../../constants/Data';
import { useState } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import TextCenterHeader from '../header/TextCenterHeader';
import BackSvg from '../../../assets/icons/ArrowLeft.svg';
import LoadMoreSvg from '../../../assets/icons/MoreSquare.svg';
import TextMedium from '../../components/Text/TextMedium';
import TimePicker from '../../components/Utils/TimePicker';
import BedSvg from '../../../assets/icons/Icon-Bed.svg';
import PickerLabel from '../../components/Label/PickerLabel';

function getFormattedTime(value){
    return value < 10 ? `0${value}`:value;
}
function Reminders(props) {
    const [bedTime,setBedTime] = useState({hr:'12',min:'0'})
    return (
       <ScreenContainer flex={1}>
        
            <TextCenterHeader
            icon1={<BackSvg width={20} height={20}/>}
            icon2={<LoadMoreSvg width={20} height={20}/>}
            title='Reminders'
            />
            <View style={styles.content}>
                <TextMedium style={{marginBottom:10}}>Choose a Bedtime</TextMedium>
                <TimePicker
                setTime={setBedTime}
                label={<PickerLabel title={`BedTime ${getFormattedTime(bedTime.hr)}:${getFormattedTime(bedTime.min)}`} icon={<BedSvg width={20} height={20}/>}/>}
                />
            </View>
            <PrimaryButton
            title={'Add'}
            />
       </ScreenContainer>
    );
}
const styles = StyleSheet.create({
    content:{
        flexGrow:1
    },
    
})
export default Reminders;
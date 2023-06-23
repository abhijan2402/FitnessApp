import React from 'react';
import { View,StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/ScreenContainer';
import BackSvg from '../../../assets/icons/ArrowLeft.svg';
import LoadMoreSvg from '../../../assets/icons/MoreSquare.svg';
import { FONTS } from '../../constants/Fonts';

import Calender from '../../../assets/icons/Calendar.svg';
import { MONTHS } from '../../constants/Data';
import { useState } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import DropdownPicker from '../../components/Utils/DropdownPicker';
import TextCenterHeader from '../header/TextCenterHeader';

function Comparison(props) {
    const [month1,setMonth1] = useState('');
    const [month2,setMonth2] = useState(MONTHS[(new Date().getMonth())]);
    
    function getOnlyPreviousMonth(includeLast=true){
        const index = MONTHS.indexOf(month2);
        return MONTHS.slice(0,includeLast?index + 1:index)
    }
    
    
    
    return (
       <ScreenContainer flex={1}>
            <TextCenterHeader
            icon1={<BackSvg width={20} height={20}/>}
            icon2={<LoadMoreSvg width={20} height={20}/>}
            title='Comparison'
            />
            <View style={styles.content}>
                    <DropdownPicker
                    data={getOnlyPreviousMonth(false)} 
                    value={month1} 
                    setValue={setMonth1}
                    placeholder='Choose Month 1'
                    icon={<Calender width={20} height={20}/>}
                    />
                    <DropdownPicker
                    data={getOnlyPreviousMonth()} 
                    value={month2} 
                    setValue={setMonth2}
                    placeholder='Choose Month 2'
                    icon={<Calender width={20} height={20}/>}
                    />
            </View>
            <PrimaryButton
            title={'Compare'}
            />
       </ScreenContainer>
    );
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
    },
    content:{
        flexGrow:1
    },
    headingText:{
        flexGrow:1,
        color:'black',
        textAlign:'center',
        fontFamily:FONTS.FONT_POPPINS_BOLD
    }
})
export default Comparison;
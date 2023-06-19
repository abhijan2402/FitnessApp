import React from 'react';
import { View,StyleSheet } from 'react-native';
import SmallText from './SmallText';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colors';

function PairText({containerStyle,heading="",subHeading="",headingStyle,subHeadingStyle}) {
    return (
        <View style={[styles.container,containerStyle]}>
            <SmallText style={{...styles.heading,...headingStyle}}>{heading}</SmallText>
            <SmallText style={{...styles.subHeading,...subHeadingStyle}}>{subHeading}</SmallText>
        </View>
    );
}
const styles = StyleSheet.create({
    heading:{
        fontSize:13,
        fontFamily:FONTS.FONT_POPPINS_MEDIUM,
        color:'black',
        marginBottom:5
    },
    subHeading:{
        fontSize:13,
        fontFamily:FONTS.FONT_POPPINS_SEMIBOLD,
        color:COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1
    }
})
export default PairText;
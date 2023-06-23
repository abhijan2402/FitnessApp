import React from 'react';
import { View,StyleSheet } from 'react-native';
import SolidContainer from '../../components/container/SolidContainer';
import LargeText from '../../components/Text/LargeText';
import { FONTS } from '../../constants/Fonts';


function TextCenterHeader({icon1,icon2,title="",textStyle,containerStyle,headerContainerStyle}) {
    return (
        <View style={[styles.header,headerContainerStyle]}>
                {icon1 && 
                <SolidContainer containerStyle={{width:40,height:40,borderRadius:10,...containerStyle}}>
                    {icon1}
                </SolidContainer>
                }
                <LargeText style={{...styles.headingText,...textStyle}}>{title}</LargeText>
                {icon2 && 
                <SolidContainer containerStyle={{width:40,height:40,borderRadius:10,...containerStyle}}>
                    {icon2}
                </SolidContainer>
                }
                
        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
    },
    headingText:{
        flexGrow:1,
        color:'black',
        textAlign:'center',
        fontFamily:FONTS.FONT_POPPINS_BOLD
    }
})
export default TextCenterHeader;
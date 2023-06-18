import React from 'react';
import { View,StyleSheet,Image, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { FONTS } from '../../constants/Fonts';
import { SIZES } from '../../constants/Size';
function Input({value,onChangeText}) {
    return (
        <View style={styles.container}>
            {/* <SvgUri
            width="100%"
            height="100%"
            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
            /> */}
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Write Something'
                value={value}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:65,
        backgroundColor:'grey',
        justifyContent:'center',
        overflow:'hidden',
        borderRadius:10,
        backgroundColor:'#F7F8F8'
    },
    input:{
        width:'90%',
        height:65,
        fontFamily:FONTS.FONT_POPPINS_MEDIUM,
        fontSize:15
    }
})
export default Input;
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LargeText from '../Text/LargeText'
import SmallText from '../Text/SmallText'
import { FONTS } from '../../constants/Fonts'
import { SCREENS } from '../../constants/Screens'
import { useNavigation } from '@react-navigation/native'

const DIfferentBWContainer = ({ moreInfo, title, time, icon }) => {
    const navigation = useNavigation();
    console.log('moreInfo before navigation:', moreInfo);

    return (
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.WORLOUTINFO, {moreInfo})} style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white", elevation: 3, marginVertical: 15, marginHorizontal: "5%", borderRadius: 15, padding: "3%" }}>
            {icon}
            <View style={{ marginLeft: "5%" }}>
                <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_BOLD, color: 'black', marginBottom: "4%" }}>{title}</LargeText>
                <SmallText>{time}</SmallText>
            </View>
        </TouchableOpacity>
    )
}

export default DIfferentBWContainer

const styles = StyleSheet.create({})
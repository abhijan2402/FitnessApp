import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import ArrowRight from '../../../assets/icons/ArrowRight.svg'
import LargeText from '../Text/LargeText'
import { FONTS } from '../../constants/Fonts'
import SmallText from '../Text/SmallText'
import TextMedium from '../Text/TextMedium'
const ExerciseInfoCard = ({ title, img, Time }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: "5%" }}>
            <Image source={img} style={{ width: 60, height: 60 }} />
            <View style={{ width: "70%", marginLeft: "3%", }}>
                <LargeText style={{ fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, color: "black" }}>{title}</LargeText>
                <TextMedium>{Time}</TextMedium>
            </View>
            <ArrowRight width={24} height={24} />
        </View>
    )
}

export default ExerciseInfoCard

const styles = StyleSheet.create({})
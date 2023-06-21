import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import TextH4 from '../Text/TextH4'
import WhiteGraph from '../../../assets/icons/WhiteGraph.svg'
import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';
const { width, height } = Dimensions.get('window');
const SleepMeasureCard = ({ title, SleepTime }) => {
    return (
        <View style={{ backgroundColor: COLORS.PRIMARY_BUTTON_GRADIENT.BLUE1, marginHorizontal: 10, borderRadius: 15, }}>
            <View style={{ marginHorizontal: 15, marginVertical: 8 }}>
                <TextH4 style={{ color: "white", FontSize: FONTS.FONT_POPPINS_REGULAR }}>{title}</TextH4>
                <TextH4 style={{ color: "white", FontSize: FONTS.FONT_POPPINS_REGULAR }}>{SleepTime}</TextH4>
            </View>
            <WhiteGraph width={width} height={100} />
        </View>

    )
}

export default SleepMeasureCard

const styles = StyleSheet.create({})
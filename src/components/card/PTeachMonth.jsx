import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import { FONTS } from '../../constants/Fonts';
const { width, height } = Dimensions.get('window');

const PTeachMonth = () => {
    return (
        <View style={styles.Container}>
            <View style={{ width: "55%", marginHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: "black", fontFamily: FONTS.FONT_POPPINS_SEMIBOLD }}>Track Your Progress Each Month With    <Text style={{ color: "red" }}>Photo</Text></Text>
                <View style={{ marginVertical: 10, marginTop: 15 }}>
                    <PrimaryButton title={"Learn More"} containerStyle={{ height: 35, width: width / 3.5 }} textStyle={{ fontSize: 13, }} />
                </View>
            </View>
            <Image source={require('../../../assets/images/Calender.png')} style={styles.Calender} />
        </View >
    )
}

export default PTeachMonth

const styles = StyleSheet.create({
    Calender: {
        width: 116,
        height: 76
    },
    Container: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15,
        marginVertical: 20,
        alignItems: "center",
        backgroundColor: "rgba(157,206,255,0.2)",
        elevation: 10,
        shadowColor: "rgba(137,210,245,0.2)"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotifImage from '../../../assets/icons/NotifImage.svg'
import { FONTS } from '../../constants/Fonts'
import PrimaryButton from '../Button/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../constants/Screens'
const ProfileTop = ({ name, Program }) => {
    const navigation=useNavigation();

    return (
        <View style={styles.Container}>
            <NotifImage width={50} height={50} />
            <View style={styles.NotifText}>
                <Text style={{ fontSize: 14, fontFamily: FONTS.FONT_POPPINS_BOLD, color: "black" }}>{name}</Text>
                <Text style={{ fontSize: 12, fontFamily: FONTS.FONT_POPPINS_MEDIUM, color: "grey" }}>{Program}</Text>
            </View>
            <View style={{ width: "25%", }}>
                <PrimaryButton onPress={()=>navigation.navigate(SCREENS.EDITPROFILE)} title={'Edit'} containerStyle={{ height: 30, dispaly: "flex", alignItems: "center" }} />
            </View>
        </View>
    )
}

export default ProfileTop

const styles = StyleSheet.create({
    Container: {
        dispaly: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20
    },
    NotifText: {
        width: "55%",
        // borderWidth: 1,
        marginLeft: 10
    }
})
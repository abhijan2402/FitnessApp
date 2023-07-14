import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/Button/PrimaryButton';
import Input from '../../components/Form/Input';
import SmallText from '../../components/Text/SmallText';
import TextH4 from '../../components/Text/TextH4';
import Email from '../../../assets/icons/email.svg';
import Eye from '../../../assets/icons/eye.svg';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { SCREENS } from '../../constants/Screens';
const { width, height } = Dimensions.get('window');
const Otp = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.MainView}>
            <View style={styles.Heading}>
                <SmallText style={{ fontWeight: "700", color: "black", fontSize: 16, }}>Hey there,</SmallText>
                <TextH4 style={{ marginTop: 7 }}>Welcome Back</TextH4>
            </View>
            <View style={{ width: "85%", marginTop: 7 }}>
                <Input value={"Phone"} onChangeText={(value) => { console.log(value) }} icon={<Email width={20} height={20} />} />
            </View>
            <SmallText style={{ textAlign: "center", marginVertical: 20, color: "#343965" }}>Verification Code</SmallText>
            <View style={styles.InputOTP}>
                <TextInput placeholderTextColor='grey' style={styles.OTPInput} />
                <TextInput placeholderTextColor='grey' style={styles.OTPInput} />
                <TextInput placeholderTextColor='grey' style={styles.OTPInput} />
                <TextInput placeholderTextColor='grey' style={styles.OTPInput} />
                <Eye width={18} height={18} />
            </View>
            <SmallText style={{ textAlign: "center", marginTop: "7%" }}>You can request the next code in 49 seconds</SmallText>
            <View style={{ alignItems: "center", marginTop: "45%" }}>
                <PrimaryButton containerStyle={{ width: width - 30, }} title={'Login'} onPress={()=>navigation.navigate(SCREENS.REGISTER)}/>
            </View>
            <Text style={{ marginTop: "14%" }}>Or</Text>
            <View style={[styles.IconView, { marginTop: "5%" }]}>
                <View style={styles.iconContainer}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/300/300221.png" }} style={styles.icon} />
                </View>
                <View style={styles.iconContainer}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/4922/4922978.png" }} style={styles.icon} />
                </View>
            </View>
            <Pressable onPress={()=>navigation.navigate(SCREENS.REGISTER)}  style={[styles.IconView, { alignItems: "center" }]}>
                <SmallText style={{ fontSize: 14 }}>Don't have an account yet?</SmallText>
                <TextH4 style={{ fontSize: 14, color: "#C58BF2", marginLeft: 5 }}>Register</TextH4>
            </Pressable>
        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    MainView: {
        flex:1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center"
    },
    Heading: {
        height: height / 9,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%"
    },
    icon: {
        width: 30,
        height: 30
    },
    IconView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15
    },
    iconContainer: {
        borderWidth: 1,
        borderColor: "#DDDADA",
        padding: 8,
        borderRadius: 8,
        marginHorizontal: 30
    },
    InputOTP: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginHorizontal: 10,
    },
    OTPInput: {
        borderRadius: 10,
        paddingHorizontal: 18,
        backgroundColor: "#ECF2FF"
    }
})
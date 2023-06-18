import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import TextH4 from '../Text/TextH4'
import SmallText from '../Text/SmallText';
import Input from '../Form/Input';
import PrimaryButton from '../Button/PrimaryButton';
const { width, height } = Dimensions.get('window');
const Otp = () => {
    return (
        <View style={styles.MainView}>
            <View style={styles.Heading}>
                <SmallText style={{ fontWeight: "700", color: "black", fontSize: 16, }}>Hey there,</SmallText>
                <TextH4>Welcome Back</TextH4>
            </View>
            <View style={{ width: "80%" }}>
                <Input value={"hi"} onChangeText={(value) => { console.log(value) }} />
            </View>
            <SmallText style={{ textAlign: "center", marginVertical: 20 }}>Verification Code</SmallText>
            <SmallText style={{ textAlign: "center" }}>You can request the next code in 49 seconds</SmallText>
            <PrimaryButton containerStyle={{ width: width - 30, marginTop: "20%" }} title={'Login'} onPress={() => console.log('Hello')} />

        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    MainView: {
        height: height,
        width: width,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center"
    },
    Heading: {
        height: height / 9,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    }
})
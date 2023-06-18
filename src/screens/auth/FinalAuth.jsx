import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import TextH4 from '../../components/Text/TextH4';
import SmallText from '../../components/Text/SmallText';
import PrimaryButton from '../../components/Button/PrimaryButton';
const { width, height } = Dimensions.get('window');
const FinalAuth = () => {
    return (
        <View style={{ width: width, height: height, backgroundColor: "white" }}>
            <View style={{ width: width, height: height / 2.2, marginTop: "10%" }}>
                <Image source={require('../../../assets/images/FinalAuthImage.png')} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ alignItems: "center", marginTop: "8%" }}>
                <TextH4>Welcome, Stefani</TextH4>
                <SmallText style={{ width: "60%", textAlign: "center", marginTop: 5 }}>You are all set now, let’s reach your goals together with us</SmallText>
            </View>
            <View style={{ alignItems: "center", marginTop: "50%" }}>
                <PrimaryButton containerStyle={{ width: width - 30, }} title={'Go To Home'} onPress={() => console.log('Hello')} />
            </View>
        </View>
    )
}
export default FinalAuth;
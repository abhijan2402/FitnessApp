import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SlideHeader from '../../components/header/SlideHeader'
import TextH4 from '../../components/Text/TextH4'
import SmallText from '../../components/Text/SmallText'
import NewButtob from '../../components/Button/NewButtob'
import Male from '../../../assets/images/Male.svg'
import Female from '../../../assets/images/Female.svg'
import { Image } from 'react-native'

const SelectGender = () => {
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <SlideHeader />
            <View style={styles.ProfileView}>
                <TextH4 style={{ marginTop: "20%" }}>Which one are you?</TextH4>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around", marginTop: "20%" }}>
                    <Image source={require('../../../assets/images/Male1.png')} style={{ width: "40%" }} />
                    <Image source={require('../../../assets/images/Female1.png')} />
                </View>
                <SmallText style={{ width: "60%", textAlign: "center", marginVertical: "10%" }}>To give you a customize experience we need to know your gender</SmallText>
                <NewButtob title={"CHOOSE"} />
            </View>
        </View>
    )
}

export default SelectGender

const styles = StyleSheet.create({
    ProfileView: {
        alignItems: "center"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SlideHeader from '../../components/header/SlideHeader'
import TextH4 from '../../components/Text/TextH4'
import Input from '../../components/Form/Input'
import NewButtob from '../../components/Button/NewButtob'
const Occupation = () => {
    return (
        <View style={{ backgroundColor: "#F4F6FA", height: "100%" }}>
            <SlideHeader />
            <View style={{ alignItems: "center", marginVertical: 10 }}>
                <TextH4 style={{ marginVertical: "10%", width: "80%", textAlign: "center" }}>Occupation</TextH4>
                <Input
                    placeholder={"Developer"}
                    onChangeText={{}}
                    customStyle={{ width: "80%", marginVertical: 20, backgroundColor: "white", elevation: 5 }} />

                <NewButtob title={"Continue"} />
            </View>
        </View>
    )
}

export default Occupation

const styles = StyleSheet.create({
    InnerMain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15,
        marginBottom: "20%"
    },
    InnerMainView: {
        width: "20%",
        marginHorizontal: 20,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 11,

    }
})
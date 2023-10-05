import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SlideHeader from '../../components/header/SlideHeader'
import TextH4 from '../../components/Text/TextH4'
import Input from '../../components/Form/Input'
import NewButtob from '../../components/Button/NewButtob'

const FoodDiskike = () => {
    return (
        <View>
            <SlideHeader />
            <View style={{ alignItems: "center", marginVertical: 10 }}>
                <TextH4 style={{ marginTop: "30%" }}>Food you dislike</TextH4>
                <Input
                    placeholder={"Food Dislike"}
                    onChangeText={{}}
                    customStyle={{ width: "80%", marginVertical: 20, backgroundColor: "white", elevation: 5 }} />

                <NewButtob title={"Continue"} />
            </View>

        </View>
    )
}

export default FoodDiskike

const styles = StyleSheet.create({
    MainView: {
        borderWidth: 1
    }
})
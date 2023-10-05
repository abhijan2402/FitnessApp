import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SlideHeader from '../../components/header/SlideHeader'
import TextH4 from '../../components/Text/TextH4'
import TextMedium from '../../components/Text/TextMedium'
import SmallText from '../../components/Text/SmallText'
import NewButtob from '../../components/Button/NewButtob'

const ProfileImage = () => {
    const [ImageData, setImageData] = useState(data)
    const SelectedItem = (MainItem) => {
        setImageData(item =>
            item.map((value, index) => {
                if (value.id == MainItem.id) {
                    value.isSelected = true
                }
                else {
                    value.isSelected = false
                }
                console.log(value);
                return value
            }))

    }
    return (
        <View style={{ backgroundColor: "white" }}>
            <SlideHeader />
            <View style={styles.ProfileView}>
                <TextH4 style={{ marginTop: "30%" }}>Profile Image</TextH4>
                <ScrollView horizontal style={{ display: "flex", flexDirection: "row", marginVertical: 30 }}>
                    {
                        ImageData.map((item, index) => (
                            <TouchableOpacity onPress={() => { SelectedItem(item) }} style={{ padding: 20, borderRadius: 10, marginHorizontal: 10, backgroundColor: item.isSelected ? "#8FACFF" : "white", elevation: 4, marginVertical: 10 }}>
                                <Image source={item.image} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <SmallText style={{ width: "60%", textAlign: "center", marginVertical: "10%" }}>You can select photo from one of this emoji or add your own photo as profile picture</SmallText>
                <TextMedium style={{ color: "#7265E3", marginVertical: "10%" }} >Add Custom Photo</TextMedium>
                <NewButtob title={"SAVE"} />
            </View>
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    ProfileView: {
        alignItems: "center"
    }
})
const data = [
    {
        id: "1",
        image: require('../../../assets/images/Ghost.png'),
        isSelected: false
    },
    {
        id: "2",
        image: require('../../../assets/images/Monkey.png'),
        isSelected: false
    },
    {
        id: "3",
        image: require('../../../assets/images/Cat.png'),
        isSelected: false
    },
]
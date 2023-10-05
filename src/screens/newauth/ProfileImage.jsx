import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import SlideHeader from '../../components/header/SlideHeader'
import TextH4 from '../../components/Text/TextH4'
import TextMedium from '../../components/Text/TextMedium'
import SmallText from '../../components/Text/SmallText'
import NewButtob from '../../components/Button/NewButtob'
import { SCREENS } from '../../constants/Screens'
import { launchImageLibrary } from 'react-native-image-picker'
const { height, width } = Dimensions.get("window")

const ProfileImage = ({ navigation }) => {
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



    const [galleryPhoto, setGalleryPhoto] = useState();
    const [Photo, setPhoto] = useState(false)
    const [photoResult, setPhotoResult] = useState(null)
    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    }

    const OpenGallery = async () => {
        try {
            setPhoto(false)
            const result = await launchImageLibrary(options);
            const data = result.assets[0].uri;
            setPhotoResult((result && result.assets && result.assets[0]) ? result.assets[0] : null)
            setGalleryPhoto(data)
            setPhoto(true);
        } catch (error) {
            setPhotoResult(null)
            console.log(error, "error");
            setPhoto(false)
        }
    }
    return (
        <View style={{ backgroundColor: "white", height: height }}>
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
                <Image source={{ uri: galleryPhoto }} style={{ width: 100, height: 100, borderRadius: 70, borderWidth: 1 }} />
                <TouchableOpacity onPress={OpenGallery}>
                    <TextMedium style={{ color: "#7265E3", marginVertical: "10%" }} >Add Custom Photo</TextMedium>
                </TouchableOpacity>
                <NewButtob title={"SAVE"} onPress={() => { navigation.navigate(SCREENS.SELECTGENDER) }} />
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
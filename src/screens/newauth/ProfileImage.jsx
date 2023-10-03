import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SlideHeader from '../../components/header/SlideHeader'
import TextH4 from '../../components/Text/TextH4'
import TextMedium from '../../components/Text/TextMedium'
import SmallText from '../../components/Text/SmallText'
import NewButtob from '../../components/Button/NewButtob'

const ProfileImage = () => {
    return (
        <View>
            <SlideHeader />
            <View style={styles.ProfileView}>
                <TextH4>Profile Image</TextH4>
                <SmallText style={{ borderWidth: 1, width: "60%", textAlign: "center" }}>You can select photo from one of this emoji or add your own photo as profile picture</SmallText>
                <TextH4>ADD CUSTOM PHOTO</TextH4>
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
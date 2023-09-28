import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import FinsihWorkOut from '../../../assets/icons/FinishWorkOut.svg';
import TextH4 from '../../components/Text/TextH4';
import SmallText from '../../components/Text/SmallText';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { SCREENS } from '../../constants/Screens';
import { Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
const { width, height } = Dimensions.get('window');
import StarFill from '../../../assets/images/Star35.svg'
import Star from '../../../assets/images/Star37.svg'
import { TextInput } from 'react-native';


const FlnishMeal = ({ navigation }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [photoResult, setPhotoResult] = useState(null);
  const [galleryPhoto, setGalleryPhoto] = useState([]);

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
      let arr = []
      arr = [...galleryPhoto]
      arr.push(data)
      setGalleryPhoto(arr)
      setPhoto(true);
    } catch (error) {
      setPhotoResult(null)
      console.log(error, "error");
      setPhoto(false)
    }
  }

  return (
    <ScrollView style={{ width: width, height: height, backgroundColor: 'white' }}>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          galleryPhoto.length == 0 ? null : galleryPhoto.map((item, index) => (
            <View style={styles.imageContainer}>
              <View style={styles.imageBox}>
                <Image
                  style={styles.image}
                  source={{ uri: item }}
                />
              </View>
            </View>
          ))
        }

      </View>

      <View style={{ alignItems: 'center', marginTop: 22 }}>
        <PrimaryButton
          containerStyle={{ width: width - 30 }}
          title={'Upload photos'}
          onPress={OpenGallery}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: '10%' }}>
        <TextH4 style={{ textAlign: 'center' }}>
          Congratulations, You Have Finished Your Meal
        </TextH4>
        <SmallText style={{ width: '80%', textAlign: 'center', marginTop: 7 }}>
          Please feel free to share your food and review
        </SmallText>
        {/* <SmallText style={{ width: "80%", textAlign: "center", marginTop: 7, }}>-Jack Lalanne</SmallText> */}
      </View>
      <View style={styles.rating}>
        <StarFill />
        <StarFill />
        <Star />
        <Star />
        <Star />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <TextInput placeholder='Comment' multiline style={styles.commentBox} />
      </View>
      <View style={{ alignItems: 'center', marginTop: '10%' }}>
        <PrimaryButton
          containerStyle={{ width: width - 30 }}
          title={'Update Meal'}
          onPress={() => navigation.navigate(SCREENS.MEALHOME)}
        />
      </View>
    </ScrollView>
  );
};

export default FlnishMeal;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },

  imageBox: {
    backgroundColor: 'lightgray',
    height: 135,
    flexBasis: '30%',
    borderRadius: 55,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  rating: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 30,
    gap: 16
  },

  commentBox: {
    borderWidth: 1,
    borderColor: '#173430',
    height: 90,
    borderRadius: 20,
    padding: 10
  }
});

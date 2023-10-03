import { StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
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
import { Updatemeal } from '../../backend/utilFunctions';
import { TouchableOpacity } from 'react-native';


const FlnishMeal = ({ navigation, route }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [photoResult, setPhotoResult] = useState(null);
  const { mealid } = route.params
  // console.log(mealid, "i am mesl");
  const [galleryPhoto, setGalleryPhoto] = useState("");
  const [Comment, setComment] = useState("")
  const [Rating, setRating] = useState(Data)
  const [RatVal, setRatVal] = useState("")
  const [Photo, setPhoto] = useState(false)
  const [photoResult, setPhotoResult] = useState(null)
  const [MainImageVal, setMainImageVal] = useState([])
  const [Loader, setLoader] = useState(false)
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  }
  const OpenGallery = async () => {
    try {
      setPhoto(false)
      const result = await launchImageLibrary(options);
      console.log(result, "i am res");
      setMainImageVal(result)
      const data = result.assets[0].uri;
      setPhotoResult((result && result.assets && result.assets[0]) ? result.assets[0] : null)
      // let arr = []
      // arr = [...galleryPhoto]
      // arr.push(data)
      setGalleryPhoto(data)
      setPhoto(true);
    } catch (error) {
      setPhotoResult(null)
      console.log(error, "error");
      setPhoto(false)
    }
  }
  const UpdateMeal = () => {
    try {

      if (RatVal == "" || MainImageVal == "" || Comment == "") {
        alert("Please fill all the required data")
      }
      else {
        const Rat = JSON.stringify(RatVal)
        const finalimage = MainImageVal?.assets[0]
        const Image = { uri: finalimage.uri, name: finalimage.fileName, type: finalimage.type }
        const credentials = { Comment, Rat, Image };
        setLoader(true)
        Updatemeal(credentials, mealid)
          .then(res => {
            console.log(res, "i am res");
            setLoader(false)
            navigation.navigate(SCREENS.MEALHOME)
          })
          .catch(err => {
            console.log(err.message);
            setLoader(false)

          })
      }
    } catch (error) {
      console.log(error, "I am error");
      setLoader(false)
    }

  }
  const StarActive = (mainIndex, item) => {
    let i = 0;
    setRatVal(mainIndex)
    setRating(items =>
      items.map((value, index) => {
        if (index <= mainIndex) {
          value.isSelected = true;
        } else {
          value.isSelected = false;
        }
        return value;
      }),
    );
  }
  return (
    <ScrollView style={{ width: width, height: height, backgroundColor: 'white' }}>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
          // galleryPhoto?.length == 0 ? null : galleryPhoto.map((item, index) => (
          <View style={styles.imageContainer}>
            <View style={styles.imageBox}>
              <Image
                style={styles.image}
                source={{ uri: galleryPhoto }}
              />
            </View>
          </View>
          // ))
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
        {
          Rating.map((item, index) => (
            <TouchableOpacity onPress={() => { StarActive(index, item) }}>
              {
                item.isSelected ? <StarFill /> :
                  <Star />
              }
            </TouchableOpacity>

          ))

        }
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <TextInput placeholder='Comment' multiline style={styles.commentBox} onChangeText={(val) => { setComment(val) }} />
      </View>
      <View style={{ alignItems: 'center', marginTop: '10%' }}>
        {
          Loader ? <ActivityIndicator size={22} color={"Blue"} /> :
            <PrimaryButton
              containerStyle={{ width: width - 30 }}
              title={'Update Meal'}
              onPress={() => { UpdateMeal() }}
            />
        }
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
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    justifyContent: "center"
  },

  imageBox: {
    backgroundColor: 'lightgray',
    height: 135,
    flexBasis: '50%',
    borderRadius: 10,
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


const Data = [
  {
    id: 0,
    isSelected: false
  },
  {
    id: 1,
    isSelected: false
  },
  {
    id: 2,
    isSelected: false
  },
  {
    id: 3,
    isSelected: false
  },
  {
    id: 4,
    isSelected: false
  },
]
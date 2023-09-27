import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import FinsihWorkOut from '../../../assets/icons/FinishWorkOut.svg';
import TextH4 from '../../components/Text/TextH4';
import SmallText from '../../components/Text/SmallText';
import PrimaryButton from '../../components/Button/PrimaryButton';
import {SCREENS} from '../../constants/Screens';
import {Image} from 'react-native';
const {width, height} = Dimensions.get('window');

const FlnishMeal = ({navigation}) => {
  return (
    <View style={{width: width, height: height, backgroundColor: 'white'}}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/icecream.png')}
          />
        </View>

        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/icecream.png')}
          />
        </View>

        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/icecream.png')}
          />
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 22}}>
        <PrimaryButton
          containerStyle={{width: width - 30}}
          title={'Upload photos'}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <TextH4 style={{textAlign: 'center'}}>
          Congratulations, You Have Finished Your Meal
        </TextH4>
        <SmallText style={{width: '80%', textAlign: 'center', marginTop: 7}}>
          Please feel free to share your food and review
        </SmallText>
        {/* <SmallText style={{ width: "80%", textAlign: "center", marginTop: 7, }}>-Jack Lalanne</SmallText> */}
      </View>
      <View style={{alignItems: 'center', marginTop: '30%'}}>
        <PrimaryButton
          containerStyle={{width: width - 30}}
          title={'Back To Home'}
          onPress={() => navigation.navigate(SCREENS.MEALHOME)}
        />
      </View>
    </View>
  );
};

export default FlnishMeal;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: height / 8,
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
});

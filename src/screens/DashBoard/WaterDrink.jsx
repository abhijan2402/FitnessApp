import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import CircleBar from '../../components/DashBoard/CircleBar';
import SmallText from '../../components/Text/SmallText';

import Mug from '../../../assets/images/mug.svg';
import Glass from '../../../assets/images/waterglass.svg';
import BKbottle from '../../../assets/images/bottlebk.svg';
import Array from '../../../assets/images/arrow.svg';
import AddWater from '../../../assets/images/addwater.svg';
import GradientLine from '../../components/DashBoard/GradientLine';
import Back from '../../../assets/icons/Back.svg';
import Setting from '../../../assets/icons/Setting.svg';
import SolidContainer from '../../components/container/SolidContainer';
import TextH4 from '../../components/Text/TextH4';

import glass1 from '../../../assets/images/glass1.png';
import boots1 from '../../../assets/images/boots1.png';
import {ScrollView} from 'react-native';
import CustomDatePicker from '../../components/common/CustomDatePicker';
import LinearGradient from 'react-native-linear-gradient';
import {SCREENS} from '../../constants/Screens';
import {TouchableOpacity} from 'react-native';
import LatestPic from '../../../assets/images/Latest-Pic.svg';
import ThreeDot from '../../../assets/icons/threedot.svg';

const {width, height} = Dimensions.get('window');
const WaterDrink = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.containr}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width,
            paddingHorizontal: 20,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', alignContent: 'center'}}>
            <SolidContainer containerStyle={styles.solidContainerStyle}>
              <Back width={16} height={16} />
            </SolidContainer>
            <View style={{marginLeft: 15}}>
              <TextH4>Drink Water</TextH4>
              <SmallText>Today</SmallText>
            </View>
          </View>
          <SolidContainer containerStyle={styles.solidContainerStyle}>
            <Setting width={16} height={16} />
          </SolidContainer>
        </View>

        <CustomDatePicker showMonth={false} />

        <View style={{marginTop: 30}}>
          <View style={[styles.targets]}>
            <Text
              style={{
                color: '#1D1617',
                margin: 10,
                marginBottom: 16,
                fontWeight: '600',
              }}>
              Todays Target
            </Text>
            <View style={[styles.targetItems]}>
              <View style={[styles.targetItem]}>
                <View style={[styles.targetItemMain]}>
                  <Image source={glass1} />
                </View>
                <View>
                  <Text style={styles.targetText1}>8 L</Text>
                  <Text style={styles.targetText2}>Water Intake</Text>
                </View>
              </View>
              <View style={[styles.targetItems]}>
                <View style={[styles.targetItem]}>
                  <View style={[styles.targetItemMain]}>
                    <Image
                      //   style={{height: 40}}
                      source={boots1}
                    />
                  </View>
                  <View>
                    <Text style={styles.targetText1}>10,000</Text>
                    <Text style={styles.targetText2}>Foot Steps</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.dailystepsText]}>
          <Text style={[styles.walk40percent]}>
            You have walked{'\n'} <Text style={{color: '#7265E3'}}>40% </Text>of
            your Target
          </Text>
        </View>

        <View
          style={{
            width,
            height: width / 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <CircleBar
            radius={100}
            strokeWidth={30}
            gradientColors={['#C58BF2', '#B4C0FE']}
            percentage={50}
          />
        </View>
        <View style={styles.bottomIcons}>
          <View style={styles.verticalIconsWater}>
            <Array width={40} height={40} />
            <AddWater width={40} height={56} />
            <SmallText style={styles.waterVolume}>15 ml</SmallText>
          </View>
          <View style={styles.waterIcons}>
            <Mug width={40} height={40} />
            <Glass width={34} height={44} />
            <BKbottle width={20} height={44} />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <SmallText style={styles.textStyles}>Week</SmallText>
              <GradientLine />
            </View>
            <SmallText style={styles.weekRange}>Jun 18 - Jun 24</SmallText>
          </View>
        </View>

        <View style={{gap: 20, paddingHorizontal: 20, marginBottom: 20}}>
          <Card
            shadow={true}
            mesure="Drinking 300ml Water"
            time="About 3 minutes ago"
          />
          <Card mesure="Drinking 100ml Water" time="About 10 minutes ago" />
          <Card
            shadow={true}
            mesure="Drinking 300ml Water"
            time="About 3 minutes ago"
          />
          <Card mesure="Drinking 500ml Water" time="About 10 minutes ago" />
        </View>

        <View style={{justifyContent: 'center', marginTop: 10}}>
          <View
            style={{
              backgroundColor: '#92A3FD',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
              width: width - 40,
            }}>
            <View
              style={{
                backgroundColor: '#8C80F8',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 57.562,
              }}>
              <Text style={styles.stepsText}>OCT</Text>
              <Text style={styles.stepsText1}>13</Text>
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 600}}>Most steps</Text>
              <Text>Friday</Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 600}}>
                13,450
              </Text>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center', marginTop: 10}}>
          <View
            style={{
              backgroundColor: '#92A3FD',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
              width: width - 40,
            }}>
            <View
              style={{
                backgroundColor: '#8C80F8',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 57.562,
              }}>
              <Text style={styles.stepsText}>OCT</Text>
              <Text style={styles.stepsText1}>10</Text>
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 600}}>Least steps</Text>
              <Text>Tuesday</Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 600}}>
                13,450
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginTop: 10,
            marginVertical: 30,
          }}>
          <LinearGradient
            style={{
              padding: 10,
              borderRadius: 50,
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginTop: 50,
              width: width - 50,
            }}
            colors={['#92A3FD', '#9DCEFF']}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.DASHBOARD);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 17,
                }}>
                Back to Home
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const Card = ({mesure, time, shadow}) => (
  <View style={[styles.cardContainer, {elevation: shadow ? 12 : 0}]}>
    <LatestPic />

    <View>
      <Text style={styles.cardText1}>{mesure}</Text>
      <Text style={styles.cardText2}>{time}</Text>
    </View>

    <ThreeDot
      style={{position: 'absolute', right: 15, top: 15}}
      width={18}
      height={18}
    />
  </View>
);
const styles = StyleSheet.create({
  containr: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textStyles: {
    fontWeight: '800',
    fontSize: 16,
    color: 'rgba(29, 22, 23, 1)',
    textAlign: 'center',
  },
  weekRange: {
    fontWeight: '500',
    fontSize: 14,
    color: 'rgba(123, 111, 114, 1)',
    textAlign: 'center',
    marginTop: 20,
  },
  waterIcons: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    paddingHorizontal: 50,
  },
  verticalIconsWater: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width / 2.5,
  },
  waterVolume: {
    color: 'rgba(173, 164, 165, 1)',
    fontWeight: '400',
    fontSize: 14,
  },
  bottomIcons: {
    height: height / 2.3,
    justifyContent: 'space-around',
  },
  solidContainerStyle: {
    borderRadius: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  targets: {
    backgroundColor: '#dde1f8',
    paddingVertical: 22,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  targetItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  targetItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 15,
    padding: 5,
    paddingVertical: 20,
    justifyContent: 'space-evenly',

    width: (width - 105) / 2,
  },
  targetItemMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  targetText2: {
    color: '#7B6F72',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 20,
  },

  targetText1: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: '#9DCEFF',
  },

  dailystepsText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    fontSize: 14,
  },
  walk40percent: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '500',
    color: '#2D3142',
  },

  stepsText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  stepsText1: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.229,
    textTransform: 'uppercase',
  },

  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: width - 40,
    height: 80,
    alignItems: 'center',
    padding: 15,
    gap: 10,
    borderRadius: 16,
    position: 'relative',
  },

  cardText1: {
    color: '#1D1617',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },

  cardText2: {
    color: '#A4A9AD',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  }
});
export default WaterDrink;

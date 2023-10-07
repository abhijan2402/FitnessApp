import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import SlideHeader from '../../components/header/SlideHeader';
import TextH4 from '../../components/Text/TextH4';
import NewButtob from '../../components/Button/NewButtob';
import SmallText from '../../components/Text/SmallText';
import LiftMan from '../../../assets/images/LiftMan.svg';
import Input from '../../components/Form/Input';
import { SCREENS } from '../../constants/Screens';
import { useRoute } from '@react-navigation/native';
const Weight = ({ navigation }) => {
  const route = useRoute();
  const values = route.params?.values;
  const [lbs, setlbs] = useState(true);
  const [kg, setkg] = useState(false);
  const [MainWeightVal, setMainWeightVal] = useState('');

  const tick = require('../../../assets/images/tick2.png');
  const pointer = require('../../../assets/images/pointer.png');
  const pressed = useSharedValue(false);
  const offset = useSharedValue(-50);
  const [counter, setCounter] = React.useState(50);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(event => {
      let newX = offset.value + event.changeX;

      runOnJS(value => {
        console.log('newX', newX);
      })(newX);

      // abc.value = abc.value  + (event.changeX * -1)

      // if(abc.value > -100 && abc.value<300){
      if (newX > -201 && newX < 0) {
        offset.value = newX;
        runOnJS(value => {
          setCounter(currentValue => currentValue + value * -1);
        })(event.changeX);
      }
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));


  const handlePress = () => {
    navigation.navigate(SCREENS.GOALWEIGHT, { values: { ...values, current_weight: MainWeightVal, weight: MainWeightVal } });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
      <SlideHeader />
      <LiftMan
        width={124}
        height={189}
        style={{ alignSelf: 'center', marginVertical: 20 }}
      />
      <View style={styles.ProfileView}>
        <TextH4 style={{ marginTop: '20%' }}>What is your current weight?</TextH4>
        <View style={styles.InnerMain}>
          <TouchableOpacity
            onPress={() => {
              setlbs(true);
              setkg(false);
            }}
            style={[
              styles.InnerMainView,
              { backgroundColor: lbs ? '#8C80F8' : 'white' },
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: lbs ? 'white' : 'black',
                fontWeight: '500',
              }}>
              lbs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setlbs(false);
              setkg(true);
            }}
            style={[
              styles.InnerMainView,
              { backgroundColor: kg ? '#8C80F8' : 'white' },
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: kg ? 'white' : 'black',
                fontWeight: '500',
              }}>
              kg
            </Text>
          </TouchableOpacity>
        </View>
        <Input
          placeholder={'Weight'}
          onChangeText={value => setMainWeightVal(value)}
          customStyle={{ width: "60%", marginVertical: 15 }}
          keyboardType='numeric'
        />
        {/* <GestureHandlerRootView style={styles.container}>
          <View style={styles.container}>
            <GestureDetector
              gesture={pan}
              style={{backgroundColor: 'yellow', flex: 1}}>
              <View>
                <Animated.View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundC2olor: 'red',
                    zIndex: 100,
                  }}
                />
                <Animated.View style={[styles.circle, animatedStyles]}>
                  <Image
                    source={tick}
                    style={{height: 20, width: '100%'}}
                    resizeMode="repeat"
                  />
                </Animated.View>
              </View>
            </GestureDetector>
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              alignItems: 'center',
              width: '100%',
              zIndex: -999,
              bottom: 20,
            }}>
            <Image source={pointer} style={{height: 40}} resizeMode="contain" />
            <Animated.Text>{counter} </Animated.Text>
          </View>
        </GestureHandlerRootView> */}

        <NewButtob title={'Continue'} onPress={handlePress} />
      </View>
    </ScrollView>
  );
};

export default Weight;

const styles = StyleSheet.create({
  ProfileView: {
    alignItems: "center"
  },
  InnerMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15
  },
  InnerMainView: {
    width: "20%",
    marginHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 11,

  }
})
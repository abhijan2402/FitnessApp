import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SlideHeader from '../../components/header/SlideHeader';
import Step from '../../components/new-auth/Step';
import NewButtob from '../../components/Button/NewButtob';
import {TextInput} from 'react-native';
import {Dimensions} from 'react-native';
import {SCREENS} from '../../constants/Screens';

const {width} = Dimensions.get('window');

const Name = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(SCREENS.NDOB);
  };
  return (
    <View style={styles.container}>
      <SlideHeader />
      <Step text="STEP 5/12" />
      <Text style={styles.heading}>Entre your Name</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <View
        style={{
          marginTop: 150,
          position: 'absolute',
          bottom: 40,
          width,
          alignItems: 'center',
        }}>
        <NewButtob onPress={handlePress} title={'Continue'} />
      </View>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    flex: 1,
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: '#fff',
    width: 283,
    marginTop: 30,
    elevation: 20,
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  input: {
    height: '100%',

    color: '#2D3142',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
    width: '100%',
  },

  heading: {
    color: '#2D3142',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    width: 281,
  },
});

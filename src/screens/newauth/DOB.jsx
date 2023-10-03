import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SlideHeader from '../../components/header/SlideHeader';
import Step from '../../components/new-auth/Step';
import NewButtob from '../../components/Button/NewButtob';
import {Dimensions} from 'react-native';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarNew from '../../../assets/images/calendar-new.svg';
import {getAge} from '../../utils/common';

const {width} = Dimensions.get('window');

const DOB = () => {
  const [date, setDate] = useState('dd/mm/yyyy');
  const [actualDate, setActualDate] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setActualDate(date);
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();
    const new_date = day + ' / ' + month + ' / ' + year;
    setDate(new_date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <SlideHeader />
      <Step text="STEP 6/12" />
      <Text style={styles.heading}>Entre your Date of birth</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.dateTxt}>{date}</Text>

        <TouchableOpacity onPress={showDatePicker} style={{padding: 8}}>
          <CalendarNew />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.ageContainer}>
        <Text style={styles.ageTxt}>
          {actualDate === null ? 0 : getAge(actualDate)}
        </Text>
      </View>
      <Text style={styles.age}>Age</Text>
      <View
        style={{
          marginTop: 150,
          position: 'absolute',
          bottom: 40,
          width,
          alignItems: 'center',
        }}>
        <NewButtob title={'Continue'} />
      </View>
    </View>
  );
};

export default DOB;

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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'space-between',
    paddingLeft: 64,
    paddingRight: 22,
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

  dateTxt: {
    color: '#173430',
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: -0.12,
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

  ageContainer: {
    width: 327,
    height: 71,
    borderRadius: 25,
    backgroundColor: 'rgba(146, 163, 253, 0.60)',
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ageTxt: {
    color: '#173430',
    textAlign: 'center',
    fontSize: 44,
    fontWeight: '700',
    letterSpacing: -0.44,
  },

  age: {
    color: '#7265E3',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.2,
    marginTop: 10
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import Header from '../../components/header/Header';
import ProfileCard from '../../components/profile/ProfileCard';
import Group from '../../../assets/icons/Group.svg';
import Age from '../../../assets/icons/Age.svg';
import Weight from '../../../assets/icons/Weight.svg';
import Height from '../../../assets/icons/Height.svg';
import Gender from '../../../assets/icons/Gender.svg';
import Edit from '../../../assets/icons/Edit.svg';
import {FONTS} from '../../constants/Fonts';
import {GlobalContext} from '../../../App';
import {formatDate, getAge} from '../../utils/common';
import {updateUser} from '../../backend/utilFunctions';
import CalenderPicker from '../../components/Utils/CalenderPicker';
import PickerLabel from '../../components/Label/PickerLabel';
import Calendar from '../../../assets/icons/Calendar.svg';
import UserSvg from '../../../assets/icons/User.svg';
import {FOOD_TYPE, GENDERS} from '../../constants/Data';
import DropdownPicker from '../../components/Utils/DropdownPicker';
import CustomToast from '../../components/common/Toast';
const {width, height} = Dimensions.get('window');

const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {user, setLoggedInUser} = useContext(GlobalContext);
  const [age, setAge] = useState(getAge(user.dob));
  const [weight, setWeight] = useState(user.weight);
  const [height, setHeight] = useState(user.height);
  const [gender, setGender] = useState(user.gender);
  const [foodType, setFoodType] = useState('');
  const [date, setDate] = useState(formatDate(user.dob));
  const [selectedInput, setSelectedInput] = useState('');
  const [loading, setLoading] = useState(false);
  const childRef = useRef(null);
  const [toastColorState, setToastColorState] = useState('');
  const [toastTextColorState, setToastTextColorState] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const UpdateData = () => {
    setLoading(true);
    // return console.log({...user, weight, height, gender})
    updateUser({...user, weight, height, gender, date})
      .then(res => {
        // update the global context
        setAge(getAge(date));
        setLoggedInUser({
          ...user,
          weight,
          height,
          gender,
          age,
        });

        console.log(res);
        setToastMessage(res.message);
        setToastTextColorState('white');
        setToastColorState('green');
        childRef.current.showToast();
      })
      .catch(error => {
        console.log(error);
        setToastMessage(error.message);
        setToastTextColorState('white');
        setToastColorState('red');
        childRef.current.showToast();

        setLoading(false);
      })
      .finally(() => {
        setModalVisible(false);
        setLoading(false);
      });
  };

  return (
    <View style={styles.Mainview}>
      <CustomToast
        toastColor={toastColorState}
        toastTextColor={toastTextColorState}
        toastMessage={toastMessage}
        ref={childRef}
      />
      <Header title={'Profile'} />
      <ScrollView>
        <View style={styles.profile}>
          <View style={{marginHorizontal: 30, marginTop: 30}}>
            <Text
              style={[
                {
                  fontSize: 15,
                  color: '#1D1617',
                  fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,
                },
              ]}>{`${user.first_name} ${user.last_name}`}</Text>
            <Text
              style={[
                {
                  fontSize: 13,
                  color: '#1D1617',
                  fontFamily: FONTS.FONT_POPPINS_REGULAR,
                },
              ]}>{`${user.email}`}</Text>
          </View>
          {/* <Edit style={{ marginTop: 35, marginHorizontal: 40 }} /> */}
        </View>

        <Text
          style={[
            {
              fontSize: 16,
              color: '#1D1617',
              fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,
              marginHorizontal: 40,
            },
          ]}>
          Your Information
        </Text>
        <View style={{marginVertical: 20, marginBottom: '20%'}}>
          <ProfileCard
            type={'Food Type'}
            value={'Vegan'}
            icon={<Group width={20} height={20} />}
            onPress={() => {
              setModalVisible(true);
              setSelectedInput('food');
            }}
          />
          <ProfileCard
            type={'Age'}
            value={`${age} yo`}
            icon={<Age width={20} height={20} />}
            onPress={() => {
              setModalVisible(true);
              setSelectedInput('age');
            }}
          />
          <ProfileCard
            type={'Weight'}
            value={`${weight} Kg`}
            icon={<Weight width={20} height={20} />}
            onPress={() => {
              setModalVisible(true);
              setSelectedInput('weight');
            }}
          />
          <ProfileCard
            type={'Height'}
            value={`${height} ft.`}
            icon={<Height width={20} height={20} />}
            onPress={() => {
              setModalVisible(true);
              setSelectedInput('height');
            }}
          />
          <ProfileCard
            type={'Gender'}
            value={gender}
            icon={<Gender width={20} height={20} />}
            onPress={() => {
              setModalVisible(true);
              setSelectedInput('gender');
            }}
          />
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {selectedInput === 'food' && (
                  <DropdownPicker
                    width={'80%'}
                    marginBottom={5}
                    data={FOOD_TYPE}
                    value={foodType}
                    setValue={setFoodType}
                    placeholder="Choose food type"
                    icon={<UserSvg width={20} height={20} />}
                  />
                )}

                {selectedInput === 'age' && (
                  <CalenderPicker
                    setDate={setDate}
                    width={'80%'}
                    label={
                      <PickerLabel
                        title={date ? date : 'Date of Birth'}
                        icon={<Calendar width={20} height={20} />}
                      />
                    }
                  />
                )}

                {selectedInput === 'weight' && (
                  <TextInput
                    placeholder="Weight (in kgs)"
                    placeholderTextColor={'grey'}
                    style={styles.InputFields}
                    onChangeText={value => setWeight(value)}
                    value={`${weight}`}
                    keyboardType="numeric"
                  />
                )}

                {selectedInput === 'height' && (
                  <TextInput
                    placeholder="Height (in ft.)"
                    placeholderTextColor={'grey'}
                    style={styles.InputFields}
                    keyboardType="numeric"
                    onChangeText={value => setHeight(value)}
                    value={`${height}`}
                  />
                )}

                {selectedInput === 'gender' && (
                  <DropdownPicker
                    width={'80%'}
                    marginBottom={5}
                    data={GENDERS}
                    value={gender}
                    setValue={setGender}
                    placeholder="Choose Gender"
                    icon={<UserSvg width={20} height={20} />}
                  />
                )}

                {loading ? (
                  <ActivityIndicator size={30} color={'blue'} />
                ) : (
                  <TouchableOpacity
                    style={styles.BtnUpdate}
                    onPress={UpdateData}>
                    <Text style={styles.BtnText}>Update Data</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={styles.BtnUpdate}
                  onPress={() => {
                    setModalVisible(false);
                    setSelectedInput('');
                    setGender(user.gender);
                    setHeight(user.height);
                  }}>
                  <Text style={styles.BtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  Mainview: {
    backgroundColor: 'white',
    height: height,
    width: width,
  },
  profile: {
    height: 118,
    width: 315,
    backgroundColor: '#ECEFFF',
    marginBottom: 30,
    borderRadius: 22,
    alignSelf: 'center',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  InputFields: {
    borderWidth: 1,
    width: '80%',
    marginVertical: '2%',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'black',
  },
  BtnUpdate: {
    width: '80%',
    borderRadius: 8,
    padding: 7,
    alignItems: 'center',
    backgroundColor: '#92A3FD',
    marginVertical: 5,
    paddingVertical: 10,
  },
  BtnText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '800',
  },
});

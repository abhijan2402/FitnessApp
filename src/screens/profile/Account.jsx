import { StyleSheet, Text, View, Dimensions, Alert, Modal, Pressable, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import Header from '../../components/header/Header';
import ProfileCard from '../../components/profile/ProfileCard'
import Group from '../../../assets/icons/Group.svg'
import Age from '../../../assets/icons/Age.svg'
import Weight from '../../../assets/icons/Weight.svg'
import Height from '../../../assets/icons/Height.svg'
import Gender from '../../../assets/icons/Gender.svg'
import Edit from '../../../assets/icons/Edit.svg'
import { FONTS } from '../../constants/Fonts';
import { GlobalContext } from '../../../App';
import { getAge } from '../../utils/common';
import { updateUser } from '../../backend/utilFunctions';
const { width, height } = Dimensions.get('window');
const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useContext(GlobalContext)
  const [age, setAge] = useState(getAge(user.dob))
  const [weight, setWeight] = useState(user.weight)
  const [height, setHeight] = useState(user.height)
  const [gender, setGender] = useState(user.gender)
  const [foodType, setFoodType] = useState("")
  const UpdateData = () => {
    updateUser({ ...user, weight, height, gender })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setModalVisible(false)
  }
  return (
    <View style={styles.Mainview}>
      <Header title={"Profile"} />
      <ScrollView>
        <View style={styles.profile}>
          <View style={{ marginHorizontal: 30, marginTop: 30 }}>
            <Text style={[{ fontSize: 15, color: "#1D1617", fontFamily: FONTS.FONT_POPPINS_SEMIBOLD }]}>{`${user.first_name} ${user.last_name}`}</Text>
            <Text style={[{ fontSize: 13, color: "#1D1617", fontFamily: FONTS.FONT_POPPINS_REGULAR }]}>{`${user.email}`}</Text>
          </View>
          {/* <Edit style={{ marginTop: 35, marginHorizontal: 40 }} /> */}
        </View>

        <Text style={[{ fontSize: 16, color: "#1D1617", fontFamily: FONTS.FONT_POPPINS_SEMIBOLD, marginHorizontal: 40 }]}>Your Information</Text>
        <View style={{ marginVertical: 20, marginBottom: "20%" }}>
          <ProfileCard type={"Food Type"} value={"Vegan"} icon={<Group width={20} height={20} />} onPress={() => setModalVisible(true)} />
          <ProfileCard type={"Age"} value={`${age} yo`} icon={<Age width={20} height={20} />} onPress={() => setModalVisible(true)} />
          <ProfileCard type={"Weight"} value={`${weight} Kg`} icon={<Weight width={20} height={20} />} onPress={() => setModalVisible(true)} />
          <ProfileCard type={"Height"} value={`${height} cm`} icon={<Height width={20} height={20} />} onPress={() => setModalVisible(true)} />
          <ProfileCard type={"Gender"} value={gender} icon={<Gender width={20} height={20} />} onPress={() => setModalVisible(true)} />
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
                <TextInput placeholder='Food Type (Vegan or Non vegan)' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setFoodType(value)} value={'N/A'} />
                <TextInput placeholder='Age (yr old)' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setAge(value)} value={`${age}`} />
                <TextInput placeholder='Weight (in kgs)' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setWeight(value)} value={`${weight}`} />
                <TextInput placeholder='Height (in cms)' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setHeight(value)} value={`${height}`} />
                <TextInput placeholder='Gender (Male or Female' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setGender(value)} value={gender} />
                <TouchableOpacity style={styles.BtnUpdate} onPress={UpdateData}>
                  <Text style={styles.BtnText}>Update Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnUpdate} onPress={() => setModalVisible(false)} >
                  <Text style={styles.BtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>

    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  Mainview: {
    backgroundColor: "white",
    height: height,
    width: width,
  },
  profile: {
    height: 118,
    width: 315,
    backgroundColor: "#ECEFFF",
    marginBottom: 30,
    borderRadius: 22,
    alignSelf: "center",
    marginTop: 20,
    display: "flex",
    flexDirection: "row"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    width: "90%",
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
    width: "80%",
    marginVertical: "2%",
    borderRadius: 8,
    paddingHorizontal: 10
  },
  BtnUpdate: {
    width: "80%",
    borderRadius: 8,
    padding: 7,
    alignItems: "center",
    backgroundColor: "#92A3FD",
    marginVertical: 5,
    paddingVertical: 10
  },
  BtnText: {
    fontSize: 14,
    color: "white",
    fontWeight: "800"
  }
})
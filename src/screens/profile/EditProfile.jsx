import { StyleSheet, Text, View, Dimensions, Alert, Modal, Pressable, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../components/header/Header'
import EditPro from '../../components/profile/EditPro'
import EditCard from '../../components/profile/EditCard'
import Shape from '../../../assets/icons/Shape.svg'
import Account from '../../../assets/icons/Account.svg'
import Email1 from '../../../assets/icons/Email1.svg'
import Pass from '../../../assets/icons/Pass.svg'
import Apple from '../../../assets/icons/Apple.svg'
import Google from '../../../assets/icons/Google.svg'
import PrimaryButton from '../../components/Button/PrimaryButton';
import { GlobalContext } from '../../../App'
import { updateUser } from '../../backend/utilFunctions'
const { height, width } = Dimensions.get("window")
const EditProfile = () => {
  const { user,setLoggedInUser } = useContext(GlobalContext)
  
  // actual data
  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName] = useState(user.last_name)
  // temp data
  const [tempFirstName,setTempFirstName] = useState(user.first_name);
  const [tempLastName,setTempLastName] = useState(user.last_name);
  // const [password, setPassword] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const UpdateData = () => {
    
    updateUser({ ...user, first_name: firstName, last_name: lastName })
    .then(()=>{
      setFirstName(tempFirstName)
      setLastName(tempLastName)
      // update the global context
      setLoggedInUser({...user,first_name:tempFirstName,lastName:tempLastName})
    })
    .catch((err)=>{
      // TODO: Make a alert toast for the error
      console.log(err)
    })
    .finally(()=>{
      setModalVisible(false)
    })
  }

  return (
    <>
      <ScrollView style={styles.MainView}>
        <Header title={"Edit Profile"} />
        <View style={styles.image}>
          <Shape height={100} width={100} />
        </View>
        <View>
          <EditPro value={firstName} icon={<Account width={18} height={18} Edit={"EditBtn"} />} />
          <EditPro value={lastName} icon={<Account width={18} height={18} Edit={"EditBtn"} />} />
          <EditPro value={user.email} icon={<Email1 width={18} height={18} Edit={"EditBtn"} />} />
          {/* <EditPro value={"Change Password"} icon={<Pass width={18} height={18} Edit={"EditBtn"} />} /> */}
        </View>
        <View style={styles.card}>
          <EditCard value={"Connect"} icon={<Apple width={18} height={18} />} />
          <EditCard value={"Connect"} icon={<Google width={18} height={18} />} />
        </View>
        <View style={{ alignItems: "center", marginTop: "25%" }}>
          <PrimaryButton containerStyle={{ width: width - 80, }} title={'Save Profile'} />
        </View>
        <View style={{ alignItems: "center", marginTop: "5%" }}>
          <PrimaryButton containerStyle={{ width: width - 80, }} title={'Edit Profile'} onPress={() => setModalVisible(true)} />
        </View>
      </ScrollView>

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
              <TextInput placeholder='First Name' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setTempFirstName(value)} value={tempFirstName} />
              <TextInput placeholder='Last Name' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setTempLastName(value)} value={tempLastName} />
              {/* <TextInput placeholder='Password (Optional)' placeholderTextColor={"grey"} style={styles.InputFields} onChangeText={value => setPassword(value)} /> */}
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
    </>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: "white",
    width: width,
    height: height,
  },
  image: {
    alignSelf: "center",
    marginVertical: 50,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
    paddingHorizontal: 10,
    color:"black"
  },
  BtnUpdate: {
    width: "80%",
    borderRadius: 8,
    padding: 7,
    alignItems: "center",
    backgroundColor: "#92A3FD",
    marginVertical: 5
  },
  BtnText: {
    fontSize: 14,
    color: "white",
    fontWeight: "800"
  }
})
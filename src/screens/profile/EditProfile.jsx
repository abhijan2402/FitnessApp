import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
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
const { height, width } = Dimensions.get("window")
const EditProfile = () => {
  return (
    <View style={styles.MainView}>
      <Header title={"Edit Profile"} />
      <View style={styles.image}>
        <Shape height={100} width={100} />
      </View>
      <View>
        <EditPro value={"Samtha"} icon={<Account width={18} height={18} />} />
        <EditPro value={"Email"} icon={<Email1 width={18} height={18} />} />
        <EditPro value={"Password"} icon={<Pass width={18} height={18} />} />
      </View>
      <View style={styles.card}>
        <EditCard value={"Connect"} icon={<Apple width={18} height={18} />} />
        <EditCard value={"Connect"} icon={<Google width={18} height={18} />} />
      </View>
      <View style={{ alignItems: "center", marginTop: "25%" }}>
        <PrimaryButton containerStyle={{ width: width - 80, }} title={'Save Profile'} />
      </View>
    </View>
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
  }
})
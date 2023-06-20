import { StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header';
import ProfileCard from '../../components/profile/ProfileCard'
import Group from '../../../assets/icons/Group.svg'
import Age from '../../../assets/icons/Age.svg'
import Weight from '../../../assets/icons/Weight.svg'
import Height from '../../../assets/icons/Height.svg'
import Gender from '../../../assets/icons/Gender.svg'
import Edit from '../../../assets/icons/Edit.svg'
import { FONTS } from '../../constants/Fonts';
const { width, height } = Dimensions.get('window');
const Account = () => {
  return (
    <View style={styles.Mainview}>
      <Header title={"Profile"} />
      <ScrollView>
      <View style={styles.profile}>
           <View style={{marginHorizontal:30,marginTop:30}}>
           <Text style={[{ fontSize: 15, color: "#1D1617", fontFamily: FONTS.FONT_POPPINS_SEMIBOLD }]}>Samantha Ruth</Text>
               <Text style={[{  fontSize: 13, color: "#1D1617", fontFamily: FONTS.FONT_POPPINS_REGULAR }]}>samantha123@gmail.com</Text>
           </View>
           <Edit style={{marginTop:35,marginHorizontal:40}}/>
      </View>
     
        <Text style={[{ fontSize: 16, color: "#1D1617", fontFamily: FONTS.FONT_POPPINS_SEMIBOLD,marginHorizontal:40}]}>Your Information</Text>
       <View style={{marginVertical:20}}>
       <ProfileCard type={"Food Type"} value={"Vegan"} icon={<Group width={20} height={20}/>}/>
      <ProfileCard type={"Age"} value={"23 yo"} icon={<Age width={20} height={20}/>}/>
      <ProfileCard type={"Weight"} value={"57 Kg"} icon={<Weight width={20} height={20}/>}/>
      <ProfileCard type={"Height"} value={"162 cm"} icon={<Height width={20} height={20}/>}/>
      <ProfileCard type={"Gender"} value={"Female"} icon={<Gender width={20} height={20}/>}/>
       </View>
      </ScrollView>
     
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    Mainview:{
        backgroundColor:"white",
        height:height,
        width:width,
    },
    profile:{
      height:118,
      width:315,
      backgroundColor:"#ECEFFF",
      marginBottom:30,
      borderRadius:22,
      alignSelf:"center",
      marginTop:20,
      display:"flex",
      flexDirection:"row"
    }
})
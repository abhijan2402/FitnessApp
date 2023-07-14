import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
const { width, height } = Dimensions.get('window');
const Button = () => {
  return (
    <View style={{backgroundColor:"#F7F8F8",height:60,width:315,borderRadius:99,alignSelf:"center",display:"flex",justifyContent:"center"}}>
    <View style={{marginLeft:20,display:"flex",flexDirection:"row"}}>
    <PrimaryButton containerStyle={{ width: width - 250,height:height-750, }} title={'Photo'} />
    <Text style={{color:"#ADA4A5",fontSize:16,marginLeft:40,marginTop:7}}>Statistic</Text>
    </View>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})
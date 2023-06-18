import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const {width}=Dimensions.get('window');

const GoalTopHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is your goal</Text>
            <Text style={styles.subTitle}>It will help us to choose a best{"\n"}program for you</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width,
        marginTop:40
    },  
    title:{
        color:"#1D1617",
        fontWeight:"700",
        lineHeight:30,
        fontSize:20,
        textAlign:"center",
    },
    subTitle:{
        color:"#7B6F72",
        fontWeight:"400",
        lineHeight:18,
        fontSize:12,
        textAlign:"center",
    }
})
export default GoalTopHeader
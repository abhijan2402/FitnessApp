import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextH4 from '../Text/TextH4'
import Check from '../auth/Check'
import TextMedium from '../Text/TextMedium'

const NewGoalCard = ({ title, icon, bacckground }) => {
    return (
        <View style={{ backgroundColor: bacckground, marginVertical: 10, borderRadius: 10, display: "flex", flexDirection: "row", width: "85%", alignItems: "center", paddingHorizontal: 15, paddingVertical: 20 }}>
            {
                icon
            }
            <TextMedium style={{ width: "70%", marginLeft: "5%", color: "white" }}>{title}</TextMedium>
            <Check />
        </View>
    )
}

export default NewGoalCard

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextMedium from '../Text/TextMedium'

const ExerciseItems = ({ icon, title }) => {
    return (
        <View style={{ margin: 10 }}>
            <View style={{ width: 130, height: 130, alignItems: "center", justifyContent: "center", borderRadius: 15, backgroundColor: "white", elevation: 5 }}>
                {icon}
            </View>
            <TextMedium style={{ margin: 5 }}>{title}</TextMedium>
        </View>
    )
}

export default ExerciseItems

const styles = StyleSheet.create({})
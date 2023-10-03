import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewButtob = ({ title }) => {
    return (
        <View style={styles.MainView}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>{title}</Text>
        </View>
    )
}

export default NewButtob

const styles = StyleSheet.create({
    MainView: {
        backgroundColor: "#92A3FD",
        width: "60%",
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 60,
        alignItems: "center"
    }
})
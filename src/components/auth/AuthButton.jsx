import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const AuthButton = ({title}) => {
    return (
        <TouchableOpacity style={styles.buttonbody}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonbody: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      flex: 1,
    },
  });
export default AuthButton
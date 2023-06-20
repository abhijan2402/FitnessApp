import React from 'react';
import { View,StyleSheet } from 'react-native';

function DataContainer({containerStyle,children}) {
    return (
        <View style={[styles.waterIntakeTracker,containerStyle]}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    waterIntakeTracker:{
        padding:15,
        borderRadius:15,
        backgroundColor:'white',
        elevation:3,  
        zIndex:1,
       
    },
})
export default DataContainer;
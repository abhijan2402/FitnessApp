import React from 'react';
import { View,StyleSheet } from 'react-native';

function SolidContainer({children,containerStyle}) {
    return (
        
            <View style={[styles.container,containerStyle]}>
                {children}
            </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        backgroundColor:'#F7F8F8',
        justifyContent:'center',
        alignItems:'center',
        
    }
})
export default SolidContainer;
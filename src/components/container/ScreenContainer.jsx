import React from 'react';
import { View,StyleSheet, ScrollView, Dimensions } from 'react-native';

function ScreenContainer({children,paddingTop,scroll=false,flex}) {
    if(scroll)
        return<ScrollView style={[styles.container,{paddingTop,flex}]}>{children}</ScrollView> 
    return (
        <View style={[styles.container,{paddingTop,flex}]}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'white',
    }
})
export default ScreenContainer;
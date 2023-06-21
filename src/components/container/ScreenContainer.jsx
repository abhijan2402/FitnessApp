import React from 'react';
import { View,StyleSheet, ScrollView } from 'react-native';

function ScreenContainer({children,paddingTop,scroll=false,width,padding}) {
    if(scroll)
        return<ScrollView style={[styles.container,{padding,paddingTop,width}]}>{children}</ScrollView> 
    return (
        <View style={[styles.container,{paddingTop}]}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'white'
    }
})
export default ScreenContainer;
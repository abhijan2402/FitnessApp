import React from 'react';
import { View,StyleSheet } from 'react-native';

function ScreenContainer({children,paddingTop}) {
    return (
        <View style={[styles.container,{paddingTop}]}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:30
    }
})
export default ScreenContainer;
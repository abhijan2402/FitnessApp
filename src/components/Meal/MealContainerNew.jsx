import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import DataContainer from '../container/DataContainer';
import TextMedium from '../Text/TextMedium';
import SmallText from '../Text/SmallText';

import CicrleArrowRight from '../../../assets/images/circulararrow.svg';
import GradientContainer from '../container/GradientContainer';
import { SCREENS } from '../../constants/Screens';
import { useNavigation } from '@react-navigation/native';

function MealContainerNew({ containerStyle, img, title = "", time = "", colors }) {

    const navigation = useNavigation();
    return (
        <DataContainer containerStyle={{ ...styles.container, ...containerStyle }}>
            <GradientContainer colors={colors} styles={{ borderRadius: 12, width: 70, height: 70, justifyContent: 'center', alignItems: "center" }}>
                <Image source={img} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
            </GradientContainer>
            <View style={styles.info}>
                <TextMedium>{title}</TextMedium>
                <SmallText>{time}</SmallText>
            </View>
            <CicrleArrowRight width={30} height={30} onPress={() => navigation.navigate(SCREENS.DIETDETAILS)} />
        </DataContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },

    info: {
        marginLeft: 15,
        flexGrow: 1
    }
})
export default MealContainerNew;
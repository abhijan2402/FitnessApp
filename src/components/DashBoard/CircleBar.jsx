import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
import GradientText from '../Text/GradientText';

const CircleBar = ({ radius, strokeWidth, gradientColors,percentage  }) => {
    const center = radius + strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (circumference * percentage) / 100;

    return (
        <View style={{width:"100%",height:"90%",alignItems:"center",justifyContent:"center"}}>
            <Svg style={{marginLeft:15,}} width={2.5 * radius} height={2.5 * radius}>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        {gradientColors.map((color, index) => (
                            <Stop key={index} offset={`${(index * 100) / (gradientColors.length - 1)}%`} stopColor={color} />
                        ))}
                    </LinearGradient>
                </Defs>
                <Circle
                    cx={center}
                    cy={center}
                    r={radius - strokeWidth / 2}
                    stroke="rgba(247, 248, 248, 1)"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                />
                <Circle
                    cx={center}
                    cy={center}
                    r={radius - strokeWidth / 2}
                    stroke="url(#grad)"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progress/1.18}, ${circumference}`}
                />
            </Svg>
            <View style={styles.button}>
                <Image
                    source={require("../../../assets/images/bottlefull.png")}
                    style={{width:40,height:40,marginTop:5}}
                />
                <GradientText x={25} y={40} fontSize={"35"} text="0" colors={['#92A3FD', '#9DCEFF',]} />
                <GradientText x={10} y={30} fontSize={"20"} text="/2000" colors={['#92A3FD', '#9DCEFF',]} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        backgroundColor: "transparent",
        alignItems:"center",
        width:70,
        top:-1
    }
})
export default CircleBar;
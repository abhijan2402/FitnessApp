import React, { useEffect, useRef ,useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native'
import Svg, {  Circle } from 'react-native-svg'

function CircleBar() {
    const progressAnimation = new Animated.Value(0)
    const progressRef = useRef(null);
    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }
    const Size = 200;
    const strokeWidth = 20;
    const center = Size / 2;
    const radius = Size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const [percentage,setPercentange]=useState(50);
    useEffect(() => {
        animation('50')
    }, []);
    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage])
        return () => {
            progressAnimation.removeAllListeners();
        }
    }, [percentage])
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Svg width={Size} height={Size}>
                <Circle stroke="white" cx={center} cy={center} r={radius} strokeWidth={strokeWidth}  />
                <Circle ref={progressRef} stroke="rgba(23,121,251,1)"
                    cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                />
            </Svg>
            <View style={styles.button}>
                <Image
                    source={require("../../../assets/images/bottlefull.png")}
                    style={{width:40,height:40}}
                />
                <Text style={{fontWeight:"bold",fontSize:25,color:"white",textAlign:"center"}}>
                    0{"\n"}<Text style={{fontWeight:"bold",fontSize:15,color:"white",textAlign:"center"}}>/2000</Text>
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        backgroundColor: "transparent",
        borderRadius: 100,
        padding: 40,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default CircleBar;
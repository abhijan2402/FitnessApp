import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {GestureDetector,Gesture} from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
const {height} = Dimensions.get('window');
const maxTranslateY = -height
const BottomSheet = React.forwardRef( ({},ref)=>{
    const translateY = useSharedValue(0);
    const context = useSharedValue({y:0})
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination)=>{
        "worklet";
        active.value = destination === 0 ?false : true
        translateY.value = withSpring(destination,{damping:50})
    },[])
    useImperativeHandle(ref,()=>({scrollTo}),[scrollTo])
    const gesture = Gesture.Pan().onStart(()=>{
        context.value = {y:translateY.value}
    }).onUpdate(event=>{
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value,maxTranslateY)
    }).onEnd(()=>{
        if(translateY.value > - height / 3 )
            scrollTo(0)
        else if(translateY.value < -height / 1.5)
            scrollTo(maxTranslateY)
    });
    const isActive = useCallback(()=>{
        return active.value
    })
    useEffect(()=>{
       scrollTo(-height / 3)
    },[])
    const bottomSheetStyle = useAnimatedStyle(()=>{
        const borderRadius = interpolate(translateY.value,[maxTranslateY + 50,maxTranslateY],[25,5],Extrapolate.CLAMP)
        return {
            borderRadius,
            transform:[{translateY:translateY.value}]
        }
    })
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer,bottomSheetStyle]}/>
            
        </GestureDetector>
    );
})
const styles = StyleSheet.create({
    bottomSheetContainer:{
        height:height,
        width:"100%",
        backgroundColor:'white',
        position:'absolute',
        top:height,
        borderRadius:25
    }
})
export default BottomSheet;
import { View, FlatList, StyleSheet, Animated, Dimensions, Text } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
const SPACING = 20;

const GoalSlider = () => {
    const cardContent = [
        {
            id:1,
            title:"Improve Shape",
            subTitle:"I have a low amount of body fat and need / want to build more muscle"
        },
        {
            id:2,
            title:"Lean & Tone",
            subTitle:"I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way"
        },
        {
            id:3,
            title:"Lose a Fat",
            subTitle:"I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass"
        },
    ]
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
         <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={cardContent}
            keyExtractor={(item) => item.id}
            horizontal
            decelerationRate={0.5}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            renderItem={({ item, index }) => {
            const inputRange = [
                (index -0.5) * width,
                index * width,
                (index + 0.5) * width,
            ];

            const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [70,30,70],
                extrapolate: 'clamp',
            });

                return (
                    <Animated.View
                        style={[styles.slidingCard,{transform:[{translateY:translateY}]}]}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{width:40,height:2,backgroundColor:"white",marginTop:5}}/>
                        <Text style={styles.subTitle}>{item.subTitle}</Text>
                    </Animated.View>
                );
            }}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    slidingCard:{
        width:width-40,
        marginHorizontal: SPACING,
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 34,
        height:height/1.5,
        elevation:10,
        shadowColor: 'rgba(197, 139, 242, 0.3)',
    },
    title:{
        fontWeight:"600",
        fontSize:14,
        lineHeight:21,
        color:"white",
        textAlign:"center"
    },
    subTitle:{
        fontWeight:"400",
        fontSize:12,
        lineHeight:18,
        color:"white",
        textAlign:"center",
        marginTop:15,
        width:'60%'
    }
  });
export default GoalSlider
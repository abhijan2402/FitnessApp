import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Hom from '../../assets/icons/Hom.svg'
import Cam from '../../assets/icons/Cam.svg'
import NavSearch from '../../assets/icons/NavSearch.svg'
import Pro from '../../assets/icons/Pro.svg'
import Tas from '../../assets/icons/Tas.svg'
//screens for tab
import Home from '../BottomScreen/Home';
import Task from '../BottomScreen/Task';
import Camera from '../BottomScreen/Camera';
import Profile from '../BottomScreen/Profile';
import Search from '../BottomScreen/Search';
const windwoheight = Dimensions.get('window').height
const Tab = createBottomTabNavigator();
const BottomTab = () => {
   
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                borderColor: "white",
                
                tabBarStyle: {
                   
                    backgroundColor: "white",
                    height: 80,
                    position: 'absolute',
                    paddingVertical: 10,
                    ...styles.shadow,
                },

            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: 10, marginBottom: 20,color:focused?'pink':'blue' }}>
                                <Hom height={24} width={24} xml={(focused ? '#7FCBD3' : 'grey')}/>
                                
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Task" component={Task}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                               <Tas height={24} width={24}/>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginBottom: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // zIndex: 10,
                                backgroundColor: "white",
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                borderWidth: 5,
                                borderColor: focused ? '#FDC1FA' : "white"
                            }}
                        >
                             <NavSearch />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Camera" component={Camera}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                              <Cam height={24} width={24}/>

                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                               <Pro height={24} width={24}/>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            width: 0,
            height: -10
        },
        shadowColor: "black",
        elevation: 40
    }
})
export default BottomTab;

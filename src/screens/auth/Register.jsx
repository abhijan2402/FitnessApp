import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import SmallText from '../../components/Text/SmallText';
import TextH4 from '../../components/Text/TextH4';
import Input from '../../components/Form/Input';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Profile from '../../../assets/icons/Profile.svg'
import Message from '../../../assets/icons/Message.svg'
import Lock from '../../../assets/icons/Lock.svg'
import { FONTS } from '../../constants/Fonts';
import Check from '../../components/auth/Check';
import Eye from '../../../assets/icons/eye.svg';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { SCREENS } from '../../constants/Screens';
const { width, height } = Dimensions.get('window');
const Register = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.MainView}>
            <View style={styles.Heading}>
                    <SmallText style={{ fontWeight: "700", color: "black", fontSize: 16, }}>Hey there,</SmallText>
                    <TextH4 style={{ marginTop: 7 }}>Create an Account</TextH4>
            </View>

            <View style={styles.first }>
                        <Input placeholder={'First Name'} customStyle={{width:'80%'}} icon={<Profile width={20} height={20} />}/>
            </View>

            <View style={styles.weight}>
                        <Input placeholder={'Last Name'} customStyle={{width:'80%'}} icon={<Profile width={20} height={20}/>}/>
            </View>

            <View style={styles.weight}>
                        <Input placeholder={'Mobile'} customStyle={{width:'80%'}} icon={<Message width={20} height={20}/>}/>
            </View>

            <View style={styles.weight}>
                        <Input placeholder={'Password'} customStyle={{width:'80%'}} icon={<Lock width={20} height={20}/>}/>
        </View>  
        
        <View style={{display:"flex",flexDirection:"row"}}>
                    <Check/>
                    <Text style={{fontFamily:FONTS.FONT_POPPINS_REGULAR,fontSize:12}}>By continuing you accept our Privacy Policy{"\n"} and Term of Use</Text>
        </View>

        <View style={{ alignItems: "center", marginTop: "18%" }}>
            <PrimaryButton onPress={()=>navigation.navigate(SCREENS.CREATEPROFILE)} containerStyle={{ width: width - 80, }} title={'Register'} />
        </View>
                    <Text style={{ marginTop: "8%" }}>Or</Text>

        <View style={[styles.IconView, { marginTop: "8%" }]}>
                    <View style={styles.iconContainer}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/300/300221.png" }} style={styles.icon} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/4922/4922978.png" }} style={styles.icon} />
                    </View>
                </View>  
                <Pressable onPress={()=>navigation.navigate(SCREENS.OTP)} style={[styles.IconView, { alignItems: "center" }]}>
                    <SmallText style={{ fontSize: 14 }}>Already have an account?</SmallText>
                    <TextH4 style={{ fontSize: 14, color: "#C58BF2", marginLeft: 5 }}>Login</TextH4>
                </Pressable>            
        </View> 
    )
}

export default Register
const styles = StyleSheet.create({
    MainView: {
        flex:1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center"
    },
    first:{
        flexDirection:'row',
        marginBottom:15,
        marginTop: 7 
    },
    weight:{
        flexDirection:'row',
        marginBottom:15
    },
    weightLabelContainer:{
        width:60,
        height:60,
        borderRadius:15,
        marginLeft:10
    },
    Heading: {
        height: height / 9,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%"
    },
    icon: {
        width: 30,
        height: 30
    },
    IconView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15
    },
    iconContainer: {
        borderWidth: 1,
        borderColor: "#DDDADA",
        padding: 8,
        borderRadius: 8,
        marginHorizontal: 30
    },
})
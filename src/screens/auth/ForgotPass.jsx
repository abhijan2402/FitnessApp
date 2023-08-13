import { StyleSheet, Text, View, Dimensions, Image, TextInput, ActivityIndicator } from 'react-native'
import PrimaryButton from '../../components/Button/PrimaryButton';
import Input from '../../components/Form/Input';
import SmallText from '../../components/Text/SmallText';
import TextH4 from '../../components/Text/TextH4';
import Email from '../../../assets/icons/email.svg';
import Pass from '../../../assets/icons/Pass.svg';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { SCREENS } from '../../constants/Screens';
import { GlobalContext } from '../../../App';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { forgotPassword, getOtp, getUser, loginUser } from '../../backend/utilFunctions';
import { storeDataInAsyncStorage } from '../../utils/common';
import { storageKeyName } from '../../constants/Data';
import CustomToast from '../../components/common/Toast';
import { useRef } from 'react';
import { fetch } from 'react-native-ssl-pinning';
import { ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');
const TIMER_SECONDS = 59;
const TIMER_MINUTES = 1;
const SECONDS = 59
let timeInterval = null;

const ForgotPass = () => {
    const navigation = useNavigation();
    const { setLoggedInUser } = useContext(GlobalContext)
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState('')
    const [confirmPass, setconfirmPass] = useState("")
    const [loading, setLoading] = useState(false)
    const childRef = useRef(null);
    const [toastColorState, setToastColorState] = useState('');
    const [toastTextColorState, setToastTextColorState] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    const [timerSeconds,setTimerSeconds] = useState(TIMER_SECONDS)
    const [timerMinutes,setTimerMinutes] = useState(TIMER_MINUTES)
    const [resendAvailable,setResendAvailable] = useState(true);
    const [hash,setHash] = useState();

    function getOtpByPhone(){
        setLoading(true)
        //validation required
        getOtp(phone)
        .then(res=>setHash(res.hash))
        .catch(error=>{
            console.log(error.message);
            console.log("Message ",error.message)
        }).finally(()=>setLoading(false))
    }
    function onPressSendOTP(){
        setTimerMinutes(TIMER_MINUTES)
        setTimerSeconds(TIMER_SECONDS)
        setResendAvailable(false);
        getOtpByPhone()
        timeInterval = setInterval(()=>{
            setTimerSeconds(prevTime=>prevTime - 1)
        },1000)
    }
    useEffect(()=>{
        if(timerSeconds === 0 && timerMinutes === 0){
            clearInterval(timeInterval)
            setResendAvailable(true);
        }
        else if(timerSeconds === 0){
            setTimerSeconds(SECONDS)
            setTimerMinutes(prev=>prev - 1);
        }
        
    },[timerSeconds,timerMinutes])

    function onResetPassword(){
        setLoading(true);
        const info = {
            phone,hash,otp,email,password,confirmPassword:confirmPass
        }
        forgotPassword(info)
        .then(()=>{
            navigation.navigate(SCREENS.LOGIN)
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }
    return (
        <View style={styles.MainView}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <CustomToast
                        toastColor={toastColorState}
                        toastTextColor={toastTextColorState}
                        toastMessage={toastMessage}
                        ref={childRef}
                    />
                    <View style={styles.Heading}>
                        {/* <SmallText style={{ fontWeight: "700", color: "black", fontSize: 16, }}>Hey there,</SmallText> */}
                        <TextH4 style={{ marginTop: 7 }}>Forgot Password</TextH4>
                    </View>
                    <View style={{ width: "85%", marginTop: 7 }}>
                        <Input placeholder={"Phone"} value={phone} keyboardType='numeric' onChangeText={(value) => setPhone(value)} icon={<Email width={20} height={20} />} />
                        {!resendAvailable && TIMER_SECONDS > 0 && <SmallText style={{ textAlign: "center", marginVertical: 20, color: "#92A3FD" }} onPress={onPressSendOTP}>{timerMinutes<10?`0${timerMinutes}`:timerMinutes}:{timerSeconds<10?`0${timerSeconds}`:timerSeconds}</SmallText>}
                        {phone.length === 10 && resendAvailable && <SmallText style={{ textAlign: "center", marginVertical: 20, color: "#92A3FD" }} onPress={onPressSendOTP}>Send OTP</SmallText>}
                    </View>
                    <View style={{ width: "85%", marginTop: 7 }}>
                        <Input placeholder={"OTP"} value={otp} onChangeText={(value) => setOtp(value)} icon={<Email width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 7 }}>
                        <Input placeholder={"Email"} value={email} onChangeText={(value) => setEmail(value)} icon={<Email width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 15 }}>
                        <Input placeholder={"Password"} value={password} onChangeText={(value) => setPassword(value)} icon={<Pass width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 15 }}>
                        <Input placeholder={"Confirm Password"} value={confirmPass} onChangeText={(value) => setconfirmPass(value)} icon={<Pass width={20} height={20} />} />
                    </View>
                    <View style={{ alignItems: "center", marginTop: "25%" }}>
                        {
                            loading ?
                                <ActivityIndicator size={30} color={'blue'} /> :
                                <PrimaryButton containerStyle={{ width: width - 30, }} title={'Set Password'} onPress={() => onResetPassword()} />
                        }
                    </View>
                    <Pressable onPress={() => navigation.navigate(SCREENS.LOGIN)} style={[styles.IconView, { alignItems: "center" }]}>
                        <SmallText style={{ fontSize: 14 }}>Already have an account?</SmallText>
                        <TextH4 style={{ fontSize: 14, color: "#C58BF2", marginLeft: 5 }}>Login</TextH4>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default ForgotPass


const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center"
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
    InputOTP: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        marginHorizontal: 10,
    },
    OTPInput: {
        borderRadius: 10,
        paddingHorizontal: 18,
        backgroundColor: "#ECF2FF",
        textAlign: 'center',
    }
})
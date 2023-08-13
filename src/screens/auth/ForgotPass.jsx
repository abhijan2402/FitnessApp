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
import { useContext } from 'react';
import { useState } from 'react';
import { getUser, loginUser } from '../../backend/utilFunctions';
import { storeDataInAsyncStorage } from '../../utils/common';
import { storageKeyName } from '../../constants/Data';
import CustomToast from '../../components/common/Toast';
import { useRef } from 'react';
import { fetch } from 'react-native-ssl-pinning';
import { ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');
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
                        <TextH4 style={{ marginTop: 7 }}>Forgo Password</TextH4>
                    </View>
                    <View style={{ width: "85%", marginTop: 7 }}>
                        <Input placeholder={"Phone"} keyboardType='numeric' onChangeText={(value) => setPhone(value)} icon={<Email width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 7 }}>
                        <Input placeholder={"OTP"} onChangeText={(value) => setEmail(value)} icon={<Email width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 7 }}>
                        <Input placeholder={"Email"} onChangeText={(value) => setOtp(value)} icon={<Email width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 15 }}>
                        <Input placeholder={"Password"} onChangeText={(value) => setPassword(value)} icon={<Pass width={20} height={20} />} />
                    </View>
                    <View style={{ width: "85%", marginTop: 15 }}>
                        <Input placeholder={"Confirm Password"} onChangeText={(value) => setconfirmPass(value)} icon={<Pass width={20} height={20} />} />
                    </View>
                    <View style={{ alignItems: "center", marginTop: "25%" }}>
                        {
                            loading ?
                                <ActivityIndicator size={30} color={'blue'} /> :
                                <PrimaryButton containerStyle={{ width: width - 30, }} title={'Set Password'} onPress={() => Login()} />
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
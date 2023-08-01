import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import ProfileTop from '../../components/profile/ProfileTop';
import ProfileDesc from '../../components/profile/ProfileDesc';
import TextH4 from '../../components/Text/TextH4';
import ProfileOption from '../../components/profile/ProfileOption';
const { width, height } = Dimensions.get('window');
import UserIcon from '../../../assets/icons/UserIcon.svg';
import Workout from '../../../assets/icons/Workout.svg';
import Achivement from '../../../assets/icons/Achivement.svg';
import Activity from '../../../assets/icons/Activity.svg';
import Right from '../../../assets/icons/Right.svg';
import Privacy from '../../../assets/icons/Privacy.svg';
import Setting from '../../../assets/icons/Setting.svg';
import Contact from '../../../assets/icons/Contact.svg';
import PopUp from '../../../assets/icons/PopUp.svg';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/Screens';
import GradientSwitch from '../../components/common/GradientSwitch';
import { GlobalContext } from '../../../App';
import { getAge, removeFromAsyncStorage } from '../../utils/common';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { storageKeyName } from '../../constants/Data';
const Profile = () => {
    const navigation = useNavigation();
    const { user, setLoggedInUser } = useContext(GlobalContext)
    async function onLogout() {
        await removeFromAsyncStorage(storageKeyName);
        setLoggedInUser(null)
    }
    return (
        <View style={styles.Container}>
            <Header title="Profile" />
            <ScrollView>
                <ProfileTop name={`${user.first_name} ${user.last_name}`} Program={user.goal} />
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: 20 }}>
                    <ProfileDesc value={user.height} vauleOf={"Height"} unit={"cm"} />
                    <ProfileDesc value={user.weight} vauleOf={"Weight"} unit={"kg"} />
                    <ProfileDesc value={getAge(user.dob)} vauleOf={"Age"} unit={"yo"} />
                </View>
                <View style={{ marginLeft: "9%", marginRight: 5, marginTop: "10%" }}>
                    <TextH4 style={{ marginVertical: 10 }}>Account</TextH4>
                    <ProfileOption onPress={() => navigation.navigate(SCREENS.ACCOUNT)} leftIcon={<UserIcon width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Personal Data"} />
                    <ProfileOption onPress={() => navigation.navigate(SCREENS.ADDITIONALINFO)} leftIcon={<UserIcon width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Additional Data"} />
                    <ProfileOption onPress={() => console.log('should be navigated to other screen')} leftIcon={<Achivement width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Achievement"} />
                    <ProfileOption onPress={() => console.log('should be navigated to other screen')} leftIcon={<Activity width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Activity History"} />
                    <ProfileOption onPress={() => console.log('should be navigated to other screen')} leftIcon={<Workout width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Workout Progress"} />
                </View>
                <View style={{ marginLeft: "9%", marginRight: 5, marginTop: "10%" }}>
                    <TextH4 style={{ marginVertical: 10 }}>Notification</TextH4>
                    <ProfileOption leftIcon={<PopUp width={20} height={20} />} rightIcon={<GradientSwitch />} Title={"Pop-up Notification"} />
                </View>
                <View style={{ marginLeft: "9%", marginRight: 5, marginTop: "10%" }}>
                    <TextH4 style={{ marginVertical: 10 }}>Other</TextH4>
                    <ProfileOption leftIcon={<Contact width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Contact Us"} />
                    <ProfileOption leftIcon={<Privacy width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Privacy Policy"} />
                    <ProfileOption leftIcon={<Setting width={20} height={20} />} rightIcon={<Right width={20} height={20} />} Title={"Settings"} />
                </View>
                <View style={{ marginHorizontal: 30, marginVertical: 40 }}>
                    <PrimaryButton title={'Logout'} onPress={() => onLogout()} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white"
    }
})
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SmallText from '../../components/Text/SmallText';
import TextH4 from '../../components/Text/TextH4';
import Input from '../../components/Form/Input';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Profile from '../../../assets/icons/Profile.svg';
import Message from '../../../assets/icons/Message.svg';
import Lock from '../../../assets/icons/Lock.svg';
import {FONTS} from '../../constants/Fonts';
import Check from '../../components/auth/Check';
import Eye from '../../../assets/icons/eye.svg';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {SCREENS} from '../../constants/Screens';
import CustomToast from '../../components/common/Toast';
import {useRef} from 'react';
import {ActivityIndicator} from 'react-native';
const {width, height} = Dimensions.get('window');
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Register = ({user, setUser}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const childRef = useRef(null);
  const [toastColorState, setToastColorState] = useState('');
  const [toastTextColorState, setToastTextColorState] = useState('white');
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);

  //Image States
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [Photo, setPhoto] = useState(false);
  const [photoResult, setPhotoResult] = useState(null);
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const OpenGallery = async () => {
    try {
      setPhoto(false);
      const result = await launchImageLibrary(options);
      const data = result.assets[0].uri;
      setPhotoResult(
        result && result.assets && result.assets[0] ? result.assets[0] : null,
      );
      setGalleryPhoto(data);
      setPhoto(true);
    } catch (error) {
      setPhotoResult(null);
      console.log(error, 'error');
      setPhoto(false);
    }
  };
  function onNext() {
    try {
      if (!firstName) throw 'Enter First Name';
      if (!lastName) throw 'Entet Last Name';
      if (!email) throw 'Enter Email';
      if (!password) throw 'Enter Password';
      if (!photoResult) throw 'Add Photo';
      setLoading(true);
      setUser({
        ...user,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        image: {
          uri: photoResult.uri,
          name: photoResult.fileName,
          type: photoResult.type,
        },
      });
      navigation.navigate(SCREENS.CREATEPROFILE);
    } catch (error) {
      setToastMessage(error);
      setToastTextColorState('white');
      setToastColorState('red');
      childRef.current.showToast();
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={styles.MainView}>
      <CustomToast
        toastColor={toastColorState}
        toastTextColor={toastTextColorState}
        toastMessage={toastMessage}
        ref={childRef}
      />
      <View style={styles.Heading}>
        <SmallText style={{fontWeight: '700', color: 'black', fontSize: 16}}>
          Hey there,
        </SmallText>
        <TextH4 style={{marginTop: 7}}>Create an Account</TextH4>
      </View>
      <TouchableOpacity style={{marginVertical: 10}} onPress={OpenGallery}>
        {!Photo ? (
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3237/3237472.png',
            }}
            style={{width: 150, height: 150}}
          />
        ) : (
          <Image
            source={{uri: galleryPhoto}}
            style={{width: 150, height: 150, borderRadius: 70}}
          />
        )}
      </TouchableOpacity>
      <View style={styles.first}>
        <Input
          placeholder={'First Name'}
          customStyle={{width: '80%'}}
          value={firstName}
          onChangeText={text => setFirstName(text)}
          icon={<Profile width={20} height={20} />}
        />
      </View>

      <View style={styles.weight}>
        <Input
          placeholder={'Last Name'}
          customStyle={{width: '80%'}}
          icon={<Profile width={20} height={20} />}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>

      <View style={styles.weight}>
        <Input
          placeholder={'Email'}
          customStyle={{width: '80%'}}
          icon={<Message width={20} height={20} />}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.weight}>
        <Input
          placeholder={'Password'}
          customStyle={{width: '80%'}}
          icon={<Lock width={20} height={20} />}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Check />
        <Text style={{fontFamily: FONTS.FONT_POPPINS_REGULAR, fontSize: 12}}>
          By continuing you accept our Privacy Policy{'\n'} and Term of Use
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: '18%'}}>
        {loading ? (
          <ActivityIndicator size={30} color={'blue'} />
        ) : (
          <PrimaryButton
            onPress={onNext}
            containerStyle={{width: width - 80}}
            title={'Next'}
          />
        )}
      </View>
      <Text style={{marginTop: '8%'}}>Or</Text>

      <View style={[styles.IconView, {marginTop: '8%'}]}>
        <View style={styles.iconContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png',
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/4922/4922978.png',
            }}
            style={styles.icon}
          />
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate(SCREENS.LOGIN)}
        style={[styles.IconView, {alignItems: 'center'}]}>
        <SmallText style={{fontSize: 14}}>Already have an account?</SmallText>
        <TextH4 style={{fontSize: 14, color: '#C58BF2', marginLeft: 5}}>
          Login
        </TextH4>
      </Pressable>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  first: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 7,
  },
  weight: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  weightLabelContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginLeft: 10,
  },
  Heading: {
    height: height / 9,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  IconView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: '#DDDADA',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 30,
  },
});
